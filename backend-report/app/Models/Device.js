"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Device extends Model {
  static get table() {
    return "tb_device";
  }

  itens() {
    return this.belongsToMany(
      "App/Models/Item",
      "fk_id_device",
      "fk_id_item",
      "id_device",
      "id_item"
    )
      .pivotTable("tb_device_item")
      .pivotPrimaryKey("id_device_item");
  }

  types() {
    return this.belongsTo(
      "App/Models/DeviceType",
      "id_device_type",
      "fk_id_device_type"
    );
  }

  departments() {
    return this.hasOne(
      "App/Models/Department",
      "id_department",
      "fk_id_department"
    );
  }
}

module.exports = Device;
