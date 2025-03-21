import React, {useEffect, useState} from "react"
import { Alert, Image, View, StyleSheet } from "react-native"
import { Button, Text, Icon } from "react-native-paper"
import { logotipo } from "@/constants/logotipo"
import { useAcidentesDatabase } from "@/data/useAcidentesDatabase"
import * as ImagePicker from 'expo-image-picker';
import { Light } from "@/constants/Colors"

const Config = ()=>{
    const { getLogo, setLogo, delLogo } = useAcidentesDatabase()
    const [image, setImage] = useState<string>('')
    useEffect(()=>{
        (async ()=>{
            const response = await getLogo()
            if (response){
                setImage(response)
            }else{
                setImage(logotipo)
            }
        })()

        return
    }, [])
    async function handleAlter(){
        pickImage()
    }
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: true,
            aspect: [16, 10],
            quality: 0,
            base64: true
            });
        
            if (!result.canceled) {
                const format = `data:${result.assets[0].mimeType};base64,${result.assets[0].base64}`;
                setImage(format);
                await setLogo(format);
                Alert.alert("Sucesso!", "Logotipo alterado com sucesso!");
            }            
        } catch (error) {
            console.log("Alterar Logotipo: ", error)
        }        
      };
      async function handleRestore(){
        await delLogo()
        setImage(logotipo)
        Alert.alert("Sucesso!", "Logotipo padrão restaurado com sucesso!");
      }
    return (
        <View style={styles.container}>
            <Text style={styles.textLogoAtual}>Logotipo Atual:</Text>
            <Image source={{uri: image }} style={styles.image} />
            <View style={styles.buttonsContainer}>
                <Button
                    mode="contained"
                    onPress={handleAlter}
                    style={{marginTop: 20}}
                >
                    <View style={styles.button}>
                        <Icon source="camera" size={20} color={Light.onPrimary}/>
                        <Text style={styles.buttonText}>Alterar</Text>
                    </View>
                </Button>

                <Button
                    mode="contained"
                    onPress={handleRestore}
                    style={{marginTop: 20}}
                >
                    <View style={styles.button}>
                        <Icon source="restore" size={20} color={Light.onPrimary}/>
                        <Text style={styles.buttonText}>Padrão</Text>
                    </View>
                </Button>
            </View>
        </View>
    )
}
export default Config;

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: Light.onSecondary,
        padding: 20
    },
    textLogoAtual: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        color: Light.primary
    },
    image: {
        width: '70%',
        height: 80,
        resizeMode: 'stretch'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 1
    },
    buttonText: {
        fontSize: 16,
        fontWeight:'bold',
        color: Light.onPrimary
    }
})