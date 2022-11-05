import Color from "../models/color";

export const listarColores = async(req, res) => {
  try {
    const colores = await Color.find()
    res.status(200).json(colores)
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al buscar los colores"
    })
  }
};

export const crearColor = async(req, res) => {
    // Validar el body

    // Guardar el objeto
    try {
        const colorNuevo = new Color(req.body)
        await colorNuevo.save();
        res.status(201).json({
            mensaje: "Se agregó el color"
        })
      } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Ocurrió un error al intentar agregar el color"
        })
      }
  };