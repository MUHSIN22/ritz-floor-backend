module.exports = (sequelize, DataTypes) => {
	const Features = sequelize.define(
		"Features",
		{
			title: {
				type: DataTypes.STRING,
			},
			content: {
				type: DataTypes.TEXT,
			},
			img_living:{
				type: DataTypes.TEXT
			},
			img_bed:{
				type: DataTypes.TEXT
			},
			img_office:{
				type: DataTypes.TEXT
			},
			img_dining:{
				type: DataTypes.TEXT
			},
			img_balcony: {
				type: DataTypes.TEXT
			},
			img_kitchen: {
				type: DataTypes.TEXT
			}
		},
		{
			timestamps: false,
		}
	);
	return Features;
};

