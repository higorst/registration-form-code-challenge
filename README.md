# Ruptiva - Code Challenge Front-end

Projeto desenvolvido como etapa do processo seletivo para vaga de desenvolvedor front-end, na empresa Ruptiva.

# Sobre

O projeto tem como objetivo a construção de uma única tela contendo um formulário que solicita um documento do usuário e seu nome, conforme uma opção escolhida entre pessoa física e jurídica.

Os campos apresentam erros de validação conforme:

- Existência de um nome;
- Validação do formato de um cpf (pessoa física);
- Validação do formato de um cnpj (pessoa jurídica);

Abaixo, segue uma demonstração do funcionamento do mesmo.
<div style="text-align:center"><img src="/assets/app.gif"  width="250" /></div>

# Executar projeto

- 1ª Opção

Executar via [snack](https://expo.io/@higorsj/projects/app-register-form) através de um smartphone.

- 2ª Opção

Se faz necessário clonar o [repositório](https://github.com/higorst/registration-form-code-challenge). Após acessar a pasta raiz do projeto e executar os seguintes comandos, na respectiva ordem.

**Instalar os pacotes necessários** 
```
yarn install
```

**Executar o projeto** 
```
yarn start
```

Dessa maneira é possível executar a aplicação em um smartphone ou emulador.

# Processo de desenvolvimento

O desenvolvimento do projeto tomou como base os requisitos funcionais e técnicos. Com essa abordagem, seguiu-se as etapas:

- Construção base da aplicação, utilizando Typescript e React Native;
- Desenvolvimento de componentes stateless, para composição dos elementos da tela. Dentre eles:
  - Formulário, para preenchimento das informações do usuário;
  - Lista, para listagem usuários cadastrados;
  - Input, para entrada de dados;
  - Botão, para interação de confirmação de envio dos dados;
  - Card, para exibição das informações de um usuário;
  - Header, para divisão de seções do ambiente da tela;


- A utilização de hooks, para o controle de estado e comportamento da aplicação a partir das interações com o usuário;
- Redux-Saga e Reduxsauce foram utilizados para processos de busca, envio e tratamento de dados após a integração com a tela e componentes;
- Os testes de snapshot foram desenvolvidos ao final do desenvolvimento, do qual promoveu ajustes de componentes e versões de bibliotecas, utilizando o Jest;

**Dificuldades e Problemas Encontrados** 

As dificuldades e problemas existentes se resumem em dois aspectos, utilização de tecnologias/ferramentas até então não utilizadas, como:

- Firebase, para armazenamento dos dados;
- Reduxsauce e ducks, para a criação de actions e reducers;
- Jest, para os testes de snapshot;
- Styled Components, para estilos e criação de componentes;

Durante a fase de testes, a versão de firebase se tornou um problema, pois a versão que vinha sendo utilizada provocava problema no jest e com sua troca de versão, o erro surgiu no funcionamento da aplicação. Sendo necessários assim, uma versão estável o suficiente para ambas situações.

Em outra circunstância, os testes evidenciaram inconsistências com pacotes da biblioteca 'react-native-popup-dialog', sendo necessária uma nova  abordagem para o momento de confirmação de exclusão de um usuário. 

Esses fatos foram de extrema importância para exemplificar a necessidade de realização testes e adequação das  tecnologias para um bom funcionamento e renderização dos componentes.