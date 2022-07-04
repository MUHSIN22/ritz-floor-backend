module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			USERNAME: {
				type: DataTypes.STRING,
			},
			PASSWORD: {
				type: DataTypes.STRING,
			},
			IS_ADIMN: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			timestamps: false,
		}
	);
	return User;
};
