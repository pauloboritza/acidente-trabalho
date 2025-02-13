import styles from "@/constants/styles";
import { View } from "react-native";
import { RadioButton, TextInput, Text } from "react-native-paper";
const CamposTerceirizado = ({ values, handleChange, handleBlur }: any) => (
    <View>
      <TextInput
        label="CNPJ (Terceirizado)"
        value={values.estabelecimento.terceirizado.cnpj}
        onChangeText={handleChange('estabelecimento.terceirizado.cnpj')}
        onBlur={handleBlur('estabelecimento.terceirizado.cnpj')}
        style={styles.input} />
      <TextInput label="Nome (Terceirizado)"
        value={values.estabelecimento.terceirizado.nome}
        onChangeText={handleChange('estabelecimento.terceirizado.nome')}
        onBlur={handleBlur('estabelecimento.terceirizado.nome')}
        style={styles.input} />
      <TextInput label="CEP (Terceirizado)"
        value={values.estabelecimento.terceirizado.cep}
        onChangeText={handleChange('estabelecimento.terceirizado.cep')}
        onBlur={handleBlur('estabelecimento.terceirizado.cep')}
        style={styles.input} />
      <TextInput label="Município (Terceirizado)"
        value={values.estabelecimento.terceirizado.municipio}
        onChangeText={handleChange('estabelecimento.terceirizado.municipio')}
        onBlur={handleBlur('estabelecimento.terceirizado.municipio')}
        style={styles.input} />
      <TextInput label="Endereço (Terceirizado)"
        value={values.estabelecimento.terceirizado.endereco} 
        onChangeText={handleChange('estabelecimento.terceirizado.endereco')}
        onBlur={handleBlur('estabelecimento.terceirizado.endereco')}
        style={styles.input} />
      <TextInput label="Telefone (Terceirizado)"
        value={values.estabelecimento.terceirizado.telefone}
        onChangeText={handleChange('estabelecimento.terceirizado.telefone')}
        onBlur={handleBlur('estabelecimento.terceirizado.telefone')}
        style={styles.input} />
      <TextInput label="E-mail (Terceirizado)"
        value={values.estabelecimento.terceirizado.email}
        onChangeText={handleChange('estabelecimento.terceirizado.email')}
        onBlur={handleBlur('estabelecimento.terceirizado.email')}
        style={styles.input} />
      <TextInput label="Número Total de Trabalhadores (Terceirizado)"
        value={values.estabelecimento.terceirizado.nTotalTrabalhadores}
        onChangeText={handleChange('estabelecimento.terceirizado.nTotalTrabalhadores')}
        onBlur={handleBlur('estabelecimento.terceirizado.nTotalTrabalhadores')}
        style={styles.input} />
      <TextInput label="Número de Homens (Terceirizado)"
        value={values.estabelecimento.terceirizado.nHomens}
        onChangeText={handleChange('estabelecimento.terceirizado.nHomens')}
        onBlur={handleBlur('estabelecimento.terceirizado.nHomens')}
        style={styles.input} />
      <TextInput label="Número de Mulheres (Terceirizado)"
        value={values.estabelecimento.terceirizado.nMulheres}
        onChangeText={handleChange('estabelecimento.terceirizado.nMulheres')}
        onBlur={handleBlur('estabelecimento.terceirizado.nMulheres')}
        style={styles.input} />
      <TextInput label="Ramo de Atividade (Terceirizado)"
        value={values.estabelecimento.terceirizado.ramoAtividade} 
        onChangeText={handleChange('estabelecimento.terceirizado.ramoAtividade')}
        onBlur={handleBlur('estabelecimento.terceirizado.ramoAtividade')}
        style={styles.input} />
      <TextInput label="CNAE (Terceirizado)"
        value={values.estabelecimento.terceirizado.cnae}
        onChangeText={handleChange('estabelecimento.terceirizado.cnae')}
        onBlur={handleBlur('estabelecimento.terceirizado.cnae')}
        style={styles.input} />
      <View>
        <Text style={styles.textLabel}>Grau de Risco (Terceirizado):</Text>
        <RadioButton.Group onValueChange={handleChange('estabelecimento.terceirizado.grauRisco')} value={values.estabelecimento.terceirizado.grauRisco}>
          <View style={styles.radioContainer}>
            <RadioButton.Item label="1" value="1" />
            <RadioButton.Item label="2" value="2" />
            <RadioButton.Item label="3" value="3" />
            <RadioButton.Item label="4" value="4" />
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );

  export default CamposTerceirizado;
  