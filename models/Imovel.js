import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Proprietario } from './Proprietario.js';

export const Imovel = sequelize.define('imovel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  estatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0
  },
  preco: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING(60),
    allowNull: false
  }
},{
    tableName: "imoveis",
    timestamps: false
  });

Imovel.belongsTo(Proprietario, {
  foreignKey: {
    name: 'proprietario_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Proprietario.hasMany(Imovel, {
  foreignKey: 'proprietario_id'
})
