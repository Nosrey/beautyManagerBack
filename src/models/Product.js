const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    imagen: {
      type: DataTypes.TEXT,
      defaultValue: "https://media.istockphoto.com/id/1320642367/vector/image-unavailable-icon.jpg?s=170667a&w=0&k=20&c=f3NHgpLXNEkXvbdF1CDiK4aChLtcfTrU3lnicaKsUbk="
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    avaible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
};

