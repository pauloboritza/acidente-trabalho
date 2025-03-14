import styles from "@/constants/styles";
import { View } from "react-native";
import { RadioButton, TextInput, Text, List, Divider } from "react-native-paper";
import DatePiker from "./DatePiker";
const AnaliseGestaoSeguranca = ({values, handleChange, handleBlur}: any)=>(
 <List.Accordion title="Análise Gestão de Segurança" left={(props) => <List.Icon {...props} icon="security" />}>
    <View style={styles.section}>
        <Divider style={styles.divider} />
        <Text style={[styles.textTitle, {textAlign: 'center'}]}>Componente Gestão de Segurança</Text>
        <Text style={{textAlign: 'justify', fontSize: 13}}>Há registro de acidente anterior com características assemelhadas?</Text>
        <TextInput
        label="Registro de Acidente Anterior Semelhante"
        value={values.gestaoSeguranca.registroAnteriorSemelhante}
        onChangeText={handleChange('gestaoSeguranca.registroAnteriorSemelhante')}
        onBlur={handleBlur('gestaoSeguranca.registroAnteriorSemelhante')}
        style={styles.textInputBox}
        />
        <Text style={{textAlign: 'justify', fontSize: 13}}>Há registros (livro de atas de CIPA, relatórios de acidentes, outros?) de pedido de solução para problema de segurança que persiste sem atendimento por parte de gerências?</Text>
        <TextInput
        label="Registro de Pedido de Solução"
        value={values.gestaoSeguranca.registroSolictacaoSolucaoProblema}
        onChangeText={handleChange('gestaoSeguranca.registroSolictacaoSolucaoProblema')}
        onBlur={handleBlur('gestaoSeguranca.registroSolictacaoSolucaoProblema')}
        style={styles.textInputBox}
        />

        <Divider style={styles.divider} />
        <Text style={[styles.textTitle, {textAlign: 'center'}]}>Componente Gestão de Produção e Variedade</Text>
        <Text style={{textAlign: 'justify', fontSize: 13}}>Há indícios de contribuição de aspectos gerenciais relacionados à gestão de jornadas de trabalho, horas extras, intervalos de descanso, etc?</Text>
        <TextInput
        label="Contribuição de Aspectos Gerenciais Relacionados à Jornada de Trabalho"
        value={values.gestaoProducaoVariedade.contribuicaoAspectosGerenciaisJornadaTrabalho}
        onChangeText={handleChange('gestaoProducaoVariedade.contribuicaoAspectosGerenciaisJornadaTrabalho')}
        onBlur={handleBlur('gestaoProducaoVariedade.contribuicaoAspectosGerenciaisJornadaTrabalho')}
        style={styles.textInputBox}
        />
        <Text style={{textAlign: 'justify', fontSize: 13}}>Há indícios de contribuição de aspectos gerenciais relacionados à adequação de demandas aos recursos ou capacidade instalada do sistema?</Text>
        <TextInput
        label="Contribuição de Aspectos Gerenciais Relacionados à Adequação de Demandas"
        value={values.gestaoProducaoVariedade.contribuicaoAspectosGerenciaisAdequacaoDemandas}
        onChangeText={handleChange('gestaoProducaoVariedade.contribuicaoAspectosGerenciaisAdequacaoDemandas')}
        onBlur={handleBlur('gestaoProducaoVariedade.contribuicaoAspectosGerenciaisAdequacaoDemandas')}
        style={styles.textInputBox}
        />
        
        <Divider style={styles.divider} />
        <Text style={{textAlign: 'justify', fontSize: 13}}>Outros fatores da gestão do sistema que tenham contribuído para as origens de acidentes? Por favor, descreva-os.</Text>
        <TextInput
        label="Outros"
        value={values.outrosFatoresGestaoSistemaContribuido}
        onChangeText={handleChange('outrosFatoresGestaoSistemaContribuido')}
        onBlur={handleBlur('outrosFatoresGestaoSistemaContribuido')}
        style={styles.textInputBox}
        />
    </View>
 </List.Accordion>
)

export default AnaliseGestaoSeguranca;