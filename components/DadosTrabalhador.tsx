import styles from "@/constants/styles";
import { View } from "react-native";
import { RadioButton, TextInput, Text, List } from "react-native-paper";
import DatePiker from "./DatePiker";
const DadosTrabalhador = ({ values, handleBlur, handleChange, setFieldValue}: any) => (
    <List.Accordion title="Dados do Trabalhador" left={(props) => <List.Icon {...props} icon="account" />}>
        <View style={styles.section}>
          <TextInput
            label="Nome"
            value={values.trabalhador.nome}
            onChangeText={handleChange('trabalhador.nome')}
            onBlur={handleBlur('trabalhador.nome')}
            style={styles.input}
          />
          <TextInput
            label="Nome da Mãe"
            value={values.trabalhador.nomeMae}
            onChangeText={handleChange('trabalhador.nomeMae')}
            onBlur={handleBlur('trabalhador.nomeMae')}
            style={styles.input}
          />
          <TextInput
            label="CPF"
            value={values.trabalhador.cpf}
            onChangeText={handleChange('trabalhador.cpf')}
            onBlur={handleBlur('trabalhador.cpf')}
            style={styles.input}
          />
          <View>            
            <View style={{flex: 1, justifyContent: 'flex-start', marginBottom: 10, backgroundColor:'#ffff', borderTopEndRadius: 5}}>
              <RadioButton.Group
                onValueChange={handleChange('trabalhador.sexo')}
                value={values.trabalhador.sexo}
              >
                <View style={{flexDirection: 'row'}}>
                <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>SEXO:</Text>
                  <RadioButton.Item label="M" value="M" />
                  <RadioButton.Item label="F" value="F" />
                </View>
              </RadioButton.Group>
            </View>
          </View>
          <TextInput
            keyboardType="number-pad"
            label="Idade"
            value={values.trabalhador.idade}
            onChangeText={handleChange('trabalhador.idade')}
            onBlur={handleBlur('trabalhador.idade')}
            style={styles.input}
          />
          <TextInput
            label="Raça/Cor"
            value={values.trabalhador.raca}
            onChangeText={handleChange('trabalhador.raca')}
            onBlur={handleBlur('trabalhador.raca')}
            style={styles.input}
          />          
          <DatePiker 
            label='Data de Nascimento'
            fieldValue='trabalhador.dataNascimento'
            setFieldValue={setFieldValue}
            style={styles.input}
          />
          <TextInput
            label="Telefone"
            value={values.trabalhador.telefone}
            onChangeText={handleChange('trabalhador.telefone')}
            onBlur={handleBlur('trabalhador.telefone')}
            style={styles.input}
          />
          <TextInput
            label="Escolaridade"
            value={values.trabalhador.escolaridade}
            onChangeText={handleChange('trabalhador.escolaridade')}
            onBlur={handleBlur('trabalhador.escolaridade')}
            style={styles.input}
          />
          <TextInput
            label="Ocupação"
            value={values.trabalhador.ocupacao}
            onChangeText={handleChange('trabalhador.ocupacao')}
            onBlur={handleBlur('trabalhador.ocupacao')}
            style={styles.input}
          />
          
          <DatePiker 
            label='Data de Admissão'
            fieldValue='trabalhador.dataAdmissao'
            setFieldValue={setFieldValue}
            style={styles.input}
          />
          <TextInput
            label="Jornada de Trabalho"
            value={values.trabalhador.jornadaTrabalho}
            onChangeText={handleChange('trabalhador.jornadaTrabalho')}
            onBlur={handleBlur('trabalhador.jornadaTrabalho')}
            style={styles.input}
          />
          <TextInput
            label="Regime de Contrato"
            value={values.trabalhador.regimeContrato}
            onChangeText={handleChange('trabalhador.regimeContrato')}
            onBlur={handleBlur('trabalhador.regimeContrato')}
            style={styles.input}
          />
          <TextInput
            label="Endereço"
            value={values.trabalhador.endereco}
            onChangeText={handleChange('trabalhador.endereco')}
            onBlur={handleBlur('trabalhador.endereco')}
            style={styles.input}
          />
          <TextInput
            label="CEP"
            value={values.trabalhador.cep}
            onChangeText={handleChange('trabalhador.cep')}
            onBlur={handleBlur('trabalhador.cep')}
            style={styles.input}
          />
          <TextInput
            label="Bairro"
            value={values.trabalhador.bairro}
            onChangeText={handleChange('trabalhador.bairro')}
            onBlur={handleBlur('trabalhador.bairro')}
            style={styles.input}
          />
           <TextInput
            label="Número"
            keyboardType="number-pad"
            value={values.trabalhador.numero}
            onChangeText={handleChange('trabalhador.numero')}
            onBlur={handleBlur('trabalhador.numero')}
            style={styles.input}
          />
          <TextInput
            label="Município de Residência"
            value={values.trabalhador.municipioResidencia}
            onChangeText={handleChange('trabalhador.municipioResidencia')}
            onBlur={handleBlur('trabalhador.municipioResidencia')}
            style={styles.input}
          />
        </View>
      </List.Accordion>
);

export default DadosTrabalhador;