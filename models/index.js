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

//Page Modals
db.Pages = require("./pages/Pages")(sequelize, DataTypes);
db.ProductSection = require("./pages/ProductSection")(sequelize, DataTypes);
db.WhyChooseSection = require("./pages/WhyChooseUs")(sequelize, DataTypes);
db.ClientReview = require("./pages/ClientReview")(sequelize, DataTypes);
db.Features = require("./pages/Features")(sequelize, DataTypes);
db.FeaturesImages = require("./pages/FeaturesImages")(sequelize, DataTypes);
db.OurWorks = require("./pages/OurWorks")(sequelize, DataTypes);
db.OurWorksImages = require("./pages/OurWorksImages")(sequelize, DataTypes);
db.LaminateWood = require("./pages/LaminateWood")(sequelize, DataTypes);
db.Offers = require("./pages/Offers")(sequelize, DataTypes);
db.UpcommingOffers = require("./pages/UpcommingOffers")(sequelize, DataTypes);
db.Testimonials = require("./pages/Testimonials")(sequelize, DataTypes);
db.VideoTestimonials = require("./pages/VideoTestimonials")(
	sequelize,
	DataTypes
);

db.ProductShowPage = require('./pages/ProductShowPage')(sequelize,DataTypes)
db.productPageImage = require('./pages/ProductPageImages')(sequelize,DataTypes);
db.knowledgeSeries = require('./pages/KnowledgeSeries')(sequelize,DataTypes);
db.knowledgeSereisImages = require('./pages/KnowledgeSeriesImages')(sequelize,DataTypes)

db.AboutUsList = require("./pages/AboutUsList")(sequelize, DataTypes);

//User Modals
db.User = require("./User")(sequelize, DataTypes);

//Text-Testimonials
db.TextTestimonials = require("./TextTestimonials")(sequelize, DataTypes);

//ContactMessage
db.ContactMessage = require("./ContactMessages")(sequelize, DataTypes);
db.FreeEstimation = require("./FreeEstimationForm")(sequelize, DataTypes);

//Referals
db.Referals = require("./Referals")(sequelize, DataTypes);

//NewsLetter
db.NewsLetters = require("./NewsLetters")(sequelize, DataTypes);

db.AboutUs = require("./pages/AboutUs")(sequelize, DataTypes);
db.WorkingTime = require('./WorkingTime')(sequelize,DataTypes)

db.sequelize.sync({ force: false }, () => console.log("sync is done"));

module.exports = db;
