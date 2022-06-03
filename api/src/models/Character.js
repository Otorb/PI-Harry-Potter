const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('character', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ancestry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patronus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:  
      "https://cn.i.cdn.ti-platform.com/content/1316/harry-potter/showpage/ar/square.33a55e72.png?imwidth=420",
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
      
    },
    actividades: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    createDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};