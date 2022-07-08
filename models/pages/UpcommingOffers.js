module.exports = (sequelize, DataTypes) => {
	const UpcommingOffers = sequelize.define(
		"UpcommingOffers",
		{
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
	return UpcommingOffers;
};
