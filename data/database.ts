import Realm from 'realm';

// Define o schema para o formulário
const FormSchema = {
  name: 'Form',
  properties: {
    id: 'string',
    trabalhador: 'string',
    estabelecimento: 'string',
    acidente: 'string',
    descricao: 'string',
    data: 'date',
  },
};

// Inicializa o banco de dados
const realm = new Realm({schema: [FormSchema]});

export default realm;
