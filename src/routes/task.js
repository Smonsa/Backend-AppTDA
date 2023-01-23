import { Router } from 'express';
import {getTasks, getTasksCount, getTask, saveTasks, deleteTasks, updateTasks} from  '../controllers/task'

const router = Router();

/**
 * @swagger
 * tags: 
 *  name: Tasks
 *  description: Tasks endpoints
 * 
 */


/** 
 * @swagger
 * /tasks:
 *  get:
 *    summary: Muestra todas las tareas
 *    tags: [Tasks]
 */

router.get('/task' , getTasks)

/** 
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Muestra el numero total de tareas
 *    tags: [Tasks]
 */

router.get('/task/count', getTasksCount)

/** 
 * @swagger
 * /task:
 *  get:
 *    summary: Muesta una tarea especifica
 *    tags: [Tasks]
 */

router.get('/task/:id', getTask)

/** 
 * @swagger
 * /tasks:
 *  post:
 *    summary: Guarda una tarea
 *    tags: [Tasks]
 */

router.post('/task', saveTasks)

/** 
 * @swagger
 * /tasks:
 *  delete:
 *    summary: Elimina una tarea
 *    tags: [Tasks]
 */

router.delete('/task/:id', deleteTasks)

/** 
 * @swagger
 * /tasks:
 *  put:
 *     summary: actualiza una tarea
 *     tags: [Tasks]
 */

router.put('/task/:id',  updateTasks)

export default router;