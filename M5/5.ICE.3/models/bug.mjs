export default function bugModel(sequelize, DataTypes) {
    return sequelize.define('bug', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      problem: {
        type: DataTypes.STRING,
      },
      errorText: {
        type: DataTypes.STRING,
      },
      commit: {
        type: DataTypes.STRING,
      },
    }, { underscored: true });
  }
  