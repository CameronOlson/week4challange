import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(taskData) {
        this.id = taskData._id
        this.description = taskData.description
        this.completed = taskData.completed

    }

    get TaskTemplate(){
        return /*html*/`
        
        <li class="d-flex justify-content-between">
        <span><input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.taskController.toggleComplete('${this.id}')"></span>
        <p class="fw-lighter p-2">${this.description}</p>
        <span><i class="mdi mdi-delete selectable" onclick="app.taskController.deleteTask('${this.id}')"></i></span>
        </li>
        `
    }
}