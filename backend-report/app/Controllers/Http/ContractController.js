"use strict";

const Contract = use("App/Models/Contract");
const Department = use("App/Models/Department");

class ContractController {
  // lista todos os contratos e seus devices atrelados
  async index() {
    const response = await Contract.query()
      .with("devices")
      .fetch();
    return response;
  }

  async company({ params }) {
    const response = await Contract.query()
      .where("fk_id_company", params.id)
      .whereRaw("deleted = ?", false)
      .fetch();
    return response;
  }

  async devices({ params }) {
    const response = await Contract.query()
      .where("id_contract", params.id)
      .whereRaw("deleted = ?", false)
      .with("devices")
      .withCount("devices", builder => builder.where("type", "server"))
      .with("company.person" /*, builder => builder.with*/)
      .fetch();

    /*const departments = await Department.all();

    const newDepartments = departments.toJSON().reduce((prev, current) => {
      prev[current.id_department] = current;
      return prev;
    }, {});

    console.log(newDepartments[3]);

    const newDevices = response.toJSON().map(device => {
      device.department = newDepartments[device.fk_id_department] || {};
      return device;
    });
    */
    return response;
  }
}

module.exports = ContractController;
