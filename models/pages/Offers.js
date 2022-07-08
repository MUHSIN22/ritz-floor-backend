module.exports = (sequelize, DataTypes) => {
	const Offers = sequelize.define(
		"Offers",
		{
			title: {
				type: DataTypes.STRING,
			},
			img: {
				type: DataTypes.STRING,
			},
			discount: {
				type: DataTypes.INTEGER,
			},
		},
		{
			timestamps: false,
		}
	);
	return Offers;
};
