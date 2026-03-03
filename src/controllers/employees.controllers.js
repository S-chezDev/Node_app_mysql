import {pool} from "../../db.js";

export const getEmployee = async (req, res) =>{
    const [rows] = await pool.query('SELECT * FROM employees')
    res.json(rows);
}

export const createEmployee = async (req, res) =>{
    const {name, salary} = req.body;
    const [result] = await pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary])
    res.json({
        id: result.insertId,
        name,
        salary
    });
}

export const updateEmployee = async (req, res) =>{
    const {id} = req.params;
    const {name, salary} = req.body;
    const [result] = await pool.query('UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    if(result.affectedRows === 0) return res.status(404).json({message: 'Employee not found'})
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id])
    res.json(rows[0]);
}

export const deleteEmployee = async (req, res) =>{
    const {id} = req.params;
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [id])
    if(result.affectedRows === 0) return res.status(404).json({message: 'Employee not found'})
    res.sendStatus(204);
}
