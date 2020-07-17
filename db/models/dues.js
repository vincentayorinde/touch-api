'use strict';
module.exports = (sequelize, DataTypes) => {
  const dues = sequelize.define('Dues', {
    userId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    purpose: DataTypes.TEXT,
    type: DataTypes.STRING,
    no_of_days: DataTypes.INTEGER
  }, {});
  dues.associate = function(models) {
    // associations can be defined here
    dues.belongsTo(models.user,{
      foreignKey: 'userId',
      as: 'dues',
      cascade: true,
    })
  };
  return dues;
};



'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dues.init({
    user_name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    purpose: DataTypes.TEXT,
    type: DataTypes.STRING,
    no_of_days: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dues',
  });
  return Dues;
};