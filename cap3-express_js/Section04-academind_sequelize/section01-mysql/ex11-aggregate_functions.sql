-- Aggregate functions are the same as Postgre

-- MAX, MIN, AVG => Same
SELECT MAX(preco) FROM produto;
 
SELECT * FROM produto 
WHERE preco = (SELECT MAX(preco) FROM produto);

SELECT ROUND(AVG(preco), 2) FROM produto;

-- SUM, COUNT, GROUP BY, HAVING, ORDER BY => Same
SELECT SUM(preco) FROM produto;

SELECT COUNT(id) FROM produto;

SELECT tp.descricao, SUM(p.preco)
FROM produto AS p, tipo_produto AS tp
WHERE p.id_tipoproduto = tp.id
GROUP BY tp.descricao
ORDER BY SUM(p.preco) ASC;

SELECT tp.descricao, SUM(p.preco)
FROM produto AS p, tipo_produto AS tp
WHERE p.id_tipoproduto = tp.id
GROUP BY tp.descricao
HAVING SUM(p.preco) > 1000;