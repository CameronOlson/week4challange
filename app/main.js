
import { QuoteController } from "./Controllers/QuoteController.js";
import { TaskController } from "./Controllers/TaskController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  quoteController = new QuoteController();
  taskController = new TaskController();

}

window["app"] = new App();
