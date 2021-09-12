import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js";

   function _drawTask(){
        let template = ''
        ProxyState.tasks.forEach(i => template += i.TaskTemplate)
        document.getElementById("task").innerHTML = template     
        }

        export class TaskController {
            constructor (){
                console.log("hello from Task Controller")
                ProxyState.on('tasks', _drawTask)
                this.getTasks()
                }

        createTask(){
            console.log("help")
            event.preventDefault()
            let form = event.target
            let taskData = {
                description: form.description.value
                
            }
            taskService.createTask(taskData)
            console.log(taskData)
             
        }

        toggleComplete(taskId){
            taskService.toggleComplete(taskId)
        }

        async deleteTask(taskId){
            if (window.confirm("you sure")){
           try {
            await taskService.deleteTask(taskId)
           } catch (error) {
               alert (error.message)
           }
        }
        }
    
            getTasks(){
                taskService.getTasks()
            }
            // console.log('this is create task function', task)
        
    }
 
