import styles from "@/constants/styles";
import { View } from "react-native";
import { TextInput, Text, List, Divider } from "react-native-paper";

const Descricoes = ({values, handleBlur, handleChange}: any) => (
    <List.Accordion title="Descrições" left={(props) => <List.Icon {...props} icon="format-list-numbered" />}>
      <View style={styles.section}>
        <Divider style={styles.divider} />
        <Text style={styles.textTitle}>DESCRIÇÃO DO TRABALHO HABITUAL (ROTINEIRO - SEM ACIDENTE)</Text>
        <TextInput
          multiline
          label={'descrição'}
          value={values.descTrabalhoHabitual}
          onChangeText={handleChange('descTrabalhoHabitual')}
          onBlur={handleBlur('descTrabalhoHabitual')}
          style={styles.textInputBox}
        />  
        <Text style={styles.textTitle}>QUE TRABALHO ESTAVA SENDO REALIZADO NO DIA DO ACIDENTE?</Text>
        <TextInput
          multiline
          label={'descrição'}
          value={values.trabRealizadoDiaAcidente}
          onChangeText={handleChange('trabRealizadoDiaAcidente')}
          onBlur={handleBlur('trabRealizadoDiaAcidente')}
          style={styles.textInputBox}
        />
        <Text style={styles.textTitle}>DESCRIÇÃO DO LOCAL DO ACIDENTE</Text>
        <TextInput
          multiline
          label={'descrição'}
          value={values.descLocalAcidente}
          onChangeText={handleChange('descLocalAcidente')}
          onBlur={handleBlur('descLocalAcidente')}
          style={styles.textInputBox}
        />
        <Text style={styles.textTitle}>DESCRIÇÃO BREVE DA SEQUÊNCIA DOS EVENTOS DO ACIDENTE</Text>
        <TextInput
          multiline
          label={'descrição'}
          value={values.sequenciaEventosAcidente}
          onChangeText={handleChange('sequenciaEventosAcidente')}
          onBlur={handleBlur('sequenciaEventosAcidente')}
          style={styles.textInputBox}
        />
        </View>
    </List.Accordion>
);

export default Descricoes;