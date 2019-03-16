"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Department extends Model {
  static get table() {
    return "tb_department";
  }

  devices() {
    return this.hasMany(
      "App/Models/Device",
      "id_department",
      "fk_id_department"
    );
  }
}

module.exports = Department;
