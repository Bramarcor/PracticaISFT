CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE empleados (
	id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE empleados;


INSERT INTO empleados VALUES 
	(1, 'Ryan Ray', 20000),
    (2, 'Joe McMilan', 30000),
    (3, 'John Carter', 40000);


SELECT * FROM empleados;
