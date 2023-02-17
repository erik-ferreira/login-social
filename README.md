## Protocolo OAuth2

1. Registrar a aplicação | IDP - Identity Provider
2. Usuário solicita autenticação
3. Validação da autenticação - se o usuário existe, se a senha estiver correta e etc
4. Servidor devolve um token de autenticação.
   PKCE - Proof of key code exchange (Prova de troca de código de chave)
   Garante que apenas o aplicativo que acionou o fluxo de autorização inicial seja capaz de trocar com êxito o código de verificação por um JWT.

5. Redireciona para o app - Redirect deep linking
6. Recebo o token
