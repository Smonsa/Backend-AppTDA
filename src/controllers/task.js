import {connect} from '../database';

export const getTasks = async (req, res) =>{
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM tareas');
	res.json(rows);
};

export const getTask = async (req, res) =>{
	const connection = await connect();
	const [rows] = await connection.query('SELECT * FROM tareas WHERE id = ?', 
		[req.params.id,]);
	res.json(rows[0]);
};

export const getTasksCount = async (req, res) =>{
	const connection = await connect();
	const [rows] = await connection.query('SELECT COUNT(*) FROM tareas');
	res.json(rows[0]["COUNT(*)"]);
};

export const saveTasks = async (req, res) =>{
	const connection = await connect();
	const [results] = await connection.query('INSERT INTO tareas(titulo, descripcion, fecha) VALUES (?,?,?)', 
		[req.body.titulo,
		req.body.descripcion,
		req.body.fecha
		]);
	res.json({
		id: results.insertId,
		...req.body,
	});
};

export const deleteTasks = async (req, res) =>{
	const connection = await connect();
	await connection.query('DELETE FROM tareas WHERE id = ?',
		[req.params.id,]);
	res.sendStatus(204);
};

export const updateTasks = async (req, res) =>{
	const connection = await connect();
	const result = await connection.query('UPDATE tareas SET ? WHERE id = ?',
		[req.body,
		req.params.id
		]);
	console.log(result);
	res.sendStatus(204);
}