import styles from "@/constants/styles";
import { View, StyleSheet } from "react-native";
import { RadioButton, TextInput, Text, List, Divider, Checkbox } from "react-native-paper";
import DatePiker from "./DatePiker";
const InformacoesFinais = ({ values, handleChange, handleBlur, setFieldValue}: any)=>{
    function onMarked(value: any, field: any){
        if(value == 'S'){
            setFieldValue(field, '')
        }else{
            setFieldValue(field, 'S')
        }
        
    }
    return(
    <List.Accordion title="Informações Finais" left={(props) => <List.Icon {...props} icon="alert-circle" />}>
        <View style={[styles.section, {marginTop: -5}]}>
            <View style={info.checkboxContainer}>
                <Text style={info.checkboxText}>INFORMAÇÕES PRESTADAS POR:</Text>
                <View style={info.checkboxItem}>
                    <Checkbox.Item label="Trabalhador" status="unchecked" />
                    <Checkbox.Item label="Preposto do estabelecimento" status="unchecked" />
                    <Checkbox.Item label="Representante Sindical" status="unchecked" />
                    <Checkbox.Item label="Testemunha" status="unchecked" />
                    <Checkbox.Item label="Familiar" status="unchecked" />
                    <Checkbox.Item label="Outros" status="unchecked" />
                    
                </View>
            </View>

            <View style={[info.checkboxContainer, {height: 150}]}>
                <Text style={info.checkboxText}>PROCEDIMENTOS ADOTADOS:</Text>
                <View style={info.checkboxItem}>
                    <Checkbox.Item label="Intimação" 
                        status={values.procedimentosAdotados.intimacao?'checked': 'unchecked'}
                        onPress={e=>onMarked(values.procedimentosAdotados.intimacao,'procedimentosAdotados.intimacao')}/>
                    <Checkbox.Item label="Infração" 
                        status={values.procedimentosAdotados.infracao?'checked': 'unchecked'}
                        onPress={e=>onMarked(values.procedimentosAdotados.infracao,'procedimentosAdotados.infracao')} />
                    <Checkbox.Item label="Interdição"
                        status={values.procedimentosAdotados.interdicao?'checked': 'unchecked'}
                        onPress={e=>onMarked(values.procedimentosAdotados.interdicao,'procedimentosAdotados.interdicao')} />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Checkbox.Item label="Outro:" 
                            status={values.procedimentosAdotados.outro?'checked': 'unchecked'}
                            onPress={e=>onMarked(values.procedimentosAdotados.outro,'procedimentosAdotados.outro')} />
                        <View style={{height: 30, width: 90, marginLeft: -20, marginEnd: 10}}>
                            <TextInput
                                style={{alignItems: 'center', height: 20, }}
                                value={values.procedimentosAdotados.outro}
                                onChangeText={handleChange('procedimentosAdotados.outro')}
                                onBlur={handleBlur('procedimentosAdotados.outro')}
                            />
                        </View>
                    </View>                  
                </View>
            </View>

            <View style={info.checkboxContainer}>
                <Text style={[styles.textTitle, {textAlign: 'center', marginTop: 3}]}>CONCLUSÕES E RECOMENDAÇÕES</Text>
                <View style={[styles.textInputBox,{marginHorizontal: 5, marginVertical: 3}]}>
                    <TextInput
                        label='Conclusão'
                        multiline
                        style={{height: 250}}
                        value={values.conclusoesRecomendacoes}
                        onChangeText={handleChange('conclusoesRecomendacoes')}
                        onBlur={handleBlur('conclusoesRecomendacoes')}
                    />
                </View>
            </View>
            

        </View>
    </List.Accordion>
)}

export default InformacoesFinais;

const info = StyleSheet.create({
    checkboxContainer:{
        width: '100%',
        height: 280,
        backgroundColor: '#fff',
        marginVertical: 5,
        borderTopEndRadius: 5,
        borderTopStartRadius: 5
    },
    checkboxText:{
        textAlign: 'center',
        marginTop: 3,
        fontSize: 14,
        fontWeight: 700
    },
    checkboxItem:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent: 'space-around',
        alignSelf: 'auto',
        width: 'auto',
        paddingLeft: 0,
        paddingEnd: 0,
    }
})

