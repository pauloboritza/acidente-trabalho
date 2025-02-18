import React from "react";
import { View, Text, ScrollView } from "react-native"
import { useLocalSearchParams } from "expo-router";
import { useAcidentesDatabase } from "@/data/useAcidentesDatabase";
const Details = ()=>{
    const [data, setData]: any = React.useState()
    const { id } = useLocalSearchParams();
    const { get } = useAcidentesDatabase();

    React.useEffect(()=>{
        (async ()=>{
            try {
                const response = await get(id)
                if(response){
                    setData(response)
                }
            } catch (error) {
                console.log(error)
            }           
        })()
    },[])
    return(
        <ScrollView>
            {data && <>
                <Text>{JSON.stringify(data)}</Text>
            </>}
        </ScrollView>
    )
}

export default Details;