# 🚀 Automação de Testes de API - ServeRest

Este projeto faz parte do meu portfólio de Quality Assurance (QA) e tem como objetivo demonstrar a automação de testes de backend/API utilizando o **Postman**. A API alvo dos testes é a [ServeRest](https://serverest.dev/), um ambiente simulado criado especificamente para estudos e práticas de testes.

## 🎯 Objetivo do Projeto

Garantir a qualidade e a segurança dos endpoints de Autenticação, Usuários e Produtos, validando regras de negócio, códigos de status HTTP e aplicando testes de cenários positivos e negativos.

## 🛠️ Tecnologias e Práticas Utilizadas

* **Postman:** Criação e execução das requisições.
* **JavaScript:** Utilizado nas abas de `Pre-request Scripts` e `Tests` (Post-response) para automação.
* **Variáveis de Ambiente:** Parametrização da URL base (`{{baseURL}}`) e IDs dinâmicos.
* **Autenticação Dinâmica:** Script customizado para extração do Token no login (removendo o prefixo "Bearer " via Regex/Replace) e injeção automática nas requisições seguintes.
* **Testes de Contrato e Status:** Validação rigorosa de respostas (200 OK, 201 Created, 401 Unauthorized, etc).

## 📂 Estrutura da Collection

A suíte de testes foi estruturada logicamente para simular o fluxo real de um usuário:

1. **`01 - Autenticação`**
   * Login com sucesso (Gera e armazena o token dinamicamente).
   * Login com senha inválida (Validação de erro 401).
2. **`02 - Usuários`**
   * CRUD completo de usuários (Cadastrar, Listar, Buscar por ID, Excluir).
3. **`03 - Produtos`**
   * Cadastro de produto utilizando o Bearer Token.
   * **Cenário Negativo:** Tentativa de cadastro sem token (Validando bloqueio de segurança - 401 Unauthorized).
   * Listagem de produtos.

## 🚀 Como executar este projeto na sua máquina

1. Clone o repositório principal:

   ```bash
   git clone https://github.com/thiagocupla/qa-portfolio.git
