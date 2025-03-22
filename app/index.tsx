import React from "react";
import { router } from "expo-router";
import { View, StyleSheet } from "react-native";
import { AnimatedFAB } from "react-native-paper";
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListAcidentes from "@/components/ListAcidentes";
import MenuButton from "@/components/MenuButton";
import { ImageBackground } from "@/components/ImageBackground";

const Index = ()=>{
    const img = require('@/assets/images/seg-trabalho.png')
    
    function handleForm(){
        router.navigate('/form')
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>   
                <ImageBackground source={img}>       

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
        flex: 1
    },
    imageStyle: {
        resizeMode: 'center'
    }
})