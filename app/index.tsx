import React from "react";
import { router } from "expo-router";
import { View, StyleSheet, ImageBackground } from "react-native";
import { AnimatedFAB, Button, Icon, Text } from "react-native-paper";
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListAcidentes from "@/components/ListAcidentes";
import MenuButton from "@/components/MenuButton";
import { useAssets } from "expo-asset";

const Index = ()=>{
    const [assets, error] = useAssets([
        require('@/assets/images/seg-trabalho.png')
    ])
    // React.useEffect(()=>{
    //     (async ()=>{
    //         const img = await Asset.Asset.fromURI('../assets/images/seg-trabalho.png');
    //         setImage(img.uri)
    //         console.log(img)
    //     })()
        
    //     return
    // }
    // ,[])
    // console.log(assets)
    //console.log("imG; ", assets[0].uri)
    function handleForm(){
        router.navigate('/form')
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
             
                <View style={styles.container}>   
                    <ImageBackground source={{uri:  '', width: 100, height: 100}} imageStyle={styles.imageStyle} resizeMode="cover" style={styles.image}>       

                        <MenuButton />

                        <ListAcidentes />

                        <AnimatedFAB
                            icon={'plus'}
                            label={'Novo'}
                            extended={true}
                            onPress={handleForm}
                            visible={true}
                            animateFrom={'right'}
                            iconMode={'static'}
                            style={styles.fabStyle}
                        />
                    </ImageBackground>
                </View>
            
        </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default Index;

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        gap: 20,
        marginVertical: 5
    },
    fabStyle: {
        bottom: 25,
        right: 16,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    imageStyle: {
        resizeMode: 'center'
    }
})