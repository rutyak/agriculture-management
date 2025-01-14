const Field = require("../model/FieldSchema");

const createController = async (req, res) => {
    const { areaSize, cropType, fieldName, latitude, longitude } = req.body;
    
    console.log(areaSize, cropType, fieldName, latitude, longitude );
    try {
      if (!areaSize || !cropType || !fieldName || !latitude || !longitude) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const newData = await Field.create({
        areaSize,
        cropType,
        fieldName,
        location: {
          latitude,
          longitude,
        },
      });
      res.status(201).json(newData);
    } catch (error) {
      console.error("Error creating data:", error);
      res.status(500).json({ message: error.message });
    }
};

module.exports = createController;
