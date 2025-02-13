import styles from "@/constants/styles";
import { View } from "react-native";
import { TextInput, Text, List } from "react-native-paper";

const FatoresContribuintes = ({ values, handleChange, handleBlur }: any) => (
    <List.Accordion title="Fatores que Contribuíram" left={(props) => <List.Icon {...props} icon="clipboard-list" />}>
      <View style={styles.section}>
        <Text style={[styles.textTitle,{fontWeight: 500}]}>(DESCREVA SE NA SITUAÇÃO DO ACIDENTE HAVIA ALGUMA MUDANÇA EM RELAÇÃO AO INDIVÍDUO/TAREFA/ MATERIAL/ MEIO DE TRABALHO)</Text>
        <Text style={{ fontSize: 14, textAlign: 'justify'}}>Na situação do acidente, houve alguma mudança em componentes do sistema?</Text>
        <TextInput
          multiline
          label="Indivíduo"
          value={values.fatoresContribuintes.individuo}
          onChangeText={handleChange('fatoresContribuintes.individuo')}
          onBlur={handleBlur('fatoresContribuintes.individuo')}
          style={[styles.input, {height: 60}]}
        />
        <TextInput
          multiline
          label="Tarefa"
          value={values.fatoresContribuintes.tarefa}
          onChangeText={handleChange('fatoresContribuintes.tarefa')}
          onBlur={handleBlur('fatoresContribuintes.tarefa')}
          style={[styles.input, {height: 60}]}
        />
        <TextInput
          multiline
          label="Material"
          value={values.fatoresContribuintes.material}
          onChangeText={handleChange('fatoresContribuintes.material')}
          onBlur={handleBlur('fatoresContribuintes.material')}
          style={[styles.input, {height: 60}]}
        />
        <TextInput
          multiline
          label="Meio de Trabalho físico e organizacional"
          value={values.fatoresContribuintes.meioTrabalho}
          onChangeText={handleChange('fatoresContribuintes.meioTrabalho')}
          onBlur={handleBlur('fatoresContribuintes.meioTrabalho')}
          style={[styles.input, {height: 60}]}
        />
      </View>
      </List.Accordion>
);

export default FatoresContribuintes;