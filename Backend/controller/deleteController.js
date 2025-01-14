const Field = require("../model/FieldSchema");

const deleteController = async (req, res) => {
  const { id } = req.params;

  console.log("id for delete: ",id);

  try {
    const deletedField = await Field.findByIdAndDelete(id);

    if (!deletedField) {
      return res.status(404).json({ message: "field not found" });
    }

    res.status(200).json({ field: deletedField });
  } catch (error) {
    console.error("Error updating field: ", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteController;
