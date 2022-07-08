module.exports = (sequelize, DataTypes) => {
	const WhyChooseUs = sequelize.define(
		"WhyChooseSection",
		{
			title: {
				type: DataTypes.STRING,
			},
			content: {
				type: DataTypes.TEXT,
			},
			img: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return WhyChooseUs;
};
