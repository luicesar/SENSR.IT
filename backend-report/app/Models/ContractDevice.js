"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ContractDevice extends Model {
  static get table() {
    return "tb_contract_device";
  }
}

module.exports = ContractDevice;
