import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Proprietario = sequelize.define('proprietario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  cpf:{
    type:DataTypes.STRING(11),
    allowNull:false,
    unique: true
  },
  endereco: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(12),
    allowNull: false,
    validade:{
      len:{
        args:[12],
        msg:"telefone invalido"
      }
    }
  }
},{
    timestampas: false,

})