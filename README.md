# Projeto WebCarros | App em ReactNative

# 🚗 WebCarros

Um aplicativo React Native que permite aos usuários compartilhar opiniões sobre automóveis e navegar por produtos de forma simples e intuitiva.

---

## 📝 Sobre o Projeto

O WebCarros é um aplicativo desenvolvido em React Native que permite aos usuários fazer login, visualizar produtos relacionados a automóveis, e compartilhar suas avaliações. O objetivo é facilitar a troca de informações e opiniões sobre diferentes veículos.

---

## ⚙️ Funcionalidades

- **Formulário de Avaliação**: Os usuários devem inserir seu nome, e-mail e feedback textual.
- **Seleção de Experiência**: Os usuários pode escolher sua experiência com o produto entre as opções (Excelente, Boa, Razoável, Ruim).
- **Checkbox de Recomendação**: Uma opção para que o usuário indique se recomendaria o produto a outras pessoas.
- **Avaliação Geral**: Pode ser feito uma avaliação geral de 1 a 5 estrelas para definir sua experiência total.
- **Envio de Feedback**: Após completar o formulário, o usuário pode enviar as informações, que serão transmitidas por meio de uma requisição POST para o endpoint de avaliações.

---

## 🛠️ Tecnologias Utilizadas

- **React Native**: O framework principal utilizado para construir o aplicativo para dispositivos móveis.
- **Axios**: Biblioteca que facilita a realização de requisições HTTP, utilizada para enviar os dados de feedback.
- **React Navigation**: Utilizado para organizar as rotas e transmitir parâmetros entre as diferentes telas do aplicativo.
- **Node.js (Back-end)**: Gerenciar a rota `/evaluations`, que recebe os feedbacks através da API.


---

## 📸 Imagens do Projeto

![Tela de Login](./assets/tela-login.png)

![Tela de Veículos](./assets/tela-veiculos.png)

![Tela de Veículos](./assets/tela-veiculos2.png)

![Tela de Avaliação](./assets/tela-avaliacao.png)

## 👷‍♂️ Como Usar

- Clonar repositorio
- npm install
- json-server --watch database.json --port 3000
