
import { useLocalSearchParams } from "expo-router";
import { useAcidentesDatabase } from "@/data/useAcidentesDatabase";

import React, { useState, useEffect } from 'react';
import { View, Button, Platform, ScrollView } from 'react-native';
import WebView from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as Asset from 'expo-asset';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const Details = ()=>{
    const [data, setData]: any = React.useState()
    const { id } = useLocalSearchParams();
    const { get } = useAcidentesDatabase();
    const [htmlContent, setHtmlContent] = useState('');
    const [pdfPath, setPdfPath] = useState(null);

    const lodadData = async ()=>{
        try {
            const response = await get(id)
            if(response){
                setData(response)
            }
        } catch (error) {
            console.log(error)
        }           
    }
    // 📌 FUNÇÃO PARA SUBSTITUIR AS VARIÁVEIS NO HTML
    const replaceTemplate = (html: any, data: any) => {
        return html.replace(/{{(.*?)}}/g, (_, key) => {
        const keys = key.trim().split('.');
        let value = data;
        for (const k of keys) {
            value = value[k] || ' '; // Se não encontrar, retorna "---"
        }
        return value;
        });
    };
        // 📌 GERAR PDF A PARTIR DO HTML GERADO
    const createPDF = async () => {
        try {
        const options: any = {
            html: htmlContent,
            fileName: 'Relatorio_Acidente',
            directory: FileSystem.documentDirectory,
            width: 595, // Largura do A4 em pixels
            height: 842, // Altura do A4 em pixels
            padding: 10, // 🔥 Reduzimos padding para evitar cortes
        };

        const file: any = await RNHTMLtoPDF.convert(options);
        setPdfPath(file.filePath);
        alert('PDF gerado com sucesso!');
        } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        }
    };

    // 📌 COMPARTILHAR PDF GERADO
    const sharePDF = async () => {
        if (pdfPath && (await Sharing.isAvailableAsync())) {
        await Sharing.shareAsync(pdfPath);
        } else {
        alert('O compartilhamento não está disponível no seu dispositivo.');
        }
    };
    const loadHtmlFile = async () => {
        try {
          const asset = Asset.Asset.fromModule(require('../assets/roteiro.html'));
          await asset.downloadAsync();
          const fileUri = asset.localUri || asset.uri;
          let fileContent = await FileSystem.readAsStringAsync(fileUri);
  
          // 📌 SUBSTITUI AS CHAVES DO TEMPLATE HTML PELOS VALORES DO OBJETO
          fileContent = replaceTemplate(fileContent, data);
  
          setHtmlContent(fileContent);
        } catch (error) {
          console.error('Erro ao carregar arquivo HTML:', error);
        }
      };
    React.useEffect(()=>{        
        if(data){
            loadHtmlFile();
            console.log(htmlContent)
        }else{
            lodadData();
        }       

        return
    },[data, htmlContent])
    return(
        <ScrollView>
            {data && <>
                <View style={{ flex: 1 }}>
                    {htmlContent ? (
                        <WebView
                        originWhitelist={['*']}
                        source={{ html: htmlContent }}
                        style={{ flex: 1 }}
                        />
                    ) : (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button title="Carregando HTML..." disabled />
                        </View>
                    )}
                    <View style={{ padding: 10 }}>
                        <Button title="Gerar PDF" onPress={createPDF} />
                        {pdfPath && <Button title="Compartilhar PDF" onPress={sharePDF} />}
                    </View>
                </View>
            </>}
        </ScrollView>
    )
}

export default Details;