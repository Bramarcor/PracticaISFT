const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');



router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM empleados', (err, rows, fiels) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const { id, nombre, salario } = req.body;
    // para usar los sets del query agrego al conecction de la base de datos el multipleStatements: 'true'
    const query = `
        SET @id = ?;
        SET @nombre = ?;
        SET @salario = ?;
        CALL empleadoAddOrEdit(@id, @nombre, @salario);
        `;
    mysqlConnection.query(query, [id, nombre, salario], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Empleado Guardado' });
        } else {
            console.log(err);
        }
    });

});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, salario } = req.body;
    const query = `
        SET @id = ?;
        SET @nombre = ?;
        SET @salario = ?;
        CALL empleadoAddOrEdit(@id, @nombre, @salario);
        `;
    mysqlConnection.query(query, [id, nombre, salario], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Empleado Actualizado' });
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    query = ` DELETE FROM empleados WHERE id = ? `;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Empleado eliminado' })
        } else {
            console.log(err);
        }
    });
});





module.exports = router;