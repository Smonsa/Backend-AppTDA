import mysql from 'mysql2/promise';
import {config} from './config';

//conexion asincrona
 export const connect = async () =>{
	return await mysql.createConnection(config);

};
