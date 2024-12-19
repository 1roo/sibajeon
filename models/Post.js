module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "post",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Post;
};
