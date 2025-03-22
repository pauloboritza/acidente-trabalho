import React from 'react';
import { ScrollView, Alert } from 'react-native';
import { Button, Divider, Text} from 'react-native-paper';
import { Formik } from 'formik';
import { router } from 'expo-router';
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

const Form = () => {

  const { create } = useAcidentesDatabase();

  const salvarFormulario = async (data: any)=>{
    try {
      const res = await create(data)
      Alert.alert('Sucesso', 'Formulário salvo com sucesso!');
      router.back()      
    } catch (error) {
      console.log(error)
    }
   
  };
 

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Formik
      initialValues={{
        dataInspecao: undefined,numeroSinan:'',motivoInspecao:'', 
        trabalhador:{nome:'',nomeMae:'',cpf:'',sexo:'',idade:'',raca:'',dataNascimento:'',telefone:'',escolaridade:'',ocupacao:'',dataAdmissao:'',jornadaTrabalho:'',regimeContrato:'',endereco:'',cep:'',bairro:'',numero:'',municipioResidencia:''},
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
        informacoesPrestadasPor: {trabalhador: '',preposto: '',representanteSindical: '',testemunha: '',familiar: '',outros:{chk:'', desc:''}},
        procedimentosAdotados: {intimacao: '',infracao: '',interdicao: '',outros:{chk:'', desc:''}},
        conclusoesRecomendacoes: '',
        conclusoesRecomendacoesData:'',
        conclusoesRecomendacoesLocal:'',
        equipeTecnica:{ A:'', B:'', deAcordoCom:'' }
      }}
      onSubmit={values => salvarFormulario(values)}
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
      <AnaliseBarreiras 
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />      

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
        Enviar Formulário
      </Button>
    </ScrollView>

    )}
    </Formik>
    </SafeAreaView>
  );
};

export default Form;
