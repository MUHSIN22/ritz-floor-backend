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
			price: {
				type: DataTypes.STRING
			},
			discount_price: {
				type: DataTypes.STRING
			}
		},
		{
			timestamps: false,
		}
	);
	return Offers;
};
