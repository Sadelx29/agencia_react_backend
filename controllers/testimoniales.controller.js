import { pool } from "../db.js";

export const GetTestimoniales = async (req, res) => {
  const restitmunuales = await pool.query("SELECT * FROM testimoniales");
  res.json(restitmunuales);
};

export const GetTestimonial = (req, res) => {
  res.send("viendo testimonial");
};

export const CreateTestimonial = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  console.log(req.body)
  const [CTestimonial] = await pool.query(
    "INSERT INTO testimoniales (nombre, correo, mensaje) VALUES (?,?,?)", [nombre, correo, mensaje]
  );
  res.json({
    nombre,
    correo,
    mensaje
  });
  console.log(CTestimonial);
};

export const DeleteTestimonial = async (req, res) => {
  try {
    const [Dtestimonial] = await pool.query("DELETE FROM testimoniales WHERE id = ?", [
      req.params.id,
    ]);

    if (Dtestimonial.affectedRows === 0) {
      return res.status(404).json({ message: "testimonial not found" });
    }
    // res.json(Dtestimonial)

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
