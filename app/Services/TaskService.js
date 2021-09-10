import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Cam/todos'
})
class TaskService {
    
    async createTask(taskData){ 
        let res = await api.post('',taskData)
        console.log('this is your task', res.data)
        ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]
    }

  }


export const taskService = new TaskService();

