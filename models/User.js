module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			name: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
			},
			password: {
				type: DataTypes.STRING,
			},
			phone: {
				type: DataTypes.STRING,
			},
			reffered_by: {
				type: DataTypes.STRING,
			},
			referal_code: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return User;
};
