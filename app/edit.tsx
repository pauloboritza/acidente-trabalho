import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Divider, List, Text} from 'react-native-paper';
import { Alert } from 'react-native';
import { Formik } from 'formik';
import { router, useGlobalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnaliseBarreiras from '@/components/AnaliseBarreiras';
import DadosEstabelecimento from '@/components/DadosEstabelecimento';
import styles from '@/constants/styles';
import DadosAcidente from '@/components/DadosAcidente';
import FatoresContribuintes from '@/components/FatoresContribuintes';
import DadosTrabalhador from '@/components/DadosTrabalhador';
import Descricoes from '@/components/Descricoes';
import RoteiroInicial from '@/components/RoteiroInicial';
import AnaliseGestaoSeguranca from '@/components/AnaliseGestaoSeg';
import InformacoesFinais from '@/components/InformacoesFinais';
import { useAcidentesDatabase } from '@/data/useAcidentesDatabase';

const Edit = () => {

  const { update } = useAcidentesDatabase();

  const { id, data } = useGlobalSearchParams();

  const salvarAlteracoes = async (data: any)=>{
    try {
      const res = await update(id, data)
      Alert.alert('Sucesso', 'Alterações salvas com sucesso!');
      router.back()   
      
      return res   
    } catch (error) {
      console.log(error)
    }
   
  };
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Formik
      initialValues={JSON.parse(Array.isArray(data) ? data[0] : data)} //resolver erro de tipagem e dados que são passados como array de objetos
      onSubmit={values => salvarAlteracoes(values)}
      validate={values =>{
        const errors: any = {}
        if(!values.trabalhador.nome){
          errors.trabalhador = "O nome do Trabalhador é obrigatório!"
        }
        return errors;
      }}
    >
    {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors }) => (
    <ScrollView contentContainerStyle={styles.container}>
    <Text variant="headlineMedium" style={styles.title}>
      Formulário Completo
    </Text>
    <Divider style={styles.divider} />

      {/* Seção: Roteiro Inicial */}
      <RoteiroInicial 
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
      />

      <Divider style={styles.divider} />

      {/* Seção: Dados do Trabalhador */}
      <DadosTrabalhador 
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
      />

      <Divider style={styles.divider} />
      {/* Seção: Dados do Estabelecimento */}
      <DadosEstabelecimento
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />

      <Divider style={styles.divider} />

      {/* Seção: Dados do Acidente */}
      <DadosAcidente 
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
      />

      <Divider style={styles.divider} />

      {/* Seção: Descrições */}
      <Descricoes 
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />


      <Divider style={styles.divider} />
      {/* Seção: Fatores contribuintes */}
        <FatoresContribuintes 
          values={values}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />

      <Divider style={styles.divider} />
      {/* Seção: Analise de Barreiras */}
      <List.Accordion title="Análise de Barreiras" left={(props) => <List.Icon {...props} icon="clipboard-list" />}>
      <View style={styles.section}>
        <AnaliseBarreiras 
          values={values}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </View>
      </List.Accordion>

      <Divider style={styles.divider} />
      {/* Seção: Gestão de Segurança */}
      <AnaliseGestaoSeguranca
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />

    <Divider style={styles.divider} />
      {/* Seção: Info Finais */}
      <InformacoesFinais
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        setFieldValue={setFieldValue}
      />
      
      <Divider style={styles.divider} />
      {errors?.trabalhador && <>
        <Text style={styles.error}>O nome do Trabalhador é obrigatório!</Text> 
        <Divider style={styles.divider} />
      </>}
      {/* Botão de Enviar */}      
      <Button mode="contained" onPress={e=>handleSubmit()} style={styles.button}>
        Salvar Alterações
      </Button>
    </ScrollView>

    )}
    </Formik>
    </SafeAreaView>
  );
};

export default Edit;
