// Definindo o esquema para Trabalhador
class Trabalhador {
  nome!: string;
  nomeMae!: string;
  cpf!: string;
  sexo!: string;
  idade!: string;
  raca!: string;
  dataNascimento!: Date;
  telefone!: string;
  escolaridade!: string;
  ocupacao!: string;
  dataAdmissao!: Date;
  jornadaTrabalho!: string;
  regimeContrato!: string;
  endereco!: string;
  cep!: string;
  bairro!: string;
  municipioResidencia!: string;
}

// Definindo o esquema para Estabelecimento Pessoa Física
class EstabelecimentoPf {
  cpf!: string;
  nome!: string;
  cep!: string;
  municipio!: string;
  endereco!: string;
  telefone!: string;
  email!: string;
}

// Definindo o esquema para Estabelecimento Pessoa Jurídica
class EstabelecimentoPj {
  cnpj!: string;
  nome!: string;
  cep!: string;
  municipio!: string;
  endereco!: string;
  telefone!: string;
  email!: string;
}

// Definindo o esquema para Estabelecimento
class Estabelecimento {
  pf!: EstabelecimentoPf;
  pj!: EstabelecimentoPj;
  nTotalTrabalhadores!: string;
  nHomens!: string;
  nMulheres!: string;
  ramoAtividade!: string;
  cnae!: string;
  grauRisco!: string;
  eTercerizado!: string;
  terceirizado!: EstabelecimentoPj;
}

// Definindo o esquema para o Acidente
class Acidente {
  tipo!: string;
  emitiuCat!: string;
  nomeEstabelecimento!: string;
  setorAcidente!: string;
  municipioAcidente!: string;
  enderecoAcidente!: string;
  data!: Date;
  hora!: string;
  horasTrabalhadas!: string;
  fazHorasExtras!: string;
  qtdHorasExtras!: string;
  funcaoAcidente!: string;
  tempoFuncao!: string;
  teveTreinamento!: string;
  teveTreinamentoComp!: string;
  descricaoTreinamento!: string;
  causaAcidenteManuEq!: string;
  causaAcidente!: string;
  diagnosticoLesao!: string;
  causaObito!: string;
  maisTrabalhadoresAtingidos!: { res: string; qtd: string };
  outrosObitos!: { res: string; qtd: string };
  outrosAcidentes!: { res: string; qtd: string };
}

// Definindo o esquema para Fatores Contribuintes
class FatoresContribuintes {
  individuo!: string;
  tarefa!: string;
  material!: string;
  meioTrabalho!: string;
}

// Definindo o esquema para a Análise de Barreiras
class AnaliseBarreiras {
  mecanica!: { presentes: { semFalha: string; comFalha: string }; ausentes: string; observacao: string };
  cinetica!: { presentes: { semFalha: string; comFalha: string }; ausentes: string; observacao: string };
  temperaturasExtremas!: { presentes: { semFalha: string; comFalha: string }; comFalha: string; observacao: string };
  eletrica!: { presentes: { semFalha: string; comFalha: string }; comFalha: string; observacao: string };
  quimica!: { presentes: { semFalha: string; comFalha: string }; comFalha: string; observacao: string };
  biologia!: { presentes: { semFalha: string; comFalha: string }; comFalha: string; observacao: string };
  energiaArmazenada!: { presentes: { semFalha: string; comFalha: string }; ausentes: string; observacao: string };
  radiacoes!: { presentes: { semFalha: string; comFalha: string }; ausentes: string; observacao: string };
  acustica!: { presentes: { semFalha: string; comFalha: string }; ausentes: string; observacao: string };
  outras!: { presentes: { semFalha: string; comFalha: string }; ausentes: string; observacao: string };
}

// Definindo o esquema para Gestão de Segurança
class GestaoSeguranca {
  registroAnteriorSemelhante!: string;
  registroSolictacaoSolucaoProblema!: string;
}

// Definindo o esquema para Gestão de Produção e Variedade
class GestaoProducaoVariedade {
  contribuicaoAspectosGerenciaisJornadaTrabalho!: string;
  contribuicaoAspectosGerenciaisAdequacaoDemandas!: string;
}

// Definindo o esquema para Equipe Técnica
class EquipeTecnica {
  A!: string;
  B!: string;
  deAcordoCom!: string;
}

// Definindo o esquema principal que engloba todas as informações
class Inspecao {
  dataInspecao!: Date;
  numeroSinan!: string;
  motivoInspecao!: string;
  trabalhador!: Trabalhador;
  estabelecimento!: Estabelecimento;
  acidente!: Acidente;
  descTrabalhoHabitual!: string;
  trabRealizadoDiaAcidente!: string;
  descLocalAcidente!: string;
  sequenciaEventosAcidente!: string;
  fatoresContribuintes!: FatoresContribuintes;
  analiseBarreiras!: AnaliseBarreiras;
  gestaoSeguranca!: GestaoSeguranca;
  gestaoProducaoVariedade!: GestaoProducaoVariedade;
  outrosFatoresGestaoSistemaContribuido!: string;
  informacoesPrestadasPor!: { trabalhador: string; preposto: string; representanteSindical: string; testemunha: string; familiar: string; outros: string };
  procedimentosAdotados!: { intimacao: string; infracao: string; interdicao: string; outro: string };
  conclusoesRecomendacoes!: string;
  conclusoesRecomendacoesData!: Date;
  conclusoesRecomendacoesLocal!: string;
  equipeTecnica!: EquipeTecnica;
}


