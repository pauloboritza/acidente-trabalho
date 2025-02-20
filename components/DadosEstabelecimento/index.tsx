import React from 'react';
import { ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import PessoaFisica from './PessoaFisica ';
import PessoaJuridica from './PessoaJuridica';
import CamposTerceirizado from './CamposTerceirizado';
import OutrosCampos from './OutrosCampos';
import styles from '@/constants/styles';

const DadosEstabelecimento = ({ values, handleChange, handleBlur }: any) => {
  return (
      <List.Accordion title="Dados do Estabelecimento" left={(props) => <List.Icon {...props} icon="domain" />}>
        <View style={styles.section}>
          {/* Pessoa Física */}
          <List.Accordion title="Pessoa Física" left={(props) => <List.Icon {...props} icon="account" />}>
            <PessoaFisica values={values} handleChange={handleChange} handleBlur={handleBlur} />
          </List.Accordion>

          {/* Pessoa Jurídica */}
          <List.Accordion title="Pessoa Jurídica" left={(props) => <List.Icon {...props} icon="domain" />}>
            <PessoaJuridica values={values} handleChange={handleChange} handleBlur={handleBlur} />
          </List.Accordion>

          {/* Outros Campos */}
          <OutrosCampos values={values} handleChange={handleChange} handleBlur={handleBlur} />

          {/* Terceirizado */}
          {values.estabelecimento.eTercerizado === 'SIM' && (
            <CamposTerceirizado values={values} handleChange={handleChange} handleBlur={handleBlur} />
          )}
        </View>
      </List.Accordion>
  );
};

export default DadosEstabelecimento;
