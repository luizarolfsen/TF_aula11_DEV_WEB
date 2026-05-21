const CourseModel = require("../../Models/CourseModel");

module.exports = async (req, res) => {
  try {
    const courses = await CourseModel.findAll();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar cursos." });
  }
};
