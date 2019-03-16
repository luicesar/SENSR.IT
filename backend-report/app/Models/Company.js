"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Company extends Model {
  static get table() {
    return "tb_company";
  }

  // Reescrevo a chave de relacionamento, que por padrão o correto é company_id
  static get foreignKey() {
    return "fk_id_company";
  }

  person() {
    return this.hasOne("App/Models/Person", "id_company", "id_person");
  }

  // Uma empresa ela pode ter muitos contratos, neste caso o ideal é o relacionamento "hasMany"
  contract() {
    return this.hasMany("App/Models/Contract", "id_company", "fk_id_company");
  }
}

module.exports = Company;
