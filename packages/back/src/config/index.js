import UsersController from "../controllers/UserController";
import MainController from "../controllers/MainController";
import ProductController from "../controllers/CourseController";
import RoomController from "../controllers/SessionController";
import containerInit from "./container.js";

const controllers = [
  MainController,
  UsersController,
  ProductController,
  RoomController,
];

export { containerInit, controllers };
