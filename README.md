# GoStack 10.0 || Desafio 06

* [1. Conceitos abordados](#1-conceitos-abordados)
* [2. Descrição do projeto](#2-descrição-do-projeto)
* [3. Iniciando o React Native](#3-iniciando-o-react-native)
* [4. Enunciado do Projeto](#4-enunciado-do-projeto)
* [5. Criando o projeto](#5-criando-o-projeto)

## 1. Conceitos abordados

1. Loading e uso de componente ActivityIndicator (loading do React Native).
2. Scroll infinito e uso das props:
   1. onEndReachedThreshold (Carrega mais itens quando chegar em 20% do fim).
   2. nEndReached={this.loadMore} (Funçao que carrega mais itens).
3. Refresh
4. WebView: browser inegrado de pagina externa.


## 2. Descrição do projeto

Adicionando features ao projeto base.

Projeto base: https://github.com/MaisDennis/GoStack10.0-Modulo-06

<img src="https://github.com/MaisDennis/GoStack10.0-Desafio-06/blob/master/src/assets/Repo.png" alt="Repo" width="100%" height="auto">

## 3. Iniciando o React Native:

Esse projeto foi desenvolvido para o ambiente mobile.
No desenvolvimento do projeto foi usado o emulador mobile: Genymotion.
Instruções para a instalação do Genymotion:
https://docs.rocketseat.dev/ambiente-react-native/android/emulador
Iiniciar o GenyMotion:
```
./genymotion (na pasta genymotion)
```
Dentro da pasta do projeto, Para iniciar o bundle:
```
yarn react-native start
ou
yarn react-native start --reset-cache
```
Redirecionamento de porta para o uso do debugger: Reactotron.
```
adb reverse tcp:9090 tcp:9090 ( redirecionar à porta do Reactotron)
```
Iniciar o app:
```
yarn react-native run-android
```
obs. O aplicativo foi desenvolvido para o ambiente Android.

## 4. Enunciado do projeto:

Link: https://github.com/Rocketseat/bootcamp-gostack-desafio-06/blob/master/README.md

<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 6: Primeiro projeto com React Native
</h3>

<p align="center">“Só deseje as coisas as quais você está disposto a lutar”!</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-06?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-06/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-06?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Nesse desafio você adicionará novas funcionalidades na aplicação que desenvolvemos ao longo desse módulo.

### Funcionalidades

#### 1. Loading de repositórios

Adicione um indicator de loading utilizando `<ActivityIndicator />` antes de carregar a lista de repositórios favoritados na tela de detalhes do Usuário.

#### 2. Scroll infinito

Adicione uma funcionalidade de scroll infinito na lista de repositórios favoritados. Assim que o usuário chegar nos **20%** do final de lista, busque pelos items na próxima página e adicione na lista. Seu código ficará da seguinte forma:

```js
<Stars
  onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
  onEndReached={this.loadMore} // Função que carrega mais itens
  // Restante das props
>
```

Para requisitar uma nova página no Github utilize um parâmetro `page` no fim da URL:

```
https://api.github.com/users/diego3g/starred?page=2
```

#### 3. Pull to Refresh

Adicione uma funcionalidade para quando o usuário arrastar a listagem de repositórios favoritados pra baixo atualize a lista resetando o estado, ou seja, volte o estado da paginação para a página 1 exibindo apenas os 30 primeiros itens.

A funcionalidade "Pull to Refresh" existe por padrão na FlatList e pode ser implementada através do seguinte código:

```js
<Stars
  onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
  refreshing={this.state.refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
  // Restante das props
>
```

#### 4. WebView

Crie uma nova página na aplicação que vai ser acessada quando o usuário clicar em um repositório favoritado, essa página deve conter apenas o Header da aplicação. O conteúdo da página será uma WebView, ou seja, um browser integrado que exibe o atributo `html_url` presente no objeto do repositório que vem da API do Github.

Documentação de utilização da [WebView](https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md).

Exemplo de código:

```js
<WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />
```

Resultado:

![WebView](src/assets/exemplo-web-view.png)

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode ver o resultado do [código do desafio aqui](https://github.com/Rocketseat/bootcamp-gostack-desafio-06). Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)


## 5. Criando o projeto:

1. Loading de repositórios:
   1. Adicionar loading: true, ao state.
   2. Criar a função: load e separar load de componentDidMount().
   3. User/styles.js
      1. Criar o componente Loading = styled.ActivityIndicator.
      2. color e size são atribuidos via attrs, pois a opção de cor e tamanho não está nas opções padrão do ActivityIndicator
   4. Criar uma condicional loading com o componente Loading.

2. Scroll infinito:
   1. Adicionar as props:
       ```html
       <Stars
        onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
        onEndReached={this.loadMore} // Função que carrega mais itens
        // Restante das props
       >
       ```
   2. Adicionar page: 1, ao state.
   3. Criar a função: loadMore.
   4. Adicionar params: { page } ao api.get.

3. Pull to Refresh:
   1. Adicionar refreshing: false, ao state.
   2. Adicionar a prop:
       ```html
       <Stars
        onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
        refreshing={this.state.refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
        // Restante das props
       >
       ```
   3. Criar a função refreshList
   4. Adicionar ao load: this.setState({ refreshing: false }),

4. WebView
   1. Guideline: https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md
   2. Add React Native Webview
      ```
      yarn add react-native-webview
      ```
   3. Criar Repository/index.js
      1. import WebView e criar o component com source.
   4. User/index.js
      1. Criar a função handleNavigate.
      2. adicionar a prop onPress={this.handleNavigate(item)}.
         1. item contem todos os params, inclusive html_url que será usado em Repository.index.js
         2. Lembrar que em User/styles.js, tem que transformar o Starred em RectButton (para usar o navigate).
