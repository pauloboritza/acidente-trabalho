# Projeto destinado a atividade de Extensão da disciplina 📱Programação Para Dispositivos Móveis Em Android📱 do Curso de Ciências da Computação - [<img src="https://cdn.portal.estacio.br/logotipo_marca_estacio_branco_f411d5753c_1_13160695d2.svg">](https://estacio.br/cursos/graduacao/ciencias-da-computacao)

## Objetivo do Projeto
Trata-se de uma atividade prática do curso, onde vou resolver o problema de um setor de uma agência de fiscalização municipal relacionada a Segurança do Trabalho. Onde todo o processo de investigação de acidentes de trabalho é feito utilizando um longo formulário impresso preenchida a mão, o objetivo é informatizar o preenchimento do formulário através de uma App possibilitando que o operador export o formulário preenchido para PDF onde poderá enviar para outros sistemas, assinar o documento digitalmente e etc.

Projeto criado utilizando o [Expo](https://expo.dev) crie o seu em [`create-expo-app`](https://www.npmjs.com/package/create-expo-app)


## Como testar o projeto
1. Clonar o repositório 
```bash
git clone https://github.com/pauloboritza/acidente-trabalho-open.git
```
2. Instalar as dependências
```bash
npm install
```

3. Iniciar o App
```bash
npx expo start
```

4. Customize o logotipo do PDF editando a linha 133 do arquivo `.html` em `/assets/roteiro.html`

### Projeto sob a licença GNU GPL v3
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)    

## Saiba mais sobre o Expo em:
Para saber mais sobre como desenvolver seu projeto com o Expo, veja os seguintes recursos
- [Documentação do Expo](https://docs.expo.dev/): Aprenda os fundamentos ou aprofunde-se em tópicos avançados com nossos [guias](https://docs.expo.dev/guides).
- [Aprenda o tutorial do Expo](https://docs.expo.dev/tutorial/introduction/): Siga um tutorial passo a passo onde você criará um projeto que roda no Android, iOS e na web.

- Entre para a comunidade

- [Expo no GitHub](https://github.com/expo/expo): Veja nossa plataforma de código aberto e contribua.
- [Discord community](https://chat.expo.dev): Converse com usuários do Expo e faça perguntas.

## Extras
### Build 
- Build Local
```sh
npx expo prebuild
```
```sh
cd android && ./gradlew assembleRelease
```
- install eas
```bash
npm install -g eas-cli
```
- Login
```sh
eas login
```
- Rodar o build
```sh 
eas build -p android --profile preview --local
```
