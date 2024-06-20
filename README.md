# Projeto de Menu de Restaurante com Carrinho de Compras

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Redux**: Gerenciamento de estado da aplicação.
- **Redux Toolkit**: Ferramentas para simplificar o uso do Redux.
- **Tailwind CSS**: Framework de CSS para estilização.
- **React-Modal**: Biblioteca para criação de modais.
- **React-Icons**: Conjunto de ícones para React.
- **TypeScript**: Superset do JavaScript que adiciona tipos estáticos.

## Como Executar o Projeto

1. **Clonar o Repositório**
   ```sh
   git clone https://github.com/Mattews08/react-vite-teste.git
   cd seu-repositorio

## Instalar Dependências

2. **Certifique-se de ter o Node.js e o Yarn instalados. Em seguida, execute:**
   ```sh
   yarn install

## Executar o Projeto

3. **Certifique-se de ter o Node.js e o Yarn instalados. Em seguida, execute:**
   ```sh
   yarn start
   A aplicação estará disponível em http://localhost:3000.


## Funcionalidades Implementadas

4. Menu de Itens

  - Gerenciamento do estado dos itens do menu utilizando Redux.
  - Busca de dados de uma API externa.
  - Armazenamento dos dados no estado global.
  - Suporte para modificadores de itens (ex.: tamanhos diferentes).

5. Carrinho de Compras

  - Gerenciamento do estado do carrinho utilizando Redux.
  - Adição, remoção e ajuste da quantidade de itens no carrinho.
  - Persistência dos itens no estado global para fácil acesso.

6. Modal de Detalhes do Item

  - Exibição dos detalhes do item em um modal.
  - Inclusão de modificadores disponíveis e quantidade.
  - Adição de itens ao carrinho a partir do modal.  

## Estrutura do Projeto
  ```sh
  src/: Diretório principal do código-fonte.
    app/: Configuração do store do Redux.
    components/: Componentes reutilizáveis.
    features/: Slices do Redux para diferentes funcionalidades (menu, cart, etc).
    types/: Tipos TypeScript compartilhados.
    pages/: Páginas principais da aplicação.
    styles/: Estilos globais (opcional)


  


