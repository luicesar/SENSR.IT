"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Inventory extends Model {
  static get table() {
    return "tb_inventory";
  }
}

module.exports = Inventory;
