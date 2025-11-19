## Target App: Gerenciador de Metas Financeiras

### 💻 Demonstração

Veja o aplicativo em ação:

![Demonstração do App](assets/gif-mobile.gif)

### Sobre o Projeto

O Target App é um aplicativo móvel desenvolvido em React Native (utilizando Expo) projetado para ajudar os usuários a definirem e acompanharem suas metas financeiras e o progresso de suas economias. Com uma interface limpa e foco na usabilidade, ele permite o gerenciamento eficiente de valores, o registro de transações e a visualização clara do progresso rumo aos objetivos.

### Funcionalidades Principais

- Criação de Metas: Defina um nome e um valor alvo para suas metas financeiras.

- Registro de Transações: Adicione valores de economia (transactions) para acompanhar o progresso em tempo real.

- Acompanhamento Visual: Visualize o progresso de cada meta através de percentuais calculados.

- Persistência de Dados: Todos os dados são armazenados localmente no dispositivo para acesso rápido e seguro.

### Tecnologias Utilizadas

Este projeto foi construído utilizando um stack moderno e eficiente para desenvolvimento mobile.

- **⚛️ React Native** (v0.81.5): Framework para construção da interface nativa.
- **Expo** (v54.0.23): Plataforma para desenvolvimento universal, simplificando a configuração e o build.
- **TypeScript** (v5.9.2): Garante código mais robusto e menos propenso a erros.

#### Navegação e Roteamento

- **Expo Router** (v6.0.14): Roteador baseado em arquivos para navegação nativa e deep linking.

#### Banco de Dados (Persistência)

- **Expo SQLite** (v15.2.10): Armazenamento de dados local persistente no dispositivo, ideal para a gestão de metas e transações.

#### Componentes e UI

- **react-native-currency-input** (v1.1.1): Componente focado para entrada de valores monetários.
- **expo-linear-gradient** (v15.0.7): Para efeitos visuais de gradiente na interface.
- **@expo/vector-icons** (v15.0.3): Uso de ícones de alta qualidade.
- **react-native-safe-area-context**: Gerenciamento de áreas seguras em diferentes dispositivos.

#### Utilidades

- **dayjs** (v1.11.13): Biblioteca leve para manipulação e formatação de datas.
- **@expo-google-fonts/inter**: Para garantir uma tipografia moderna e consistente.

### Instalação e Execução

Para rodar este projeto em sua máquina local, siga os passos abaixo:

Pré-requisitos:

- Node.js (LTS)
- Expo CLI

### Passos

1 - Clone o repositório:

- git clone [https://github.com/marcelodiasdev/Target]
- cd target

2 - Instale as dependências:

- yarn install

3 - Execute o projeto (IOS Simulator):

- npx expo run:ios

Feito por: Marcelo Dias
[marcelodiasdev 😎]
