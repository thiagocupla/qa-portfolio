<!-- markdownlint-disable MD033 -->
# 🐛 [BUG-001] Mensagem de erro desalinhada no Login com usuário bloqueado

* **Projeto:** SauceDemo E-commerce
* **Severidade:** Média
* **Prioridade:** Média
* **Relatado por:** Thiago Cupla
* **Status:** Aberto

---

## 📝 Descrição

Ao tentar realizar login com um usuário bloqueado (`locked_out_user`), a mensagem de erro retornada pelo sistema é exibida na tela, porém apresenta inconsistência no texto esperado em relação ao requisito funcional.

---

## 🛠️ Ambientes Testados

* **SO:** Windows 11
* **Navegador:** Google Chrome (Versão mais recente)
* **Resolução:** 1920x1080 (Desktop)

---

## 🐾 Passos para Reprodução

1. Acessar a página de login do SauceDemo: `https://www.saucedemo.com/`.
2. No campo **Username**, preencher com: `locked_out_user`.
3. No campo **Password**, preencher com: `secret_sauce`.
4. Clicar no botão **Login**.

---

## 🎯 Resultado Esperado

O sistema deve barrar o acesso e exibir a mensagem de aviso padrão:
`"Epic sadface: Sorry, this user has been locked out."`

---

## 🚨 Resultado Obtido

O sistema exibe o container de erro vermelho, mas o botão de fechar (X) da mensagem fica cortado em resoluções menores e o aviso de bloqueio não é limpo ao apagar os campos.

---

## 📸 Evidências

*(Espaço reservado para colocar o print da tela no futuro)*
`./evidencias/bug-001-print.png`
