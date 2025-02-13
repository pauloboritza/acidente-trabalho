import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const AnaliseBarreiras = ({ values, handleChange, handleBlur }: any) => {
  const categorias = [
    { label: 'Mecânica', campo: 'mecanica' },
    { label: 'Cinética', campo: 'cinetica' },
    { label: 'Temperaturas Extremas', campo: 'temperaturasExtremas' },
    { label: 'Elétrica', campo: 'eletrica' },
    { label: 'Química', campo: 'quimica' },
    { label: 'Biologia', campo: 'biologia' },
    { label: 'Energia Armazenada', campo: 'energiaArmazenada' },
    { label: 'Radiações', campo: 'radiacoes' },
    { label: 'Acústica', campo: 'acustica' },
    { label: 'Outras', campo: 'outras' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Análise de Barreiras</Text>

      {categorias.map((categoria, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{categoria.label}</Text>

          {/* Sem Falha */}
          <View style={styles.radioGroup}>
            <Text style={styles.label}>Sem Falha:</Text>
            <RadioButton.Group
              onValueChange={handleChange(`analiseBarreiras.${categoria.campo}.presentes.semFalha`)}
              value={values.analiseBarreiras[categoria.campo]?.presentes?.semFalha || ''}
            >
              <View style={styles.radioOptions}>
                <RadioButton.Item label="Presente" value="P" />
                <RadioButton.Item label="Ausente" value="A" />
              </View>
            </RadioButton.Group>
          </View>

          {/* Com Falha */}
          <View style={styles.radioGroup}>
            <Text style={styles.label}>Com Falha:</Text>
            <RadioButton.Group
              onValueChange={handleChange(`analiseBarreiras.${categoria.campo}.presentes.comFalha`)}
              value={values.analiseBarreiras[categoria.campo]?.presentes?.comFalha || ''}
            >
              <View style={styles.radioOptions}>
                <RadioButton.Item label="Presente" value="P" />
                <RadioButton.Item label="Ausente" value="A" />
              </View>
            </RadioButton.Group>
          </View>

          {/* Ausentes */}
          <View style={styles.inputRow}>
            <Text style={styles.label}>Ausentes:</Text>
            <TextInput
              style={styles.textInput}
              value={values.analiseBarreiras[categoria.campo]?.ausentes || ''}
              onChangeText={handleChange(`analiseBarreiras.${categoria.campo}.ausentes`)}
              onBlur={handleBlur(`analiseBarreiras.${categoria.campo}.ausentes`)}
            />
          </View>

          {/* Observação */}
          <View style={styles.inputRow}>
            <Text style={styles.label}>Observação:</Text>
            <TextInput
              style={styles.textInput}
              value={values.analiseBarreiras[categoria.campo]?.observacao || ''}
              onChangeText={handleChange(`analiseBarreiras.${categoria.campo}.observacao`)}
              onBlur={handleBlur(`analiseBarreiras.${categoria.campo}.observacao`)}
            />
          </View>
          <View style={{gap: 20}}></View>
        </View>
      ))}
    </View>
  );
};

export default AnaliseBarreiras;



const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
      },
      categoryContainer: {
        marginBottom: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginVertical: 5
      },
      categoryTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#494848',
        marginBottom: 10,
      },
      radioGroup: {
        marginBottom: 10,
      },
      label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#494848',
        marginBottom: 5,
        width: 100,
      },
      radioOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      textInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 10,
      },
  });