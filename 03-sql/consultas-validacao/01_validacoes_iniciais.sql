-- ============================================================
-- SUÍTE DE CONSULTAS DE VALIDAÇÃO (QA TEST SUITE)
-- Banco de Dados: qa_ecommerce
-- ============================================================

USE qa_ecommerce;

-- CENÁRIO 01: Validar se existem usuários bloqueados que não deveriam conseguir fazer login
-- Objetivo: Identificar massa de dados para testes de login negativo.
SELECT id_usuario, nome, email, status 
FROM usuarios 
WHERE status = 'BLOQUEADO';

-- CENÁRIO 02: Validar produtos sem estoque para testes de checkout
-- Objetivo: Garantir que produtos com estoque 0 não permitam conclusão de compra.
SELECT id_produto, nome_produto, qtd_estoque, preco 
FROM produtos 
WHERE qtd_estoque = 0;

-- CENÁRIO 03: Relatório de pedidos por cliente (Cruzamento de Tabelas / JOIN)
-- Objetivo: Validar se o valor e o status do pedido correspondem ao cliente correto.
SELECT 
    p.id_pedido,
    u.nome AS cliente,
    u.email,
    p.valor_total,
    p.status_pedido,
    p.data_pedido
FROM pedidos p
INNER JOIN usuarios u ON p.id_usuario = u.id_usuario
ORDER BY p.data_pedido DESC;

-- CENÁRIO 04: Contagem de pedidos por status (Métricas de QA)
-- Objetivo: Validar integridade dos status gravados no sistema.
SELECT status_pedido, COUNT(*) AS total_pedidos
FROM pedidos
GROUP BY status_pedido;

-- CENÁRIO 05: Rastreabilidade completa de pedidos (Super JOIN)
-- Objetivo: Validar se os itens do pedido correspondem ao valor total cobrado do cliente.
SELECT 
    u.nome AS cliente,
    ped.id_pedido,
    prod.nome_produto,
    ip.quantidade,
    ip.preco_unitario,
    ped.valor_total,
    ped.status_pedido
FROM pedidos ped
INNER JOIN usuarios u ON ped.id_usuario = u.id_usuario
INNER JOIN itens_pedido ip ON ped.id_pedido = ip.id_pedido
INNER JOIN produtos prod ON ip.id_produto = prod.id_produto;