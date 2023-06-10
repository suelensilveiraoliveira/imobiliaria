//import { sequelize } from '../databases/conecta.js'

import { Imovel } from '../models/Imovel.js'
import { Proprietario } from '../models/Proprietario.js'

export const imovelIndex = async (req, res) => {

  try {
    const imovel = await Imovel.findAll({
      include: Proprietario
    })
    res.status(200).json(imovel)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const imovelCreate = async (req, res) => {
  const { proprietario_id,   nome, tipo, preco } = req.body;

  // se não informou estes atributos
  if (!proprietario_id || !nome || !tipo || !preco ) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
  }


  try {

    const proprietario = await Proprietario.findOne({
      where: { id: proprietario_id }});
    if (proprietario) {
      const imovel = await Imovel.create({
        proprietario_id,
        nome,
        tipo,
        preco
      });
      res.status(200).json(imovel)
    }
  } catch (error) {
    res.status(401).json(error)
  }
};