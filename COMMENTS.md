# Comentários

Documento que descreve o processo de desenvolvimento e decisões no projeto.

## Principais decisões tomadas para a estrutura base

### Boards e Issues

O progresso do desenvolvimento da aplicação pode ser visto no [board principal](https://github.com/gabrielgodoy/gabriel-eletro/projects/1) do repositório

Através de issues e labels é possível mapear o que deve ser desenvolvido e quando. Esse método de trabalhar simula uma situação real de desenvolvimento e norteia melhor a equipe sobre o que deve ser feito e priorizado.

### Next.js

A implementação de server-side rendering sem nenhum framework para auxiliar pode ser trabalhosa e suscetível a erros. 

Next.js é um framework em constante desenvolvimento da comunidade que apresenta as principais vantagens:

- Traz a feature de SSR e muitas outras coisas built-in facilitando a implementação e agilizando o desenvolvimento.

- Implementa a feature de code splitting de forma automática, que previne o carregamento desnecessário de código. Ou seja, só entrega o código que é necessário para cada rota acessada.

- Hot reloading para que cada mudança feita no código seja refletida no browser. O que torna o desenvolvimento muito mais fácil.

- Estratégia de deployment já configurada.

- CSS com escopo que evita colisão de classes com o framework [styled-jsx](https://github.com/zeit/styled-jsx)

### Tooling

Linters garantem qualidade e padronização do código entre diferentes pessoas da equipe. 

O uso de ferramentas como o TSLint fazem com que se foque no que realmente importa nos code reviews, que é a lógica, porque os linters já cuidam para que boa parte da formatação do código esteja de acordo com as regras que foram definidas.

### Testes

Testes garantem que a aplicação funcione de maneira adequada e que bugs resolvidos no passado não retornem a aplicação pegando as pessoas da equipe de surpresa.

Testes também garantem o comportamento correto da aplicação em diferentes cenários.

- Teste unitários testam cada função separadamente
- Teste End2End simulam a interação do usuário na página, e alerta caso algum problema ocorra, dessa forma esse erro não chega ao usuário final porque esses testes se encarregaram de sinalizar o problema antes.

### Server side rendering (SSR)

Um dos objetivos de se implementar o SSR na aplicação é a garantia de uma entrega mais rápida da página inicial ao usuário, já que esta, é inicialmente montada no lado do servidor.

### Tachyons com framework de CSS

Apesar de já ter ouvido falar nunca tinha trabalhado. 

Tachyons tem como principais vantagens:

- Minimalista. Com pouco código se atinge páginas responsivas

- Modular, permitindo compor pequenos módulos para se atingir um resultado
