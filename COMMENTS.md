# Principais decisões tomadas para a estrutura base

## Boards, Milestones e Issues

- O progresso do desenvolvimento pode ser visto no [board principal](https://github.com/gabrielgodoy/gabriel-eletro/projects/1) do repositório

- As tarefas definidas para a entrega do desafio foram agrupadas no [Milestone de entrega](https://github.com/gabrielgodoy/gabriel-eletro/milestone/1)

- Todo o desenvolvimento e necessidades que surgiram foram mapeadas por [issues](https://github.com/gabrielgodoy/gabriel-eletro/issues) no repositório

<br/>

## Travis para Continuos Integration (CI) e Continuous Deployment (CD)

O Travis foi configurado para rodar todos os testes (unitários e e2e) assim que um PR é criado para a branch master.

Assim que o código é integrado na branch master sem erros, o próprio Travis se encarrega de fazer o deploy para o [Heroku](https://gabriel-eletro.herokuapp.com/).

<br/>

## Next.js para Server Side Rendering (SSR)

A implementação de server-side rendering sem nenhum framework para auxiliar pode ser trabalhosa e suscetível a erros. 

Next.js é um framework em constante desenvolvimento da comunidade que apresenta as principais vantagens:

- Traz a feature de SSR e muitas outras coisas built-in facilitando a implementação e agilizando o desenvolvimento.

- Implementa a feature de code splitting de forma automática, que previne o carregamento desnecessário de código. Ou seja, só entrega o código que é necessário para cada rota acessada.

- Hot reloading para que cada mudança feita no código seja refletida no browser. O que torna o desenvolvimento muito mais fácil.

- Estratégia de deployment já configurada.

- CSS com escopo que evita colisão de classes com o framework [styled-jsx](https://github.com/zeit/styled-jsx)

### Porque Server side rendering (SSR)?

Um dos objetivos de se implementar o SSR na aplicação é a garantia de uma entrega mais rápida da página inicial ao usuário, já que esta, é inicialmente montada no lado do servidor com a ajuda do Next.js para configuração.

<br/>

## Testes

Testes garantem que a aplicação funcione de maneira adequada e que bugs resolvidos no passado não retornem a aplicação pegando as pessoas da equipe de surpresa.

Testes também garantem o comportamento correto da aplicação em diferentes cenários.

- [Jest](https://github.com/facebook/jest) junto com a biblioteca [Enzyme](https://github.com/airbnb/enzyme) para testes unitários, que testam cada função/componente separadamente

- [Cypress](https://www.cypress.io/) para testes End2End que simulam a interação do usuário na página, e alerta caso algum problema ocorra, dessa forma esse erro não chega ao usuário final porque esses testes se encarregaram de sinalizar o problema antes para o desenvolvedor. Testar de ponta a ponta é garantir que a integração entre todo o sistema está ocorrendo de forma correta.

<br/>

## Typescript

Com o Typescript é possível criar uma tipagem melhor para o código, diminuindo assim a ocorrência de bugs sem resposta e dando mais segurança a aplicação como um todo.

<br/>

## Ferramentas adicionais

Linters garantem qualidade e padronização do código entre diferentes pessoas da equipe. 

O uso de ferramentas como o TSLint fazem com que se foque no que realmente importa nos code reviews, que é a lógica, porque os linters já cuidam para que boa parte da formatação do código esteja de acordo com as regras que foram definidas.

<br/>

## Tachyons com framework de CSS

Apesar de já ter ouvido falar nunca tinha trabalhado. 

Tachyons tem como principais vantagens:

- Minimalista. Com pouco código se atinge páginas responsivas

- Modular, permitindo compor pequenos módulos para se atingir um resultado
