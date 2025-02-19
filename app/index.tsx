import React from "react";
import { router, Link } from "expo-router";
import { View, StyleSheet, Platform, ImageBackground } from "react-native";
import { Text, Button, AnimatedFAB } from "react-native-paper";
import ListAcidentes from "@/components/listAcidentes";

const image = require('@/assets/images/seg-trabalho.png')

const Index = ()=>{
    function handleForm(){
        router.navigate('/form')
    }

    return (
        <View style={styles.container}>   
        <ImageBackground source={image} imageStyle={{resizeMode: 'center'}} resizeMode="cover" style={styles.image}>       

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
        justifyContent: 'center'
    },
})