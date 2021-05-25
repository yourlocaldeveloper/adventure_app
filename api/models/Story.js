const db = require('../dbConfig/init');
const SQL = require('sql-template-strings');

class Story {
  constructor(data) {
    this.id = data.id
    this.story = data.story
  }

  static get all()  {
    return new Promise(async (res, rej) => {
      try {
        let result = await db.query(SQL`SELECT * FROM story;`);
        let stories = result.rows.map(r => new Story(r));
        res(stories);
      } catch (err) {
        rej(`ERROR: Could not find any storys D: - {err}`)
      }
    })
  }
}

module.exports = Story;