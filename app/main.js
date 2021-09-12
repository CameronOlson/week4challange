
import { ClockController } from "./Controllers/ClockController.js";
import { ImgController } from "./Controllers/ImgController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TaskController } from "./Controllers/TaskController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";



class App {
  valuesController = new ValuesController();
  quoteController = new QuoteController();
  taskController = new TaskController();
  imgController = new ImgController();
  weatherController = new WeatherController();
  clockController = new ClockController();
}

window["app"] = new App();
