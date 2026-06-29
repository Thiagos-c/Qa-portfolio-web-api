# Test Cases - Login System

## TC001 - Login válido
Passos:
1. Acessar página de login
2. Inserir usuário válido
3. Inserir senha válida
4. Clicar em Login

Resultado esperado:
Usuário deve ser redirecionado para dashboard

---

## TC002 - Login inválido
Passos:
1. Inserir usuário inválido
2. Inserir senha inválida
3. Clicar em Login

Resultado esperado:
Mensagem de erro "Credenciais inválidas"

---

## TC003 - Campo vazio
Passos:
1. Deixar usuário vazio
2. Deixar senha vazia
3. Clicar em Login

Resultado esperado:
Validação obrigatória dos campos
