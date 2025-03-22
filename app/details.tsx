import { useLocalSearchParams } from "expo-router";
import { useAcidentesDatabase } from "@/data/useAcidentesDatabase";
import React, { useState, useCallback } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper";
import { WebView } from "react-native-webview";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import * as Asset from "expo-asset";
import * as FileSystem from "expo-file-system";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from "expo-router";
import { AnimatedFAB } from "react-native-paper";
import { logotipoDefault } from "@/constants/logotipo";

const Details = () => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const { id } = useLocalSearchParams();
  const { get, getLogo } = useAcidentesDatabase();
  const [htmlContent, setHtmlContent] = useState("");
  const router = useRouter();

  const loadData = async () => {
    try {
      const response = await get(id);
      const logo = await getLogo();
      if (response && logo) {
        setData({logotipo: logo, ...response})
        loadHtmlFile({logotipo: logo, ...response})
      }else{
        if(response){
          setData({logotipo: logotipoDefault, ...response})
          loadHtmlFile({logotipo: logotipoDefault, ...response})
        }
      }
      return true

    } catch (error) {
      console.log(error);
      return false
    }
  };
  useFocusEffect(
    useCallback(() => {  
      loadData()            
    }, [])
  )


  const replaceTemplate = (html: string, data: Record<string, any> | null) => {
    return html.replace(/{{(.*?)}}/g, (_: string, key: string): string => {
      const keys = key.trim().split(".");
      let value: any = data;
      for (const k of keys) {
        value = value[k] || " ";
      }
      return String(value);
    });
  };

  const loadHtmlFile = async (data: Record<string, any> | null) => {
    try {
      const asset = Asset.Asset.fromModule(require("../assets/roteiro.html"));
      await asset.downloadAsync();
      const fileUri = asset.localUri || asset.uri;
      let fileContent = await FileSystem.readAsStringAsync(fileUri);
      fileContent = replaceTemplate(fileContent, data);
      setHtmlContent(fileContent);
    } catch (error) {
      console.error("Erro ao carregar arquivo HTML:", error);
    }
  };

  const printToPDF = async () => {
    try {
      const { uri } = await Print.printToFileAsync({ 
        html: htmlContent,
        width: 650, // Largura 595 do A4 em pixels
        height: 842, // Altura 842 do A4 em pixels
        margins: {
            left: 20,
            top: 50,
            right: 20,
            bottom: 50,
        }
     });
      console.log("PDF gerado em:", uri);
      await shareAsync(uri, { mimeType: "application/pdf" });
    } catch (error) {
      Alert.alert("Erro", "Falha ao gerar ou compartilhar o PDF.");
    }
  };

  function handleEdit() {
    router.navigate({pathname: '/edit', params: { id, data: JSON.stringify(data) } });
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {htmlContent ? (<>
          <WebView originWhitelist={["*"]} source={{ html: htmlContent }} style={styles.webView} />
            <AnimatedFAB 
              icon={'file-document-edit'}
              label={'editar'}
              extended={false}
              visible={true}
              animateFrom={'right'}
              iconMode={'static'}
              onPress={handleEdit}
              style={styles.fabStyle}
            />
          </>) : (
          <Button mode="contained" disabled>Carregando HTML...</Button>
        )}
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={printToPDF}>Gerar PDF e Compartilhar</Button>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  webView: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
  },
  fabStyle: {
    bottom: 80,
    right: 30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
