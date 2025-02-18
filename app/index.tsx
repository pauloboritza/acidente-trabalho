import React from "react";
import { router, Link } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import ListAcidentes from "@/components/listAcidentes";

const Index = ()=>{
    function handleForm(){
        router.navigate('/form')
    }
    return (
        <View style={styles.container}>
            
            <Button mode="contained" onPress={handleForm}>
                Cadastrar
            </Button>

            <ListAcidentes />
        </View>
    )
}

export default Index;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        gap: 20
    }
})