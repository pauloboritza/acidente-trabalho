import { Button, Icon, Text } from "react-native-paper";
import { View } from "react-native";
import { router } from "expo-router";
import { Light } from "@/constants/Colors";
const MenuButton = ()=>{
    return(
        <View style={{ alignItems: 'flex-start'}}>
            <Button
                mode="text"
                onPress={() => router.navigate('/config')}
            >
                <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <Icon source="menu" size={40} color={Light.primary} />
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: Light.primary}}>Configurações</Text>
                </View>
            </Button>
        </View>
    )
}

export default MenuButton;