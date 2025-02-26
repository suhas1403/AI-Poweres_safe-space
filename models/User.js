module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user", // Default role is 'user'
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Report, { foreignKey: "userId", as: "reports" });
  };

  return User;
};
