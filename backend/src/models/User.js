const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {}

  User.init({
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    national_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_card_images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    ocr_data: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    verification_status: {
      type: DataTypes.ENUM('pending', 'verified', 'rejected'),
      allowNull: false,
      defaultValue: 'pending',
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
