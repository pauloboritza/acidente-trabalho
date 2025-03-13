import React, { useState, useCallback, useEffect } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { Text, Searchbar } from "react-native-paper";
import { Link, useFocusEffect } from "expo-router";
import { useAcidentesDatabase } from "@/data/useAcidentesDatabase"
const ListAcidentes = ()=>{
    const { getList, remove } = useAcidentesDatabase();
    const [search, setSearch] = useState(String)
    const [acidentes, setAcidentes] = useState<any>()
    const [acidentesFilter, setAcidentesFilter] = useState<any>()
    async function getAcidentes() {
        try {
            //await remove(1)
            const res = await getList()
            setAcidentes(res)
        } catch (error) {
            console.log("Database GetList", error)
        }        
    }
    useFocusEffect(
        useCallback(() =>{
            getAcidentes()
        },[])
    )
    useEffect(()=>{
        if(acidentes?.length > 1){
            const filter = acidentes.filter((item: any)=>item.nome.toLowerCase().includes(search.toLocaleLowerCase()))
            setAcidentesFilter(filter)
        }
        if(search == ''){
            setAcidentesFilter(undefined)
        }

        return
    },[search])
    return(
        <View style={styles.container}>   
            <Searchbar 
                placeholder="Nome"
                onChangeText={(text)=>setSearch(text)}
                value={search}
            />
            <Text style={styles.title}>Acidentes cadastrados: </Text>
            {acidentes && !acidentesFilter?
                <FlatList 
                    keyExtractor={item => item.id}
                    data={acidentes}
                    renderItem={({item})=>(
                        <Link href={{pathname: '/details', params: {id: item.id }}} asChild>
                            <TouchableOpacity style={styles.listContainer} >
                                <Text style={styles.listText}>ID: {item.id}</Text>
                                <Text style={styles.listText}>NOME: {item.nome}</Text>
                            </TouchableOpacity>
                        </Link>
                    )}
                />
            :
            <FlatList 
                    keyExtractor={item => item.id}
                    data={acidentesFilter}
                    renderItem={({item})=>(
                        <Link href={{pathname: '/details', params: {id: item.id }}} asChild>
                            <TouchableOpacity style={styles.listContainer} >
                                <Text style={styles.listText}>ID: {item.id}</Text>
                                <Text style={styles.listText}>NOME: {item.nome}</Text>
                            </TouchableOpacity>
                        </Link>
                    )}
                />
            }
        </View>
    )
}

export default ListAcidentes;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    title:{
        fontSize: 16,
        fontWeight: '700',
        marginTop: 15
    },
    listContainer:{
        flex: 1,
        backgroundColor: '#151718',
        flexDirection: 'column',
        height: 40,
        width: '100%', 
        marginVertical: 2,
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 5
    },
    listText:{
        fontSize: 14,
        fontWeight: '700',
        color: '#FFF'
    },
    search: {
        height: 40,
        borderRadius: 10,
    }
})