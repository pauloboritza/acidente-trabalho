import React, { useState } from 'react';
import { ScrollView, View, FlatList } from 'react-native';
import { Button, Text, Divider, List, Checkbox, RadioButton } from 'react-native-paper';
//import realm from '../database';
import { Alert } from 'react-native';
import { Formik } from 'formik';
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

const FormScreen = () => {
   

  const salvarFormulario = () => {
    // realm.write(() => {
    //   realm.create('Form', {
    //     id: Math.random().toString(),
    //     dataInspecao,
    //     numeroSinan,
    //     motivoInspecao,
    //     nome,
    //     nomeMae,
    //     cpf,
    //     sexo,
    //     idade,
    //     raca,
    //     dataNascimento,
    //     telefone,
    //     escolaridade,
    //     ocupacao,
    //     dataAdmissao,
    //     jornadaTrabalho,
    //     regimeContrato,
    //     endereco,
    //     cep,
    //     bairro,
    //     municipioResidencia,
    //   });
    // });
    Alert.alert('Sucesso', 'Formulário salvo com sucesso!');
  };

  return (
    <Formik
      initialValues={{
        dataInspecao: undefined,numeroSinan:'',motivoInspecao:'', 
        trabalhador:{nome:'',nomeMae:'',cpf:'',sexo:'',idade:'',raca:'',dataNascimento:'',telefone:'',escolaridade:'',ocupacao:'',dataAdmissao:'',jornadaTrabalho:'',regimeContrato:'',endereco:'',cep:'',bairro:'',municipioResidencia:''},
        estabelecimento:{
          pf:{cpf:'',nome:'',cep:'',municipio:'',endereco:'',telefone:'',email:''},
          pj:{cnpj:'',nome:'',cep:'',municipio:'',endereco:'',telefone:'',email:''},
          nTotalTrabalhadores:'',nHomens:'',nMulheres:'',ramoAtividade:'',cnae:'',grauRisco:'',eTercerizado:'',
          terceirizado:{cnpj:'',nome:'',cep:'',municipio:'',endereco:'',telefone:'',email:'',nTotalTrabalhadores:'',nHomens:'',nMulheres:'',ramoAtividade:'',cnae:'',grauRisco:''}
        },
        acidente:{
          tipo:'',emitiuCat:'',nomeEstabelecimento:'',setorAcidente:'', municipioAcidente:'',enderecoAcidente:'',data:undefined, hora:undefined,horasTrabalhadas:'',fazHorasExtras:'',qtdHorasExtras:'',funcaoAcidente:'',tempoFuncao:'',teveTreinamento:'',teveTreinamentoComp:'',descricaoTreinamento:'',causaAcidenteManuEq:'',causaAcidente:'',diagnosticoLesao:'',causaObito:'',maisTrabalhadoresAtingidos:{res:'', qtd:''},outrosObitos:{res:'', qtd:''},outrosAcidentes:{res:'', qtd:''}
        },
        descTrabalhoHabitual:'',
        trabRealizadoDiaAcidente:'',
        descLocalAcidente:'',
        sequenciaEventosAcidente:'',
        fatoresContribuintes: {individuo: '',tarefa: '',material: '',meioTrabalho: ''},
        analiseBarreiras: {
          mecanica: { presentes:{semFalha: '', comFalha: ''}, ausentes: '',  observacao: '' },
          cinetica: { presentes:{semFalha: '', comFalha: ''}, ausentes: '', observacao: '' },
          temperaturasExtremas: { presentes:{semFalha: '', comFalha: ''}, comFalha: '', observacao: '' },
          eletrica: { presentes:{semFalha: '', comFalha: ''}, comFalha: '', observacao: '' },
          quimica: { presentes:{semFalha: '', comFalha: ''}, comFalha: '', observacao: '' },
          biologia: { presentes:{semFalha: '', comFalha: ''}, comFalha: '', observacao: '' },
          energiaArmazenada: { presentes:{semFalha: '', comFalha: ''}, ausentes: '', observacao: '' },
          radiacoes: { presentes:{semFalha: '', comFalha: ''}, ausentes: '', observacao: '' },
          acustica: { presentes:{semFalha: '', comFalha: ''}, ausentes: '', observacao: '' },
          outras: { presentes:{semFalha: '', comFalha: ''}, ausentes: '', observacao: '' },
        },
        gestaoSeguranca: {
          registroAnteriorSemelhante:'',
          registroSolictacaoSolucaoProblema:'',
        },
        gestaoProducaoVariedade:{
          contribuicaoAspectosGerenciaisJornadaTrabalho:'',
          contribuicaoAspectosGerenciaisAdequacaoDemandas:''
        },
        outrosFatoresGestaoSistemaContribuido:'',
        informacoesPrestadasPor: {trabalhador: '',preposto: '',representanteSindical: '',testemunha: '',familiar: '',outros: ''},
        procedimentosAdotados: {intimacao: '',infracao: '',interdicao: '',outro: ''},
        conclusoesRecomendacoes: '',
        conclusoesRecomendacoesData:'',
        conclusoesRecomendacoesLocal:'',
        equipeTecnica:{
          A:{nome:'', funcao:'', registroConcelho:''},
          B:{nome:'', funcao:'', registroConcelho:''},
          deAcordoCom:''
        }
      }}
      onSubmit={values => console.log(values)}
    >
    {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
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
      {/* Botão de Enviar */}
      <Button mode="contained" onPress={e=>handleSubmit()} style={styles.button}>
        Enviar Formulário
      </Button>
    </ScrollView>

    )}
    </Formik>
  );
};

export default FormScreen;
