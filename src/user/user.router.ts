import { BaseRouter } from "../shared/router/router";
import { UserController } from "./controllers/user.controller";

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }
  routes(): void {
    this.router.get("/users", (req, res) => {
      this.controller.getUsers(req, res);
    });
    this.router.get("/user/:id", (req, res) =>
      this.controller.getUserById(req, res)
    );
    this.router.get("/userrel/:id", (req, res) =>
      this.controller.getUserWithRelation(req, res)
    );
    this.router.post("/createuser", (req, res) =>
      this.controller.createUser(req, res)
    );
    this.router.put("/updateuser/:id", (req, res) =>
      this.controller.updateUser(req, res)
    );
    this.router.delete("/deleteuser/:id", (req, res) =>
      this.controller.deleteUser(req, res)
    );
  }
}
