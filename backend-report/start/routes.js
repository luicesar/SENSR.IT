"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.get("/companies", "CompanyController.index");
Route.get("/companies/inventories/:id", "InventoryController.device");

Route.get("/inventories", "InventoryController.index");

Route.get("/devices", "DeviceController.index");
Route.get("/devices/company/:id", "DeviceController.company");
Route.get("/devices/itens/:id", "DeviceController.itens");

Route.get("/contracts", "ContractController.index");
Route.get("/contracts/company/:id", "ContractController.company");
Route.get("/contracts/devices/:id", "ContractController.devices");

Route.get("/persons", "PersonController.index");

Route.get("/departments", "DepartmentController.index");
