const { USER_CONSTANTS } = require("../../services/user/index.js");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(
    USER_CONSTANTS.TABLE_NAME,
    require("../../services/user/user.schema.js")
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists(USER_CONSTANTS.TABLE_NAME);
};
