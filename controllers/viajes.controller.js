import { pool } from "../db.js";

export const GetViajes = async (req, res) => {
  const result = await pool.query("SELECT * FROM viajes");
  res.json(result);
};

export const GetViaje = async (req, res) => {
  const result = await pool.query("SELECT * FROM viajes WHERE id = ?", [
      req.params.id,
    ]);
  res.json(result)
};