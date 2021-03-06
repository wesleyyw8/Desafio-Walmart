DROP DATABASE WALMARTDESAFIO;
CREATE DATABASE WALMARTDESAFIO;
USE WALMARTDESAFIO;

CREATE TABLE CLIENTE (
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL ,
	idade INT,
	sexo VARCHAR(1),
	PRIMARY KEY (id)
);


CREATE TABLE PAIS(
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE ESTADO(
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	id_pais INT,
	FOREIGN KEY (id_pais) REFERENCES PAIS (id),
	PRIMARY KEY (id)
);
CREATE TABLE CIDADE(
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	id_estado INT,
	id_pais INT,
	FOREIGN KEY (id_pais) REFERENCES PAIS (id),
	FOREIGN KEY (id_estado) REFERENCES ESTADO (id),
	PRIMARY KEY (id)
);

CREATE TABLE ENDERECO(
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	lugarejo VARCHAR(255) NOT NULL,
	CEP INT,
	id_cidade INT,
	id_estado INT,
	id_pais INT,
	id_cliente INT,
	FOREIGN KEY (id_cliente) REFERENCES CLIENTE (id),
	FOREIGN KEY (id_pais) REFERENCES PAIS (id),
	FOREIGN KEY (id_estado) REFERENCES ESTADO (id),
	FOREIGN KEY (id_cidade) REFERENCES CIDADE (id),
	PRIMARY KEY (id)
);

CREATE TABLE PRODUTO(
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	preco DOUBLE,
	imagem VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE PEDIDO(
	id INT AUTO_INCREMENT,
	id_cliente INT,
	id_produto INT,
	id_endereco INT,
	quantidade INT,
	data DATE,
	PRIMARY KEY (id),
	FOREIGN KEY (id_cliente) REFERENCES CLIENTE (id),
	FOREIGN KEY (id_produto) REFERENCES PRODUTO (id),
	FOREIGN KEY (id_endereco) REFERENCES ENDERECO (id)
);


INSERT INTO PAIS (nome) VALUES ("Brasil");
INSERT INTO PAIS (nome) VALUES ("Chile");
INSERT INTO PAIS (nome) VALUES ("Argentina");

INSERT INTO ESTADO (nome, id_pais) VALUES ("SP", 1);
INSERT INTO ESTADO (nome, id_pais) VALUES ("RJ", 1);
INSERT INTO ESTADO (nome, id_pais) VALUES ("MG", 1);

INSERT INTO CIDADE (nome, id_pais, id_estado) VALUES ("Santos", 1, 1);
INSERT INTO CIDADE (nome, id_pais, id_estado) VALUES ("Petropolis", 1, 2);
INSERT INTO CIDADE (nome, id_pais, id_estado) VALUES ("Belo Horizonte", 1, 3);

INSERT INTO CLIENTE (nome, idade, sexo) VALUES ("Wesley", 27, "m");
INSERT INTO CLIENTE (nome, idade, sexo) VALUES ("Fernanda", 22, "f");
INSERT INTO CLIENTE (nome, idade, sexo) VALUES ("Joaquina", 34, "f");

INSERT INTO ENDERECO (nome, lugarejo, CEP, id_cidade, id_estado, id_pais, id_cliente) 
VALUES 
('casa do Wesley', 'Alameda dos Maracatins 971', 04089001, 1, 1, 1, 1 );

INSERT INTO ENDERECO (nome, lugarejo, CEP, id_cidade, id_estado, id_pais, id_cliente) 
VALUES 
('casa de praia do Wesley', 'Rua Meril Brandila 158', 11740000, 2, 2, 1, 1 );


INSERT INTO ENDERECO (nome, lugarejo, CEP, id_cidade, id_estado, id_pais, id_cliente) 
VALUES 
('casa da Fernanda', 'Rua da felicidade 552', 25827123, 2, 2, 1, 2 );

INSERT INTO ENDERECO (nome, lugarejo, CEP, id_cidade, id_estado, id_pais, id_cliente) 
VALUES 
('casa da Joaquina', 'Avenida Dos Generais 20', 83712321, 3, 3, 1, 3 );

INSERT INTO PRODUTO (nome, preco, imagem ) VALUES ('televisao', 400.00, 'televisao.jpg');
INSERT INTO PRODUTO (nome, preco, imagem) VALUES ('computador', 2000.00, 'computador.jpg');
INSERT INTO PRODUTO (nome, preco, imagem ) VALUES ('cadeira', 90.00, 'cadeira.jpg');

/*SELECT C.nome, E.nome, P.nome 
FROM CIDADE C, ESTADO E, PAIS P 
WHERE C.id_estado = E.id and P.id = E.id_pais;

SELECT C.nome, E.nome, P.nome , CLI.nome, END.lugarejo
FROM CIDADE C, ESTADO E, PAIS P, CLIENTE CLI , ENDERECO END
WHERE C.id_estado = E.id and P.id = E.id_pais and END.id_cidade = C.id and CLI.id = END.id_cliente;*/

INSERT INTO PEDIDO (id_cliente, id_produto, id_endereco, quantidade, data) VALUES (
	1, 2, 1, 2, '2008-7-04'
);

INSERT INTO PEDIDO (id_cliente, id_produto, id_endereco, quantidade, data) VALUES (
	1, 1, 2, 1, '2008-7-04'
);

INSERT INTO PEDIDO (id_cliente, id_produto, id_endereco, quantidade, data) VALUES (
	2, 1, 3, 1, '2012-2-25'
);
INSERT INTO PEDIDO (id_cliente, id_produto, id_endereco, quantidade, data) VALUES (
	3, 3, 4, 4, '2015-12-11'
);

/*SELECT PED.quantidade, PED.data, CLI.nome, PROD.nome, END.lugarejo
FROM PEDIDO PED, CLIENTE CLI, PRODUTO PROD, ENDERECO END
WHERE
PED.id_cliente = CLI.id and 
PED.id_produto = PROD.id and
PED.id_endereco = END.id and
CLI.id = END.id_cliente;
*/

/*SELECT CLI.nome, END.nome, END.Lugarejo, END.CEP, CID.nome, EST.nome, P.nome FROM ENDERECO END, CIDADE CID, ESTADO EST, PAIS P, CLIENTE CLI where CLI.id='1' AND CLI.id=END.id_cliente AND END.id_cidade = CID.id AND END.id_estado = EST.id AND END.id_pais = P.id;*/



/*
 select PED.id, PED.id_cliente, PRO.nome, PED.id_produto, PRO.nome, PED.id_endereco, PED.quantidade, PED.quantidade * PRO.preco AS total, PED.data
 from PEDIDO PED, PRODUTO PRO 
 where 
 PED.id_cliente = 1 AND
 PED.id_produto = PRO.id;
*/

/*CREATE TABLE TESTEFOTO (
    id INT NOT NULL AUTO_INCREMENT,
    img LONGBLOB NOT NULL,
  PRIMARY KEY (id)
);
*/
/*
INSERT INTO TESTEFOTO (img) 
VALUES 
(LOAD_FILE('C:/Users/Wesley Rebelo/haha.txt'));

SELECT LOAD_FILE('C:/Users/Wesley Rebelo/haha.txt');

SELECT LOAD_FILE('C:/teste/haha.txt');
*/

/*GRANT FILE ON *.* TO 'root'@'localhost' ;*/