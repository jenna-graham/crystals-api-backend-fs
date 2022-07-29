const pool = require('../utils/pool');

module.exports = class Crystal {
  id;
  name;
  color;
  zodiac;
  properties;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.color = row.color;
    this.zodiac = row.zodiac;
    this.properties = row.properties;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM crystals;');
    return rows.map((row) => new Crystal(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM crystals WHERE id=$1;', [
      id,
    ]);
    if (!rows[0]) return null;

    return new Crystal(rows[0]);
  }
};
