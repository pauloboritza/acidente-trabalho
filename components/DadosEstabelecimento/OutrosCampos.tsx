import styles from "@/constants/styles";
import { View } from "react-native";
import { RadioButton, TextInput, Text } from "react-native-paper";

const OutrosCampos = ({ values, handleChange, handleBlur }: any) => (
    <View>
      <TextInput
        label="Número Total de Trabalhadores"
        value={values.estabelecimento.nTotalTrabalhadores} 
        onChangeText={handleChange('estabelecimento.nTotalTrabalhadores')}
        onBlur={handleBlur('estabelecimento.nTotalTrabalhadores')}
        style={styles.input} />
      <TextInput label="Número de Homens"
        value={values.estabelecimento.nHomens}
        onChangeText={handleChange('estabelecimento.nHomens')}
        onBlur={handleBlur('estabelecimento.nHomens')}
        style={styles.input} />
      <TextInput label="Número de Mulheres"
        value={values.estabelecimento.nMulheres}
        onChangeText={handleChange('estabelecimento.nMulheres')}
        onBlur={handleBlur('estabelecimento.nMulheres')}
        style={styles.input} />
      <TextInput label="Ramo de Atividade"
        value={values.estabelecimento.ramoAtividade}
        onChangeText={handleChange('estabelecimento.ramoAtividade')}
        onBlur={handleBlur('estabelecimento.ramoAtividade')}
        style={styles.input} />
      <TextInput label="CNAE" 
        value={values.estabelecimento.cnae} 
        onChangeText={handleChange('estabelecimento.cnae')}
        onBlur={handleBlur('estabelecimento.cnae')}
        style={styles.input} />
  
      {/* Grau de Risco */}
      <View>
        <Text style={styles.textLabel}>Grau de Risco:</Text>
        <RadioButton.Group onValueChange={handleChange('estabelecimento.grauRisco')} value={values.estabelecimento.grauRisco}>
          <View style={styles.radioContainer}>
            <RadioButton.Item label="1" value="1" />
            <RadioButton.Item label="2" value="2" />
            <RadioButton.Item label="3" value="3" />
            <RadioButton.Item label="4" value="4" />
          </View>
        </RadioButton.Group>
      </View>
  
      {/* É Terceirizado */}
      <View>
        <Text style={styles.textLabel}>É Terceirizado?</Text>
        <RadioButton.Group onValueChange={handleChange('estabelecimento.eTercerizado')} value={values.estabelecimento.eTercerizado}>
          <View style={styles.radioContainer}>
            <RadioButton.Item label="Sim" value="S" />
            <RadioButton.Item label="Não" value="N" />
          </View>
        </RadioButton.Group>
      </View>
    </View>
);

export default OutrosCampos;
  