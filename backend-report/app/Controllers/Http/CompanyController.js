"use strict";

const Company = use("App/Models/Company");

class CompanyController {
  // lista todas as empresas e seus contratos vinculados
  async index() {
    const response = await Company.query()
      //.with("contract")
      .with("person")
      .whereRaw("deleted = ?", false)
      .fetch();

    return response;
  }
}

module.exports = CompanyController;
