module.exports = (sequelize, DataTypes) => {
	const ProductSection = sequelize.define(
		"ProductSection",

		{
			title: {
				type: DataTypes.STRING,
			},
			img: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return ProductSection;
};
