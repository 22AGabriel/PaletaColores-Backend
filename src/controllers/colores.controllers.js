import Color from "../models/color";

export const listarColores = (req, res) => {
  res.send("Esto es una prueba de una peticion get");
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