import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Imovel } from './Imovel.js';
import { Inquilino } from './Inquilino.js';
import { Proprietario } from '../models/Proprietario.js'


export const Aluguel = sequelize.define('Aluguel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  preco: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false
  },
  data_inicial: {
    type:DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
},
  data_final: {
    type: DataTypes.DATE,
  },
  
}, {
  tableName: "alugueis",
  timestamps: false
});

Aluguel.belongsTo(Proprietario, {
  foreignKey: {
    name: 'proprietario_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Proprietario.hasMany(Aluguel, {
  foreignKey: 'proprietario_id'
})

Aluguel.belongsTo(Inquilino, {
  foreignKey: {
    name: 'inquilino_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Inquilino.hasOne(Aluguel, {
  foreignKey: 'inquilino_id'
})

Aluguel.belongsTo(Imovel, {
  foreignKey: {
    name: 'imovel_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Imovel.hasOne(Aluguel, {
  foreignKey: 'imovel_id'
})
