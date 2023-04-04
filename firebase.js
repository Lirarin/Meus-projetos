
var admin = require("firebase-admin");
var serviceAccount = require("./emilyteste-48d45-firebase-adminsdk-beqs1-b4bb948567.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


// Configurando o Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAjxgYLuiOV5OsNbBhwSh8OYYlZ7Nhoznc",
  authDomain: "emilyteste-48d45.firebaseapp.com",
  projectId: "emilyteste-48d45",
  storageBucket: "emilyteste-48d45.appspot.com",
  messagingSenderId: "524687159099",
  appId: "1:524687159099:web:0f8874d185d8281807511e",
  measurementId: "G-XDER2MH4XL"
};

const express = require('express');
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

const app = express();

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Configuração do Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota de cadastro de usuário
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    res.status(200).send('Usuário cadastrado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao cadastrar usuário');
  }
});

// Inicialização do servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});




