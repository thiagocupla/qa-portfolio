# 📋 Plano de Testes — E-commerce SauceDemo

## 1. Introdução e Objetivo

Este documento define a estratégia de testes manuais para a aplicação web **SauceDemo**, visando garantir a estabilidade das funcionalidades críticas de autenticação, navegação de produtos, gerenciamento de carrinho e fluxo de checkout.

---

## 2. Escopo dos Testes

### 🟢 O que SERÁ testado (In-Scope)

* **Autenticação:** Login com credenciais válidas, inválidas e usuários bloqueados.
* **Catálogo de Produtos:** Visualização de itens, ordenação/filtros e navegação de detalhes.
* **Carrinho de Compras:** Adição, remoção e persistência de itens no carrinho.
* **Checkout:** Preenchimento de dados do comprador e finalização da compra.

### 🔴 O que NÃO será testado (Out-of-Scope)

* Testes de performance e carga sob estresse.
* Testes de segurança avançados (SQL Injection, XSS).
* Integração com gateways de pagamento reais (ambiente é 100% simulado).

---

## 3. Tipos de Teste Aplicados

* **Testes Funcionais (Manual):** Validação de regras de negócio e fluxos de usuário.
* **Smoke Test (Teste de Fumaça):** Validação rápida do fluxo principal (Login ➔ Add ao Carrinho ➔ Checkout).
* **Testes de Usabilidade:** Avaliação da clareza visual e facilidade de navegação.

---

## 4. Ambiente de Testes

* **Aplicação:** SauceDemo Web
* **Navegadores:** Google Chrome / Microsoft Edge
* **Dispositivo:** Desktop (Resolução 1920x1080)

---

## 5. Criterios de Aceite e Definição de Pronto (DoD)

* Todos os cenários críticos (Smoke Tests) devem passar com 100% de sucesso.
* Nenhum bug de severidade **Alta** ou **Bloqueante** deve permanecer aberto para aprovação do fluxo.
