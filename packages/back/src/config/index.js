import UsersController from "../controllers/UserController";
import MainController from "../controllers/MainController";
import CourseController from "../controllers/CourseController";
import SessionController from "../controllers/SessionController";
import containerInit from "./container.js";
import PoolController from "../controllers/PoolController";
import CertificationController from "../controllers/CertificationController";

const controllers = [
  MainController,
  UsersController,
  CourseController,
  SessionController,
  PoolController,
  CertificationController,
];

export { containerInit, controllers };
