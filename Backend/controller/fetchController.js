const Field = require("../model/FieldSchema");

const fetchController = async (req, res) => {
    try {
      const data = await Field.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

module.exports = fetchController;