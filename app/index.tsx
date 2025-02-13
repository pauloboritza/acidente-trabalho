import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button, Text, Divider, List, Checkbox, RadioButton } from 'react-native-paper';
import { DatePickerInput, TimePicker } from 'react-native-paper-dates';
//import realm from '../database';
import { Alert } from 'react-native';
import { Formik } from 'formik';
import AnaliseBarreiras from '@/components/AnaliseBarreiras';
import DadosEstabelecimento from '@/components/DadosEstabelecimento';
import styles from '@/constants/styles';
import DadosAcidente from '@/components/DadosAcidente';

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
    {({ handleChange, handleBlur, handleSubmit, values }) => (
    <ScrollView contentContainerStyle={styles.container}>
    <Text variant="headlineMedium" style={styles.title}>
      Formulário Completo
    </Text>
    <Divider style={styles.divider} />

      {/* Seção: Roteiro Inicial */}
      <List.Accordion title="Roteiro Inicial" left={(props) => <List.Icon {...props} icon="clipboard-list" />}>
        <View style={styles.section}>
          
          <DatePickerInput 
            locale='pt'
            saveLabel='Data da Inspeção'
            value={values.dataInspecao}
            onChange={e=>handleChange('dataInspecao')}
            inputMode='start'
            style={{marginBottom: 15}}
          />        
          <TextInput
            label="Número SINAN-NET"
            value={values.numeroSinan}
            onChangeText={handleChange('numeroSinan')}
            onBlur={handleBlur('numeroSinan')}
            style={styles.input}
          />

          <View style={styles.input}>
            <Text style={[styles.textLabel,{marginBottom: -25}]}>Motivo da Inspeção / Investigação do Acidente</Text>

            <RadioButton.Group
              onValueChange={handleChange('motivoInspecao')}
              value={values.motivoInspecao}
            >
              <RadioButton.Item label="Óbito" value="obito" />
              <RadioButton.Item label="Amputação" value="amputacao" />
              <RadioButton.Item label="Criança/Adolescente" value="criancaAdolescente" />
              <RadioButton.Item label="Outros" value="outros" />
            </RadioButton.Group>
          </View>

          
         

          {/* <TextInput
            label="Motivo da Inspeção"
            value={values.motivoInspecao}
            onChangeText={handleChange('motivoInspecao')}
            onBlur={handleBlur('motivoInspecao')}
            style={styles.input}
          /> */}
        </View>
      </List.Accordion>

      <Divider style={styles.divider} />

      {/* Seção: Dados do Trabalhador */}
      <List.Accordion title="Dados do Trabalhador" left={(props) => <List.Icon {...props} icon="account" />}>
        <View style={styles.section}>
          <TextInput
            label="Nome"
            value={values.trabalhador.nome}
            onChangeText={handleChange('trabalhador.nome')}
            onBlur={handleBlur('trabalhador.nome')}
            style={styles.input}
          />
          <TextInput
            label="Nome da Mãe"
            value={values.trabalhador.nomeMae}
            onChangeText={handleChange('trabalhador.nomeMae')}
            onBlur={handleBlur('trabalhador.nomeMae')}
            style={styles.input}
          />
          <TextInput
            label="CPF"
            value={values.trabalhador.cpf}
            onChangeText={handleChange('trabalhador.cpf')}
            onBlur={handleBlur('trabalhador.cpf')}
            style={styles.input}
          />
          <View>            
            <View style={{flex: 1, justifyContent: 'flex-start', marginBottom: 10, backgroundColor:'#ffff', borderTopEndRadius: 5}}>
              <RadioButton.Group
                onValueChange={handleChange('trabalhador.sexo')}
                value={values.trabalhador.sexo}
              >
                <View style={{flexDirection: 'row'}}>
                <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>SEXO:</Text>
                  <RadioButton.Item label="M" value="M" />
                  <RadioButton.Item label="F" value="F" />
                </View>
              </RadioButton.Group>
            </View>
          </View>
          <TextInput
            label="Idade"
            value={values.trabalhador.idade}
            onChangeText={handleChange('trabalhador.idade')}
            onBlur={handleBlur('trabalhador.idade')}
            style={styles.input}
          />
          <TextInput
            label="Raça/Cor"
            value={values.trabalhador.raca}
            onChangeText={handleChange('trabalhador.raca')}
            onBlur={handleBlur('trabalhador.raca')}
            style={styles.input}
          />
          <TextInput
            label="Data de Nascimento"
            value={values.trabalhador.dataNascimento}
            onChangeText={handleChange('trabalhador.dataNascimento')}
            onBlur={handleBlur('trabalhador.dataNascimento')}
            style={styles.input}
          />
          <TextInput
            label="Telefone"
            value={values.trabalhador.telefone}
            onChangeText={handleChange('trabalhador.telefone')}
            onBlur={handleBlur('trabalhador.telefone')}
            style={styles.input}
          />
          <TextInput
            label="Escolaridade"
            value={values.trabalhador.escolaridade}
            onChangeText={handleChange('trabalhador.escolaridade')}
            onBlur={handleBlur('trabalhador.escolaridade')}
            style={styles.input}
          />
          <TextInput
            label="Ocupação"
            value={values.trabalhador.ocupacao}
            onChangeText={handleChange('trabalhador.ocupacao')}
            onBlur={handleBlur('trabalhador.ocupacao')}
            style={styles.input}
          />
          <TextInput
            label="Data de Admissão"
            value={values.trabalhador.dataAdmissao}
            onChangeText={handleChange('trabalhador.dataAdmissao')}
            onBlur={handleBlur('trabalhador.dataAdmissao')}
            style={styles.input}
          />
          <TextInput
            label="Jornada de Trabalho"
            value={values.trabalhador.jornadaTrabalho}
            onChangeText={handleChange('trabalhador.jornadaTrabalho')}
            onBlur={handleBlur('trabalhador.jornadaTrabalho')}
            style={styles.input}
          />
          <TextInput
            label="Regime de Contrato"
            value={values.trabalhador.regimeContrato}
            onChangeText={handleChange('trabalhador.regimeContrato')}
            onBlur={handleBlur('trabalhador.regimeContrato')}
            style={styles.input}
          />
          <TextInput
            label="Endereço"
            value={values.trabalhador.endereco}
            onChangeText={handleChange('trabalhador.endereco')}
            onBlur={handleBlur('trabalhador.endereco')}
            style={styles.input}
          />
          <TextInput
            label="CEP"
            value={values.trabalhador.cep}
            onChangeText={handleChange('trabalhador.cep')}
            onBlur={handleBlur('trabalhador.cep')}
            style={styles.input}
          />
          <TextInput
            label="Bairro"
            value={values.trabalhador.bairro}
            onChangeText={handleChange('trabalhador.bairro')}
            onBlur={handleBlur('trabalhador.bairro')}
            style={styles.input}
          />
          <TextInput
            label="Município de Residência"
            value={values.trabalhador.municipioResidencia}
            onChangeText={handleChange('trabalhador.municipioResidencia')}
            onBlur={handleBlur('trabalhador.municipioResidencia')}
            style={styles.input}
          />
        </View>
      </List.Accordion>

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
      />

      <Divider style={styles.divider} />

      {/* Seção: Descrições */}
      <List.Accordion title="Descrições" left={(props) => <List.Icon {...props} icon="clipboard-list" />}>
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


      <Divider style={styles.divider} />
      {/* Seção: Fatores contribuintes */}
      <List.Accordion title="Fatores que Contribuíram" left={(props) => <List.Icon {...props} icon="clipboard-list" />}>
      <View style={styles.section}>
        <Text style={[styles.textTitle,{fontWeight: 500}]}>(DESCREVA SE NA SITUAÇÃO DO ACIDENTE HAVIA ALGUMA MUDANÇA EM RELAÇÃO AO INDIVÍDUO/TAREFA/ MATERIAL/ MEIO DE TRABALHO)</Text>
        <Text style={{ fontSize: 14, textAlign: 'justify'}}>Na situação do acidente, houve alguma mudança em componentes do sistema?</Text>
        <TextInput
          multiline
          label="Indivíduo"
          value={values.fatoresContribuintes.individuo}
          onChangeText={handleChange('fatoresContribuintes.individuo')}
          onBlur={handleBlur('fatoresContribuintes.individuo')}
          style={[styles.input, {height: 60}]}
        />
        <TextInput
          multiline
          label="Tarefa"
          value={values.fatoresContribuintes.tarefa}
          onChangeText={handleChange('fatoresContribuintes.tarefa')}
          onBlur={handleBlur('fatoresContribuintes.tarefa')}
          style={[styles.input, {height: 60}]}
        />
        <TextInput
          multiline
          label="Material"
          value={values.fatoresContribuintes.material}
          onChangeText={handleChange('fatoresContribuintes.material')}
          onBlur={handleBlur('fatoresContribuintes.material')}
          style={[styles.input, {height: 60}]}
        />
        <TextInput
          multiline
          label="Meio de Trabalho físico e organizacional"
          value={values.fatoresContribuintes.meioTrabalho}
          onChangeText={handleChange('fatoresContribuintes.meioTrabalho')}
          onBlur={handleBlur('fatoresContribuintes.meioTrabalho')}
          style={[styles.input, {height: 60}]}
        />
      </View>
      </List.Accordion>

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

      {/* Botão de Enviar */}
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Enviar Formulário
      </Button>
    </ScrollView>

    )}
    </Formik>
  );
};

export default FormScreen;
