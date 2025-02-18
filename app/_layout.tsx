import initializeDatabase from "@/data/initializeDatabase";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

export default function Layout(){
  return(<>
    {/* Inicializando o SQLite e deixando disponivel para as rotas */}
    <SQLiteProvider databaseName="acidentesTrabalhoForms.db" onInit={initializeDatabase}>
      <Stack>
        <Stack.Screen name="index" options={{
          title: 'Inicio',
          headerShown: false
        }}/>
        <Stack.Screen name="form" options={{
          title: "Novo Acidente"
        }}/>
        <Stack.Screen name="details" options={{
          title: "Detalhes"
        }}/>
      </Stack>
    </SQLiteProvider>
    </>)
}