import initializeDatabase from "@/data/initializeDatabase";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function Layout(){
  return(<>
  <SafeAreaProvider>
    {/* Inicializando o SQLite e deixando disponivel para as rotas */}
    <SQLiteProvider databaseName="acidentesTrabalhoForms.db" onInit={initializeDatabase}>
      <Stack>
        <Stack.Screen name="index" options={{
          title: 'Inicio',
          headerShown: false,
          statusBarHidden: false,
          statusBarStyle: 'dark'
        }}/>
        <Stack.Screen name="form" options={{
          title: "Novo Acidente",
          statusBarHidden: false,
          statusBarStyle: 'dark'
        }}/>
        <Stack.Screen name="details" options={{
          title: "Detalhes",
          statusBarHidden: false,
          statusBarStyle: 'dark'
        }}/>
      </Stack>
      <StatusBar style="dark" />
    </SQLiteProvider>
    </SafeAreaProvider>
    </>)
}