module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define("Report", {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    severity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Default severity level
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending", // Default status
    },
  });

  Report.associate = (models) => {
    Report.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };

  return Report;
};
