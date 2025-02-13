import styles from "@/constants/styles";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
const PessoaFisica = ({ values, handleChange, handleBlur }: any) => (
    <View style={styles.section}>
      <TextInput label="CPF" value={values.estabelecimento.pf.cpf} onChangeText={handleChange('estabelecimento.pf.cpf')} onBlur={handleBlur('estabelecimento.pf.cpf')} style={styles.input} />
      <TextInput label="Nome" value={values.estabelecimento.pf.nome} onChangeText={handleChange('estabelecimento.pf.nome')} onBlur={handleBlur('estabelecimento.pf.nome')} style={styles.input} />
      <TextInput label="CEP" value={values.estabelecimento.pf.cep} onChangeText={handleChange('estabelecimento.pf.cep')} onBlur={handleBlur('estabelecimento.pf.cep')} style={styles.input} />
      <TextInput label="Município" value={values.estabelecimento.pf.municipio} onChangeText={handleChange('estabelecimento.pf.municipio')} onBlur={handleBlur('estabelecimento.pf.municipio')} style={styles.input} />
      <TextInput label="Endereço" value={values.estabelecimento.pf.endereco} onChangeText={handleChange('estabelecimento.pf.endereco')} onBlur={handleBlur('estabelecimento.pf.endereco')} style={styles.input} />
      <TextInput label="Telefone" value={values.estabelecimento.pf.telefone} onChangeText={handleChange('estabelecimento.pf.telefone')} onBlur={handleBlur('estabelecimento.pf.telefone')} style={styles.input} />
      <TextInput label="E-mail" value={values.estabelecimento.pf.email} onChangeText={handleChange('estabelecimento.pf.email')} onBlur={handleBlur('estabelecimento.pf.email')} style={styles.input} />
    </View>
);

export default PessoaFisica;