import initializeDatabase from "@/data/initializeDatabase";
import { Slot } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";


export default function Layout(){
  return(
    <SQLiteProvider databaseName="acidentesTrabalhoForms.db" onInit={initializeDatabase}>
      <Slot />
    </SQLiteProvider>
  )
}