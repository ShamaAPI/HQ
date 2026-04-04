const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Complaint extends Model {}

  Complaint.init({
    complaint_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_coordinates: {
      type: DataTypes.GEOGRAPHY,
      allowNull: true,
    },
    assigned_to_admin: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Complaint',
    timestamps: true,
  });

  return Complaint;
};
