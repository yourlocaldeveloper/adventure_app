const Story = require('../models/Story');

async function index (req, res) {
  try {
    const stories = await Story.all;
    res.status(200).json(stories);
  } catch(err) {
    res.status(500).json({err});
  }
}

module.exports = {index}