import React from "react";
import styles from "@/constants/styles";
import { View } from "react-native";
import { RadioButton, TextInput, Text, List } from "react-native-paper";
import DatePiker from "./DatePiker";

const RoteiroInicial = ({ values, handleChange, handleBlur, setFieldValue }: any) =>(
    <List.Accordion title="Roteiro Inicial" left={(props) => <List.Icon {...props} icon="view-list-outline" />}>
        <View style={styles.section}>
          
          <DatePiker 
            label='Data da Inspeção'
            fieldValue='dataInspecao'
            setFieldValue={setFieldValue}
            style={styles.input}
          />            
          
          <TextInput
            label="Número SINAN-NET"
            value={values.numeroSinan}
            onChangeText={handleChange('numeroSinan')}
            onBlur={handleBlur('numeroSinan')}
            style={styles.input}
            keyboardType="number-pad"
          />

          <View style={styles.input}>
            <Text style={[styles.textLabel,{marginBottom: -25}]}>Motivo da Inspeção / Investigação do Acidente</Text>

            <RadioButton.Group
              onValueChange={handleChange('motivoInspecao')}
              value={values.motivoInspecao}
            >
              <RadioButton.Item label="Óbito" value="Óbito" />
              <RadioButton.Item label="Amputação" value="Amputação" />
              <RadioButton.Item label="Criança/Adolescente" value="Criança/Adolescente" />
              <RadioButton.Item label="Outros" value="Outros" />
            </RadioButton.Group>
          </View>

        </View>
      </List.Accordion>
);

export default RoteiroInicial;