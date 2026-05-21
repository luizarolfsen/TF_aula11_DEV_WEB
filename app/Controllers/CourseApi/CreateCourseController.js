const CourseModel = require("../../Models/CourseModel");

module.exports = async (req, res) => {
  try {
    const course = await CourseModel.create(req.body);
    return res.status(201).json(course);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar curso." });
  }
};
