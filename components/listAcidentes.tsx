import React, { useState, useCallback, useEffect } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Text, Searchbar } from "react-native-paper";
import { Link, useFocusEffect } from "expo-router";
import { useAcidentesDatabase } from "@/data/useAcidentesDatabase";
import SwipeToDelete from '@/components/SwipeToDelete';  // Importa o componente SwipeToDelete
import { Light } from "@/constants/Colors";

const ListAcidentes = () => {
  const { getList, remove } = useAcidentesDatabase();
  const [search, setSearch] = useState("");
  const [acidentes, setAcidentes] = useState<any>([]);
  const [acidentesFilter, setAcidentesFilter] = useState<any>()

  // Função para pegar os acidentes
  async function getAcidentes() {
    try {
      const res = await getList();
      setAcidentes(res);
    } catch (error) {
      console.log("Database GetList", error);
    }
  }

  // Carrega os acidentes ao focar na tela
  useFocusEffect(
    useCallback(() => {
      getAcidentes();
    }, [])
  );

  // Função chamada para filtrar os acidentes
  useEffect(() => {
    if (acidentes?.length > 0) {
      const filter = acidentes.filter((item: any)=>item.nome.toLowerCase().includes(search.toLocaleLowerCase()))
            setAcidentesFilter(filter)
        }
        if(search == ''){
            setAcidentesFilter(undefined)
        }

        return
  }, [search]);

  // Função chamada para excluir um item da lista de acidentes
  const handleDelete = (id: any, nome: string) => {
    try {
      Alert.alert("Atenção!", `Deseja mesmo excluir permanentemente o registro de acidente do: ${nome}`, [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: async () => {
            await remove(id);
            setAcidentes((prev: any) => prev.filter((item: any) => item.id !== id)); // Atualiza o estado removendo o item
          },
        },
      ]);
    } catch (error) {
      console.log("Error removing item", error);
    }
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar por nome"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <Text style={styles.title}>Acidentes cadastrados: </Text>
      {(acidentes?.length == 0) && 
      <View style={styles.noListContainer}>
        <Text style={styles.noListText}>Nenhum acidente registrado!</Text>
      </View>      
      }

      {acidentes && !acidentesFilter?
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={acidentes}
          renderItem={({ item }) => (
            <SwipeToDelete handleDelete={handleDelete} id={item.id} nome={item.nome}>
              <Link
                href={{ pathname: "/details", params: { id: item.id } }}
                asChild
              >
                <TouchableOpacity style={styles.listContainer}>
                  <Text style={styles.listText}>ID: {item.id}</Text>
                  <Text style={styles.listText}>NOME: {item.nome}</Text>
                </TouchableOpacity>
              </Link>
            </SwipeToDelete>
          )}
        />
      :
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={acidentesFilter}
          renderItem={({ item }) => (
            <SwipeToDelete handleDelete={handleDelete} id={item.id} nome={item.nome}>
              <Link
                href={{ pathname: "/details", params: { id: item.id } }}
                asChild
              >
                <TouchableOpacity style={styles.listContainer}>
                  <Text style={styles.listText}>ID: {item.id}</Text>
                  <Text style={styles.listText}>NOME: {item.nome}</Text>
                </TouchableOpacity>
              </Link>
            </SwipeToDelete>
          )}
        /> 
      }
    </View>
  );
};

export default ListAcidentes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 15,
    color: Light.primary
  },
  listContainer: {
    flex: 1,
    backgroundColor: Light.shadow,
    flexDirection: "column",
    marginVertical: 2,
    padding: 10,
    borderRadius: 5,
  },
  listItem: {
    paddingBottom: 10,
  },
  listText: {
    fontSize: 14,
    fontWeight: "700",
    color: Light.onPrimary,
  },
  noListText:{
    fontSize: 20,
    fontWeight: "700",
    textAlign: 'center',
    color: '#C2185B'
  },
  noListContainer:{
    backgroundColor: Light.secondaryContainer,
    height: 60,
    borderRadius: 5,
    marginTop: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});
