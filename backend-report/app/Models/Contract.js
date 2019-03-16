const Model = use("Model");

class Contract extends Model {
  static get table() {
    return "tb_contract";
  }

  // device() {
  //   return this.hasMany(
  //     "App/Models/ContractDevice",
  //     "id_contract",
  //     "fk_id_contract"
  //   );
  // }

  company() {
    return this.belongsTo("App/Models/Company", "fk_id_company", "id_company");
  }

  devices() {
    return this.belongsToMany(
      "App/Models/Device",
      "fk_id_contract",
      "fk_id_device",
      "id_contract",
      "id_device"
    ).pivotModel("App/Models/ContractDevice");
    //.pivotTable("tb_contract_device")
    //.pivotPrimaryKey("id_contract_device")
    //.withPivot(["deleted", "user_cad", "dt_cad"])
  }

  colaborador() {
    return this.belongsToMany(
      "App/Models/Person",
      "fk_id_device",
      "fk_id_user",
      "id_device",
      "id_person"
    ).pivotTable("tb_rel_device_user");
  }
}

module.exports = Contract;
