
import { useLocalSearchParams } from "expo-router";
import { useAcidentesDatabase } from "@/data/useAcidentesDatabase";

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from "react-native-paper";
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as Asset from 'expo-asset';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const Details = ()=>{
    const [data, setData]: any = React.useState()
    const { id } = useLocalSearchParams();
    const { get } = useAcidentesDatabase();
    const [htmlContent, setHtmlContent] = useState('');
    const [pdfPath, setPdfPath]:any = useState(null);

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
    // @ts-nocheck
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
            fileName: `RELATORIO_${data.trabalhador.nome.replace(/\s/g, '')}`,
            directory: FileSystem.cacheDirectory,
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
            try {
                //Tranforma pdfPath em um tipo de URI compartilhavel
                const fileUri = pdfPath.startsWith('file:///') ? pdfPath : `file:///${pdfPath.replace('file://', '')}`;              
    
                await Sharing.shareAsync(fileUri, {
                    mimeType: 'application/pdf',
                    dialogTitle: 'Compartilhar PDF',
                });
            } catch (error) {
                console.error('Erro ao converter o caminho do arquivo:', error);
            }
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
            //console.log(htmlContent)
        }else{
            lodadData();
        }       

        return
    },[data, htmlContent])
    return(
        <>
            {data && <>
                <View style={styles.webViewContainer}>
                    {htmlContent ? 
                    <View style={{flex: 1}}>
                        <WebView
                        originWhitelist={['*']}
                        source={{ html: htmlContent}}
                        style={{ 
                            flex: 1
                        }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}                        
                        >
                        </WebView>
                    </View>
                     :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button disabled>Carregando HTML...</Button>
                        </View>
                    }
                    <View style={{ padding: 10, gap: 5 }}>
                        <Button mode="contained" onPress={createPDF}>Gerar PDF</Button>
                        {pdfPath && <Button mode="contained" onPress={sharePDF}>Compartilhar PDF</Button>}
                    </View>
                </View>
            </>}
        </>
    )
}

export default Details;

const styles = StyleSheet.create({
    webViewContainer:{
        flex: 1,
        width: 'auto',
        height: 'auto',
        
    }
})