"use strict";

const Inventory = use("App/Models/Inventory");

class InventoryController {
  /**
   * Show a list of all inventories.
   * GET inventories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const response = await Inventory.all();
    return response;
  }

  /**
   * Create/save a new inventory.
   * POST inventories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Update inventory details.
   * PUT or PATCH inventories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a inventory with id.
   * DELETE inventories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}

  async device({ params }) {
    const response = await Inventory.query()
      .where("fk_id_device", params.id)
      .fetch();
    return response;
  }
}

module.exports = InventoryController;
