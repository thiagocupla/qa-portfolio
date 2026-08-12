# 🧪 Módulo 01 — Testes Manuais

Bem-vindo à documentação do módulo de **Testes Manuais**. Este espaço é dedicado ao planejamento, estruturação, execução e reporte de defeitos de aplicações web/mobile, aplicando boas práticas de Engenharia de Software e Qualidade.

---

## 🎯 Sistema Testado (SUT - System Under Test)

* **Aplicação:** [SauceDemo E-commerce](https://www.saucedemo.com/)
* **Objetivo:** Garantir a qualidade das funcionalidades críticas (autenticação, navegação, carrinho de compras e checkout), mitigando riscos antes do envio para produção.

---

## 📂 Artefatos de Teste

Clique nos links abaixo para navegar diretamente pelos artefatos produzidos neste projeto:

* 📋 **[Plano de Testes](./plano-de-testes/plano-de-testes-saucedemo.md):** Estratégia macro, escopo (in/out), ambiente e critérios de aceite do SauceDemo.
* 📑 **[Casos de Teste de Login](./casos-de-teste/ct-login-saucedemo.md):** Cenários detalhados de autenticação com pré-condições, passos e resultados.
* 🐛 **[Bug Reports](./bug-reports/):** Relatório detalhado de falhas encontradas.
* ✅ **[Checklists de Regressão](./checklists/):** Validações rápidas para garantir estabilidade pós-correções.
* 📸 **[Evidências](./evidencias/):** Screenshots e gravações comprovando a execução dos testes.

---

## 🧠 Estratégia e Metodologias Aplicadas

### 1. Tipos de Teste Executados

* **Testes Funcionais:** Validação rigorosa das regras de negócio da aplicação.
* **Smoke Tests:** Testes de fumaça para garantir que a build principal está estável.
* **Testes de Regressão:** Validação de funcionalidades existentes após ajustes ou correções de bugs.
* **Testes Exploratórios:** Mapeamento de exceções e cenários de borda sem roteiro pré-definido.

### 2. Gestão de Defeitos

* Análise de defeitos orientada pela matriz de **Severidade** *(impacto técnico)* vs. **Prioridade** *(impacto no negócio)*.
* Acompanhamento completo do **Ciclo de Vida do Bug** (*Novo ➔ Em Correção ➔ Re-teste ➔ Fechado*).

---

## 🛠️ Ferramentas Utilizadas

* **VS Code / Markdown:** Documentação dos casos e planos de teste.
* **Chrome DevTools:** Inspeção de elementos, visualização do console de erros e simulação de resoluções de tela.
* **Lightshot / Snipping Tool:** Captura e marcação visual de evidências.
