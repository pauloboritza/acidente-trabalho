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
                    <Checkbox.Item label="Trabalhador"
                     status={values.informacoesPrestadasPor.trabalhador?'checked': 'unchecked'}
                     onPress={e=>onMarked(values.informacoesPrestadasPor.trabalhador,'informacoesPrestadasPor.trabalhador')}/>
                    <Checkbox.Item label="Preposto do estabelecimento"
                     status={values.informacoesPrestadasPor.preposto?'checked': 'unchecked'}
                     onPress={e=>onMarked(values.informacoesPrestadasPor.preposto,'informacoesPrestadasPor.preposto')} />
                    <Checkbox.Item label="Representante Sindical"
                     status={values.informacoesPrestadasPor.representanteSindical?'checked': 'unchecked'}
                     onPress={e=>onMarked(values.informacoesPrestadasPor.representanteSindical,'informacoesPrestadasPor.representanteSindical')} />
                    <Checkbox.Item label="Testemunha"
                     status={values.informacoesPrestadasPor.testemunha?'checked': 'unchecked'}
                     onPress={e=>onMarked(values.informacoesPrestadasPor.testemunha,'informacoesPrestadasPor.testemunha')} />
                    <Checkbox.Item label="Familiar"
                     status={values.informacoesPrestadasPor.familiar?'checked': 'unchecked'}
                     onPress={e=>onMarked(values.informacoesPrestadasPor.familiar,'informacoesPrestadasPor.familiar')} />
                    <Checkbox.Item label="Outros"
                     status={values.informacoesPrestadasPor.outros?'checked': 'unchecked'}
                     onPress={e=>onMarked(values.informacoesPrestadasPor.outros,'informacoesPrestadasPor.outros')} />  
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
                            status={values.procedimentosAdotados.outro.chk?'checked': 'unchecked'}
                            onPress={e=>onMarked(values.procedimentosAdotados.outro.chk,'procedimentosAdotados.outro.chk')} />
                        <View style={{height: 30, width: 90, marginLeft: -20, marginEnd: 10}}>
                            <TextInput
                                style={{alignItems: 'center', height: 20, }}
                                value={values.procedimentosAdotados.outro.desc}
                                onChangeText={handleChange('procedimentosAdotados.outro.desc')}
                                onBlur={handleBlur('procedimentosAdotados.outro.desc')}
                            />
                        </View>
                    </View>                  
                </View>
            </View>

            <View style={[info.checkboxContainer, {height: 400, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch',  flex: 1}]}>
                <View>
                    <Text style={[styles.textTitle, {textAlign: 'center', marginTop: 3}]}>CONCLUSÕES E RECOMENDAÇÕES</Text>
                </View>
                <View style={[styles.textInputBox,{marginHorizontal: 5, marginVertical: 3, flex: 1}]}>
                    <TextInput
                        label='Conclusão'
                        multiline
                        style={{height: 230}}
                        value={values.conclusoesRecomendacoes}
                        onChangeText={handleChange('conclusoesRecomendacoes')}
                        onBlur={handleBlur('conclusoesRecomendacoes')}
                    />
                </View>
            
                <View style={{height: 70, marginHorizontal: 5, flex: 0.3, marginTop: 5}}>
                    <DatePiker 
                        label="Data"
                        setFieldValue={setFieldValue}
                        fieldValue='conclusoesRecomendacoesData'
                    />
                </View>
                <View style={{height: 70, marginHorizontal: 5, flex: 0.3}}>
                    <TextInput
                        label='Local'
                        value={values.conclusoesRecomendacoesLocal}
                        onChangeText={handleChange('conclusoesRecomendacoesLocal')}
                        onBlur={handleBlur('conclusoesRecomendacoesLocal')}
                    />
                </View>
            </View>
           
           
            <View style={[info.checkboxContainer, {height: 440, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch',  flex: 1}]}>
                <View>
                    <Text style={[styles.textTitle, {textAlign: 'center', marginTop: 3}]}>EQUIPE TÉCNICA</Text>
                </View>
                <View style={[styles.textInputBox,{marginHorizontal: 5, marginVertical: 3, flex: 1}]}>
                    <Text style={{fontSize: 12, textAlign: 'justify'}}>Nome do técnico Função/Profissão Conselho de Classe:</Text>
                    <TextInput
                        label='Nome'
                        multiline
                        style={{height: 100}}
                        value={values.equipeTecnica.A}
                        onChangeText={handleChange('equipeTecnica.A')}
                        onBlur={handleBlur('equipeTecnica.A')}
                    />
                </View>
                <View style={[styles.textInputBox,{marginHorizontal: 5, marginVertical: 3, flex: 1}]}>
                    <Text style={{fontSize: 12, textAlign: 'justify'}}>Nome do técnico Função/Profissão Conselho de Classe:</Text>
                    <TextInput
                        label='Nome'
                        multiline
                        style={{height: 100}}
                        value={values.equipeTecnica.B}
                        onChangeText={handleChange('equipeTecnica.B')}
                        onBlur={handleBlur('equipeTecnica.B')}
                    />
                </View>
                <View style={[styles.textInputBox,{marginHorizontal: 5, marginVertical: 3, flex: 1}]}>
                    <Text style={{fontSize: 12, textAlign: 'justify'}}>De acordo: Nome do responsável para área de visat ou outra correlata</Text>
                    <TextInput
                        label='De acordo:'
                        multiline
                        style={{height: 100}}
                        value={values.equipeTecnica.deAcordoCom}
                        onChangeText={handleChange('equipeTecnica.deAcordoCom')}
                        onBlur={handleBlur('equipeTecnica.deAcordoCom')}
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

