<!-- markdownlint-disable MD033 -->
# 📑 Casos de Teste — Módulo de Autenticação (Login)

* **Aplicação:** SauceDemo
* **Módulo:** Login / Autenticação
* **Elaborado por:** Thiago Cupla

---

## 📋 Matriz de Casos de Teste

| ID | Cenário / Título | Pré-condição | Passos para Reprodução | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **CT-001** | Login com credenciais válidas *(Caminho Feliz)* | Navegador aberto no site SauceDemo. | 1. Informar `standard_user` no campo Username.<br>2. Informar `secret_sauce` no campo Password.<br>3. Clicar no botão "Login". | Redirecionar para a página `/inventory.html` exibindo a lista de produtos. | 🟩 Passou |
| **CT-002** | Login com senha incorreta | Navegador aberto no site SauceDemo. | 1. Informar `standard_user` no campo Username.<br>2. Informar `senha_errada` no campo Password.<br>3. Clicar no botão "Login". | Permanecer na tela e exibir a mensagem: *"Epic sadface: Username and password do not match any user in this service"*. | 🟩 Passou |
| **CT-003** | Login com usuário bloqueado | Navegador aberto no site SauceDemo. | 1. Informar `locked_out_user` no campo Username.<br>2. Informar `secret_sauce` no campo Password.<br>3. Clicar no botão "Login". | Exibir mensagem de bloqueio: *"Epic sadface: Sorry, this user has been locked out."*. | 🟩 Passou |
| **CT-004** | Tentativa de login com campos vazios | Navegador aberto no site SauceDemo. | 1. Deixar Username e Password em branco.<br>2. Clicar no botão "Login". | Exibir mensagem de validação: *"Epic sadface: Username is required"*. | 🟩 Passou |
