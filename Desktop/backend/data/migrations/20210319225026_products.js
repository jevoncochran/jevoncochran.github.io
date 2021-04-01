exports.up = function (knex) {
  return knex.schema.createTable("products", (tbl) => {
    tbl.increments();

    tbl.string("item", 255).notNullable();

    tbl.string("item_es", 255).notNullable();

    tbl.string("summary", 255);

    tbl.string("summary_es", 255);

    tbl.decimal("price", null);

    tbl.string("main_image", 255);

    tbl.string("route", 30);

    tbl.string("description1");

    tbl.string("description1_es");

    tbl.string("description2");

    tbl.string("description2_es");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products");
};
