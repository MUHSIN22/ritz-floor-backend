const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorAliases: false,
});

sequelize
	.authenticate()
	.then(() => console.log("Db connected"))
	.catch((err) => console.log(err));

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./UserModel")(sequelize, DataTypes);
db.ProductList = require("./Product-list")(sequelize, DataTypes);
db.Vinyl = require("./Venyl")(sequelize, DataTypes);

db.sequelize.sync({ force: false }, () => console.log("sync is done"));

module.exports = db;
