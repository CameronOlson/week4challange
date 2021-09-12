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

    async getTasks(){
        let res = await api.get('')
        ProxyState.tasks = res.data.map(t => new Task(t))
        console.log("this should happen at the startup")
    }
    async toggleComplete(taskId){
        const task = ProxyState.tasks.find(t => t.id === taskId)
        task.completed = !task.completed
        await api.put(`${task.id}`, task )
        console.log (task)

    }
    async deleteTask(taskId){
        await api.delete(taskId)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)
    }

  

}
export const taskService = new TaskService();

