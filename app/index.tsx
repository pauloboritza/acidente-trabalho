import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button, Text, Divider, List, Checkbox, RadioButton } from 'react-native-paper';
import { DatePickerInput, TimePicker } from 'react-native-paper-dates';
//import realm from '../database';
import { Alert } from 'react-native';
import { Formik } from 'formik';

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
          mecanica: { presentes: '', ausentes: '', semFalha: '', comFalha: '', observacao: '' },
          cinetica: { presentes: '', ausentes: '', semFalha: '', comFalha: '', observacao: '' },
          temperaturasExtremas: { presentes: '', ausentes: '', semFalha: '', comFalha: '', observacao: '' },
          eletrica: { presentes: '', ausentes: '', semFalha: '', comFalha: '', observacao: '' },
          quimica: { presentes: '', ausentes: '', semFalha: '', comFalha: '', observacao: '' },
          biologia: { presentes: '', ausentes: '', semFalha: '', comFalha: '', observacao: '' },
          energiaArmazenada: { presentes: '', ausentes: '', semFalha: '', comFalha: '', observacao: '' },
          radiacoes: { presentes: '', ausentes: '', semFalha: '', comFalha: '', observacao: '' },
          acustica: { presentes: '', ausentes: '', semFalha: '', comFalha: '', observacao: '' },
          outras: { descricao: '', presentes: '', ausentes: '', semFalha: '', comFalha: '', observacao: '' },
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
      <List.Accordion title="Dados do Estabelecimento" left={(props) => <List.Icon {...props} icon="account" />}>
        <View style={[styles.section,{flexDirection:"column", gap: 5, justifyContent: 'space-between', width: '100%', flexGrow: 1}]}>
          <View></View>
          <List.Accordion title="Pessoa Fisica" left={(props) => <List.Icon {...props} icon="account" />}>
            <View style={styles.section}>
              <TextInput
                label="CPF (Pessoa Física)"
                value={values.estabelecimento.pf.cpf}
                onChangeText={handleChange('estabelecimento.pf.cpf')}
                onBlur={handleBlur('estabelecimento.pf.cpf')}
                style={styles.input}
              />
              <TextInput
                label="Nome"
                value={values.estabelecimento.pf.nome}
                onChangeText={handleChange('estabelecimento.pf.nome')}
                onBlur={handleBlur('estabelecimento.pf.nome')}
                style={styles.input}
              />
              <TextInput
                label="CEP"
                value={values.estabelecimento.pf.cep}
                onChangeText={handleChange('estabelecimento.pf.cep')}
                onBlur={handleBlur('estabelecimento.pf.cep')}
                style={styles.input}
              />
              <TextInput
                label="Município"
                value={values.estabelecimento.pf.municipio}
                onChangeText={handleChange('estabelecimento.pf.municipio')}
                onBlur={handleBlur('estabelecimento.pf.municipio')}
                style={styles.input}
              />
              <TextInput
                label="Endereço"
                value={values.estabelecimento.pf.endereco}
                onChangeText={handleChange('estabelecimento.pf.endereco')}
                onBlur={handleBlur('estabelecimento.pf.endereco')}
                style={styles.input}
              />
              <TextInput
                label="Telefone"
                value={values.estabelecimento.pf.telefone}
                onChangeText={handleChange('estabelecimento.pf.telefone')}
                onBlur={handleBlur('estabelecimento.pf.telefone')}
                style={styles.input}
              />
              <TextInput
                label="E-mail"
                value={values.estabelecimento.pf.email}
                onChangeText={handleChange('estabelecimento.pf.email')}
                onBlur={handleBlur('estabelecimento.pf.email')}
                style={styles.input}
              />
            </View>
          </List.Accordion>
          <View></View>
          <List.Accordion title="Pessoa Juridica" left={(props) => <List.Icon {...props} icon="account" />}>
            <View style={styles.section}>
              <TextInput
                label="CNPJ (Pessoa Jurídica)"
                value={values.estabelecimento.pj.cnpj}
                onChangeText={handleChange('estabelecimento.pj.cnpj')}
                onBlur={handleBlur('estabelecimento.pj.cnpj')}
                style={styles.input}
              />
              <TextInput
                label="Nome"
                value={values.estabelecimento.pj.nome}
                onChangeText={handleChange('estabelecimento.pj.nome')}
                onBlur={handleBlur('estabelecimento.pj.nome')}
                style={styles.input}
              />
              <TextInput
                label="CEP"
                value={values.estabelecimento.pj.cep}
                onChangeText={handleChange('estabelecimento.pj.cep')}
                onBlur={handleBlur('estabelecimento.pj.cep')}
                style={styles.input}
              />
              <TextInput
                label="Município"
                value={values.estabelecimento.pj.municipio}
                onChangeText={handleChange('estabelecimento.pj.municipio')}
                onBlur={handleBlur('estabelecimento.pj.municipio')}
                style={styles.input}
              />
              <TextInput
                label="Endereço"
                value={values.estabelecimento.pj.endereco}
                onChangeText={handleChange('estabelecimento.pj.endereco')}
                onBlur={handleBlur('estabelecimento.pj.endereco')}
                style={styles.input}
              />
              <TextInput
                label="Telefone"
                value={values.estabelecimento.pj.telefone}
                onChangeText={handleChange('estabelecimento.pj.telefone')}
                onBlur={handleBlur('estabelecimento.pj.telefone')}
                style={styles.input}
              />
              <TextInput
                label="E-mail"
                value={values.estabelecimento.pj.email}
                onChangeText={handleChange('estabelecimento.pj.email')}
                onBlur={handleBlur('estabelecimento.pj.email')}
                style={styles.input}
              />
            </View>
          </List.Accordion>
              <TextInput
              label="Número Total de Trabalhadores"
              value={values.estabelecimento.nTotalTrabalhadores}
              onChangeText={handleChange('estabelecimento.nTotalTrabalhadores')}
              onBlur={handleBlur('estabelecimento.nTotalTrabalhadores')}
              style={styles.input}
            />
            <TextInput
              label="Número de Homens"
              value={values.estabelecimento.nHomens}
              onChangeText={handleChange('estabelecimento.nHomens')}
              onBlur={handleBlur('estabelecimento.nHomens')}
              style={styles.input}
            />
            <TextInput
              label="Número de Mulheres"
              value={values.estabelecimento.nMulheres}
              onChangeText={handleChange('estabelecimento.nMulheres')}
              onBlur={handleBlur('estabelecimento.nMulheres')}
              style={styles.input}
            />
            <TextInput
              label="Ramo de Atividade"
              value={values.estabelecimento.ramoAtividade}
              onChangeText={handleChange('estabelecimento.ramoAtividade')}
              onBlur={handleBlur('estabelecimento.ramoAtividade')}
              style={styles.input}
            />
            <TextInput
              label="CNAE"
              value={values.estabelecimento.cnae}
              onChangeText={handleChange('estabelecimento.cnae')}
              onBlur={handleBlur('estabelecimento.cnae')}
              style={styles.input}
            />
            <View>
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Grau de Risco:</Text>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <RadioButton.Group
                  onValueChange={handleChange('estabelecimento.grauRisco')}
                  value={values.estabelecimento.grauRisco}
                >
                  <View style={{flexDirection: 'row'}}>
                    <RadioButton.Item label="1" value="1" style={{marginRight: 5}}/>
                    <RadioButton.Item label="2" value="2" style={{marginRight: 5}}/>
                    <RadioButton.Item label="3" value="3" style={{marginRight: 5}}/>
                    <RadioButton.Item label="4" value="4" style={{marginRight: 5}}/>
                  </View>
                </RadioButton.Group>
            </View>

            </View>
           
            <View>
              <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
              <RadioButton.Group
                onValueChange={handleChange('estabelecimento.eTercerizado')}
                value={values.estabelecimento.eTercerizado}
              >
                <View style={{flexDirection: 'row'}}>
                <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848',marginRight: -20}]}>É Terceirizado?</Text>
                  <RadioButton.Item label="SIM" value="S" style={{marginRight: -20}}/>
                  <RadioButton.Item label="NÃO" value="N" style={{marginRight: -20}}/>
                </View>
              </RadioButton.Group>
            </View>
          </View>
          {values.estabelecimento.eTercerizado == 'S'?
            
            <View>
              <TextInput
                label="CNPJ (Terceirizado)"
                value={values.estabelecimento.terceirizado.cnpj}
                onChangeText={handleChange('estabelecimento.terceirizado.cnpj')}
                onBlur={handleBlur('estabelecimento.terceirizado.cnpj')}
                style={styles.input}
              />
              <TextInput
                label="Nome (Terceirizado)"
                value={values.estabelecimento.terceirizado.nome}
                onChangeText={handleChange('estabelecimento.terceirizado.nome')}
                onBlur={handleBlur('estabelecimento.terceirizado.nome')}
                style={styles.input}
              />
              <TextInput
                label="CEP (Terceirizado)"
                value={values.estabelecimento.terceirizado.cep}
                onChangeText={handleChange('estabelecimento.terceirizado.cep')}
                onBlur={handleBlur('estabelecimento.terceirizado.cep')}
                style={styles.input}
              />
              <TextInput
                label="Município (Terceirizado)"
                value={values.estabelecimento.terceirizado.municipio}
                onChangeText={handleChange('estabelecimento.terceirizado.municipio')}
                onBlur={handleBlur('estabelecimento.terceirizado.municipio')}
                style={styles.input}
              />
              <TextInput
                label="Endereço (Terceirizado)"
                value={values.estabelecimento.terceirizado.endereco}
                onChangeText={handleChange('estabelecimento.terceirizado.endereco')}
                onBlur={handleBlur('estabelecimento.terceirizado.endereco')}
                style={styles.input}
              />
              <TextInput
                label="Telefone (Terceirizado)"
                value={values.estabelecimento.terceirizado.telefone}
                onChangeText={handleChange('estabelecimento.terceirizado.telefone')}
                onBlur={handleBlur('estabelecimento.terceirizado.telefone')}
                style={styles.input}
              />
              <TextInput
                label="E-mail (Terceirizado)"
                value={values.estabelecimento.terceirizado.email}
                onChangeText={handleChange('estabelecimento.terceirizado.email')}
                onBlur={handleBlur('estabelecimento.terceirizado.email')}
                style={styles.input}
              />
              <TextInput
                label="Número Total de Trabalhadores (Terceirizado)"
                value={values.estabelecimento.terceirizado.nTotalTrabalhadores}
                onChangeText={handleChange('estabelecimento.terceirizado.nTotalTrabalhadores')}
                onBlur={handleBlur('estabelecimento.terceirizado.nTotalTrabalhadores')}
                style={styles.input}
              />
              <TextInput
                label="Número de Homens (Terceirizado)"
                value={values.estabelecimento.terceirizado.nHomens}
                onChangeText={handleChange('estabelecimento.terceirizado.nHomens')}
                onBlur={handleBlur('estabelecimento.terceirizado.nHomens')}
                style={styles.input}
              />
              <TextInput
                label="Número de Mulheres (Terceirizado)"
                value={values.estabelecimento.terceirizado.nMulheres}
                onChangeText={handleChange('estabelecimento.terceirizado.nMulheres')}
                onBlur={handleBlur('estabelecimento.terceirizado.nMulheres')}
                style={styles.input}
              />
              <TextInput
                label="Ramo de Atividade (Terceirizado)"
                value={values.estabelecimento.terceirizado.ramoAtividade}
                onChangeText={handleChange('estabelecimento.terceirizado.ramoAtividade')}
                onBlur={handleBlur('estabelecimento.terceirizado.ramoAtividade')}
                style={styles.input}
              />
              <TextInput
                label="CNAE (Terceirizado)"
                value={values.estabelecimento.terceirizado.cnae}
                onChangeText={handleChange('estabelecimento.terceirizado.cnae')}
                onBlur={handleBlur('estabelecimento.terceirizado.cnae')}
                style={styles.input}
              />
              <View>
                <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Grau de Risco (Terceirizado):</Text>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <RadioButton.Group
                    onValueChange={handleChange('estabelecimento.terceirizado.grauRisco')}
                    value={values.estabelecimento.terceirizado.grauRisco}
                  >
                    <View style={{flexDirection: 'row'}}>
                      <RadioButton.Item label="1" value="1" style={{marginRight: 5}}/>
                      <RadioButton.Item label="2" value="2" style={{marginRight: 5}}/>
                      <RadioButton.Item label="3" value="3" style={{marginRight: 5}}/>
                      <RadioButton.Item label="4" value="4" style={{marginRight: 5}}/>
                    </View>
                  </RadioButton.Group>
                </View>
              </View>

            </View>
            
            : <></>}
        </View>
      </List.Accordion>

      <Divider style={styles.divider} />

      {/* Seção: Dados do Acidente */}
      <List.Accordion title="Dados do Acidente" left={(props) => <List.Icon {...props} icon="alert-circle" />}>
        <View style={styles.section}>
            
          <View style={{marginBottom: 15}}>
            <View style={{flex: 1, justifyContent: 'space-between', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.tipo')}
              value={values.acidente.tipo}
            >
              <View style={{flexDirection: 'column'}}>
                <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Tipo do Acidente</Text>
                <View style={{marginEnd: 60, marginTop: -15}}>
                  <RadioButton.Item label="Acidente típico" value="tipico" />
                  <RadioButton.Item label="Acidente de trajeto" value="trajeto" style={{marginTop: -15}}/>
                </View>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          
          <View style={{marginBottom: 15}}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.emitiuCat')}
              value={values.acidente.emitiuCat}
            >
              <View style={{flexDirection: 'row'}}>
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848',marginRight: -20}]}>Foi Emitida a CAT?</Text>
                <RadioButton.Item label="SIM" value="S" style={{marginRight: -25}}/>
                <RadioButton.Item label="NÃO" value="N" style={{marginRight: -25}}/>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          <TextInput
            label="Nome do Estabelecimento"
            value={values.acidente.nomeEstabelecimento}
            onChangeText={handleChange('acidente.nomeEstabelecimento')}
            onBlur={handleBlur('acidente.nomeEstabelecimento')}
            style={styles.input}
          />
          <TextInput
            label="Setor do estabeleciento do acidente"
            value={values.acidente.setorAcidente}
            onChangeText={handleChange('acidente.setorAcidente')}
            onBlur={handleBlur('acidente.setorAcidente')}
            style={styles.input}
          />
          <TextInput
            label="Município do Acidente"
            value={values.acidente.municipioAcidente}
            onChangeText={handleChange('acidente.municipioAcidente')}
            onBlur={handleBlur('acidente.municipioAcidente')}
            style={styles.input}
          />
          <TextInput
            label="Endereço do Acidente"
            value={values.acidente.enderecoAcidente}
            onChangeText={handleChange('acidente.enderecoAcidente')}
            onBlur={handleBlur('acidente.enderecoAcidente')}
            style={styles.input}
          />
          <DatePickerInput
            style={styles.input}
            label={'Data do Acidente'}           
            locale='pt'
            saveLabel='Data do Acidente'
            value={values.acidente.data}
            onChange={e=>handleChange('acidente.data')}
            inputMode='start'
          />
          <TextInput
            label="Hora do Acidente"
            value={values.acidente.hora}
            onChangeText={handleChange('acidente.hora')}
            onBlur={handleBlur('acidente.hora')}
            style={styles.input}
          />
          <TextInput
            label="Após quantas horas trabalhadas"
            value={values.acidente.horasTrabalhadas}
            onChangeText={handleChange('acidente.horasTrabalhadas')}
            onBlur={handleBlur('acidente.horasTrabalhadas')}
            style={styles.input}
          />
          <View style={{marginBottom: 15}}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.fazHorasExtras')}
              value={values.acidente.fazHorasExtras}
            >
              <View style={{flexDirection: 'row'}}>
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848',marginRight: -20}]}>Faz Horas Extras?</Text>
                <RadioButton.Item label="SIM" value="S" style={{marginRight: -25}}/>
                <RadioButton.Item label="NÃO" value="N" style={{marginRight: -25}}/>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          <TextInput
            label="Descreva a qtde de Horas Extras"
            value={values.acidente.qtdHorasExtras}
            onChangeText={handleChange('acidente.qtdHorasExtras')}
            onBlur={handleBlur('acidente.qtdHorasExtras')}
            style={styles.input}
          />
          <TextInput
            label="Função no Momento do Acidente"
            value={values.acidente.funcaoAcidente}
            onChangeText={handleChange('acidente.funcaoAcidente')}
            onBlur={handleBlur('acidente.funcaoAcidente')}
            style={styles.input}
          />
          <TextInput
            label="Quanto tempo na função"
            value={values.acidente.tempoFuncao}
            onChangeText={handleChange('acidente.tempoFuncao')}
            onBlur={handleBlur('acidente.tempoFuncao')}
            style={styles.input}
          />
          <View style={{marginBottom: 15}}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.teveTreinamento')}
              value={values.acidente.teveTreinamento}
            >
              <View style={{flexDirection: 'row'}}>
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848',marginRight: -20}]}>Teve Treinamento?</Text>
                <RadioButton.Item label="SIM" value="S" style={{marginRight: -25}}/>
                <RadioButton.Item label="NÃO" value="N" style={{marginRight: -25}}/>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          <View style={styles.input}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.teveTreinamentoComp')}
              value={values.acidente.teveTreinamentoComp}
            >
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Treinamento Comprovado?</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <RadioButton.Item label="SIM" value="S" style={{marginRight: -25, marginTop: -20}}/>
                <RadioButton.Item label="NÃO" value="N" style={{marginRight: -15, marginTop: -20}}/>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          <TextInput
            label="Descreva o Treinamento"
            value={values.acidente.descricaoTreinamento}
            onChangeText={handleChange('acidente.descricaoTreinamento')}
            onBlur={handleBlur('acidente.descricaoTreinamento')}
            style={styles.input}
          />
          <View style={styles.input}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.causaAcidenteManuEq')}
              value={values.acidente.causaAcidenteManuEq}
            >
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Acidente ocorreu em situação de manutenção de equipamento ou máquina</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <RadioButton.Item label="SIM" value="S" style={{marginRight: -25, marginTop: -20}}/>
                <RadioButton.Item label="NÃO" value="N" style={{marginRight: -15, marginTop: -20}}/>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          <TextInput
            label="Causa do Acidente"
            value={values.acidente.causaAcidente}
            onChangeText={handleChange('acidente.causaAcidente')}
            onBlur={handleBlur('acidente.causaAcidente')}
            style={styles.input}
          />
          <TextInput
            label="Diagnóstico da Lesão"
            value={values.acidente.diagnosticoLesao}
            onChangeText={handleChange('acidente.diagnosticoLesao')}
            onBlur={handleBlur('acidente.diagnosticoLesao')}
            style={styles.input}
          />
          <TextInput
            label="Causa básica do Óbito"
            value={values.acidente.causaObito}
            onChangeText={handleChange('acidente.causaObito')}
            onBlur={handleBlur('acidente.causaObito')}
            style={styles.input}
          />          
          <View style={styles.input}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.maisTrabalhadoresAtingidos.res')}
              value={values.acidente.maisTrabalhadoresAtingidos.res}
            >
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Mais Trabalhadores Atingidos?</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: -25}}>
                <View style={{ flexDirection: 'column'}}>
                  <RadioButton.Item label="SIM" value="S" />
                  <RadioButton.Item label="NÃO" value="N" />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginRight: 70, marginTop: 10}}>
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#494848'}}>Quantos?</Text>
                  <Text style={{fontSize: 16, fontWeight: 600}}>(</Text>
                  <View style={{height: 30}}>
                    <TextInput
                      style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: 16, width: 40, backgroundColor: '#fff'}}
                      value={values.acidente.maisTrabalhadoresAtingidos.qtd}
                      onChangeText={handleChange('acidente.maisTrabalhadoresAtingidos.qtd')}
                      onBlur={handleBlur('acidente.maisTrabalhadoresAtingidos.qtd')}
                    />
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 600}}>)</Text>
                </View>
              </View>
            </RadioButton.Group>
            </View>
          </View>
          
          <View style={styles.input}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.acidente.outrosObitos.res')}
              value={values.acidente.outrosObitos.res}
            >
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Outros óbitos?</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: -25}}>
                <View style={{ flexDirection: 'column'}}>
                  <RadioButton.Item label="SIM" value="S" />
                  <RadioButton.Item label="NÃO" value="N" />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginRight: 70, marginTop: 10}}>
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#494848'}}>Quantos?</Text>
                  <Text style={{fontSize: 16, fontWeight: 600}}>(</Text>
                  <View style={{height: 30}}>
                    <TextInput
                      style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: 16, width: 40, backgroundColor: '#fff'}}
                      value={values.acidente.outrosObitos.qtd}
                      onChangeText={handleChange('acidente.outrosObitos.qtd')}
                      onBlur={handleBlur('acidente.outrosObitos.qtd')}
                    />
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 600}}>)</Text>
                </View>
              </View>
            </RadioButton.Group>
            </View>
          </View>

          <View style={styles.input}>
            <View style={{flex: 1, justifyContent: 'flex-start', backgroundColor:'#ffff', borderTopEndRadius: 5}}>
            <RadioButton.Group
              onValueChange={handleChange('acidente.outrosAcidentes.res')}
              value={values.acidente.outrosAcidentes.res}
            >
              <Text style={[styles.input,{padding: 15, marginBottom: 0, fontSize: 16, fontWeight: '600', color: '#494848'}]}>Outros óbitos?</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: -25}}>
                <View style={{ flexDirection: 'column'}}>
                  <RadioButton.Item label="SIM" value="S" />
                  <RadioButton.Item label="NÃO" value="N" />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginRight: 70, marginTop: 10}}>
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#494848'}}>Quantos?</Text>
                  <Text style={{fontSize: 16, fontWeight: 600}}>(</Text>
                  <View style={{height: 30}}>
                    <TextInput
                      style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: 16, width: 40, backgroundColor: '#fff'}}
                      value={values.acidente.outrosAcidentes.qtd}
                      onChangeText={handleChange('acidente.outrosAcidentes.qtd')}
                      onBlur={handleBlur('acidente.outrosAcidentes.qtd')}
                    />
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 600}}>)</Text>
                </View>
              </View>
            </RadioButton.Group>
            </View>
          </View>

        </View>
      </List.Accordion>

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

      {/* Botão de Enviar */}
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Enviar Formulário
      </Button>
    </ScrollView>

    )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  divider: {
    marginVertical: 10,
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
  },
  section: {
    paddingHorizontal: 0,
    paddingLeft: 10,
    paddingEnd: 0,
  },
  button: {
    marginTop: 20,
  },
  textTitle:{
    textAlign: 'justify',
    fontWeight: '700',
    paddingLeft: 0,
    paddingEnd: 0
  },
  textInputBox:{
    height: 150,
    textAlign: 'justify',
    paddingLeft: 0,
    paddingEnd: 0,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  textLabel:{
    padding: 15,
    marginBottom: 0,
    fontSize: 16,
    fontWeight: '600',
    color: '#494848'
  }
});

export default FormScreen;
