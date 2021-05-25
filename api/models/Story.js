const db = require('../dbConfig/init');
const SQL = require('sql-template-strings');
const story1 = require('../story.json');

class Story {
  constructor(data) {
    this.story = data.story
  }

  static get all()  {
    console.log("YO")
    return new Promise(async (res, rej) => {
      try {
        res(story1);
      } catch (err) {
        rej(`ERROR: Could not find any storys D: - ${err}`)
      }
    })
  }
}

module.exports = Story;