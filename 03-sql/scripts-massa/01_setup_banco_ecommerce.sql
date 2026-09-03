-- ============================================================
-- SCRIPT DE CRIAÇÃO E POVOAMENTO DO BANCO DE DADOS (QA PORTFOLIO)
-- ============================================================

-- 1. Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS qa_ecommerce;
USE qa_ecommerce;

-- 2. Tabela de Usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    status ENUM('ATIVO', 'INATIVO', 'BLOQUEADO') DEFAULT 'ATIVO',
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. Tabela de Produtos
CREATE TABLE IF NOT EXISTS produtos (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    qtd_estoque INT NOT NULL
);

-- 4. Tabela de Pedidos
CREATE TABLE IF NOT EXISTS pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    valor_total DECIMAL(10,2) NOT NULL,
    status_pedido ENUM('PENDENTE', 'PAGO', 'CANCELADO') DEFAULT 'PENDENTE',
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- ============================================================
-- INSERÇÃO DE MASSA DE DADOS PARA TESTES (POPULANDO AS TABELAS)
-- ============================================================

-- Inserindo Usuários
INSERT INTO usuarios (nome, email, status) VALUES 
('Thiago Silva', 'thiago.qa@email.com', 'ATIVO'),
('Carlos Souza', 'carlos.bloqueado@email.com', 'BLOQUEADO'),
('Ana Maria', 'ana.maria@email.com', 'INATIVO'),
('Juliana Lima', 'juliana.qa@email.com', 'ATIVO');

-- Inserindo Produtos
INSERT INTO produtos (nome_produto, preco, qtd_estoque) VALUES 
('Mouse Gamer RGB', 150.00, 25),
('Teclado Mecânico', 350.00, 10),
('Monitor 27 Polegadas', 1200.00, 0), -- Produto Sem Estoque para Testes!
('Headset Surround', 250.00, 5);

-- Inserindo Pedidos
INSERT INTO pedidos (id_usuario, valor_total, status_pedido) VALUES 
(1, 500.00, 'PAGO'),
(1, 150.00, 'PENDENTE'),
(4, 1200.00, 'CANCELADO');

-- ==========================================
-- 5. TABELA DE ITENS DO PEDIDO (Rastreabilidade)
-- ==========================================
CREATE TABLE itens_pedido (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    preco_unitario DECIMAL(10,2),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);

INSERT INTO itens_pedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(1, 1, 1, 150.00), 
(1, 2, 1, 350.00), 
(2, 1, 1, 150.00), 
(3, 3, 1, 1200.00);