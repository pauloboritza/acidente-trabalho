import styles from "@/constants/styles";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
const PessoaJuridica = ({ values, handleChange, handleBlur }: any) => (
    <View style={styles.section}>
      <TextInput label="CNPJ"
        value={values.estabelecimento.pj.cnpj} 
        onChangeText={handleChange('estabelecimento.pj.cnpj')}
        onBlur={handleBlur('estabelecimento.pj.cnpj')}
        style={styles.input} />
      <TextInput label="Nome"
        value={values.estabelecimento.pj.nome}
        onChangeText={handleChange('estabelecimento.pj.nome')}
        onBlur={handleBlur('estabelecimento.pj.nome')}
        style={styles.input} />
      <TextInput label="CEP"
        value={values.estabelecimento.pj.cep} 
        onChangeText={handleChange('estabelecimento.pj.cep')}
        onBlur={handleBlur('estabelecimento.pj.cep')}
        style={styles.input} />
      <TextInput
        label="Município" 
        value={values.estabelecimento.pj.municipio}
        onChangeText={handleChange('estabelecimento.pj.municipio')}
        onBlur={handleBlur('estabelecimento.pj.municipio')}
        style={styles.input} />
      <TextInput
        label="Endereço" 
        value={values.estabelecimento.pj.endereco}
        onChangeText={handleChange('estabelecimento.pj.endereco')}
        onBlur={handleBlur('estabelecimento.pj.endereco')}
        style={styles.input} />
      <TextInput 
        label="Telefone"
        value={values.estabelecimento.pj.telefone}
        onChangeText={handleChange('estabelecimento.pj.telefone')}
        onBlur={handleBlur('estabelecimento.pj.telefone')}
        style={styles.input} />
      <TextInput
        label="E-mail"
        value={values.estabelecimento.pj.email}
        onChangeText={handleChange('estabelecimento.pj.email')}
        onBlur={handleBlur('estabelecimento.pj.email')}
        style={styles.input} />
    </View>
);

export default PessoaJuridica;