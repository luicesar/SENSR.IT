"use strict";

const Department = use("App/Models/Department");

class DepartmentController {
  async index() {
    const response = await Department.query()
      .with("devices")
      .fetch();
    return response;
  }
}

module.exports = DepartmentController;
