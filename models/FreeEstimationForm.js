module.exports = (sequelize, DataTypes) => {
	const FreeEstimation = sequelize.define(
		"FreeEstimation",
		{
			f_name: {
				type: DataTypes.TEXT
			},
            l_name: {
				type: DataTypes.TEXT,
			},
			phone: {
				type: DataTypes.STRING
			},
			email: {
				type: DataTypes.STRING,
			},
            address: {
				type: DataTypes.TEXT
			},
            city: {
				type: DataTypes.STRING
			},
            purchase: {
				type: DataTypes.STRING
			},
            product: {
				type: DataTypes.STRING
			},
            installation: {
				type: DataTypes.STRING
			},
		},
		{
			timestamps: false,
		}
	);
	return FreeEstimation;
};
