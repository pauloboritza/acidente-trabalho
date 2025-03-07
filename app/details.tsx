import { useLocalSearchParams } from "expo-router";
import { useAcidentesDatabase } from "@/data/useAcidentesDatabase";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper";
import { WebView } from "react-native-webview";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import * as Asset from "expo-asset";
import * as FileSystem from "expo-file-system";

const Details = () => {
  const [data, setData] = useState<Record<string, any> | null>(null);
  const { id } = useLocalSearchParams();
  const { get } = useAcidentesDatabase();
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await get(id);
        if (response) {
          setData(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (!data) {
      loadData();
    } else {
      loadHtmlFile();
    }
  }, [data]);
// @ts-nocheck
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
// @ts-nocheck
  const loadHtmlFile = async () => {
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

  return (
    <View style={styles.container}>
      {htmlContent ? (
        <WebView originWhitelist={["*"]} source={{ html: htmlContent }} style={styles.webView} />
      ) : (
        <Button mode="contained" disabled>Carregando HTML...</Button>
      )}
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={printToPDF}>Gerar PDF e Compartilhar</Button>
      </View>
    </View>
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
});
