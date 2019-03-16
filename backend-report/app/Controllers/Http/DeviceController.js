"use strict";

const Device = use("App/Models/Device");

class DeviceController {
  // lista todos os devices no banco de dados
  async index() {
    const response = await Device.query()
      .where("fk_id_department", 0)
      .fetch();
    return response;
  }

  // carrega todos os devices vinculados com a empresa
  async company({ params }) {
    const response = await Device.query()
      .where("fk_id_company", params.id)
      .with("types")
      .whereRaw("deleted = ?", false)
      .fetch();
    return response;
  }

  async itens({ params }) {
    const response = await Device.query()
      .where("id_device", params.id)
      .with("itens")
      .fetch();
    return response;
  }
}

module.exports = DeviceController;
