import { Op } from "sequelize";
import { Proprietario } from "../models/Proprietario.js";
import { Imovel } from "../models/Imovel.js";

export const proprietarioIndex = async (req, res) =>{
    try {
        const proprietario =await Proprietario.findAll({
            include:Imovel
        })
        res.status(200).json(proprietario)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const proprietarioCreate = async(req, res) =>{
    const {nome, cpf, endereco, telefone } = req.body
    if (!nome || !cpf || !endereco || !telefone){
        res.status(400).json({id:0, msg:"Preencha os campos obrigatórios"}) 
       // res.status(400).json({id:0, msg:"Preencha os campos obrigatórios do proprietrário" + nome + " " + cpf + " "+  endereco + " "+ telefone}) 
    }
    try {
        const proprietario = await Proprietario.create({
            nome, cpf, endereco, telefone
        })
        res.status(200).json(proprietario)
    } catch (error) {
        res.status(401).json(error)
    }
} 
