module.exports = (sequelize, DataTypes) => {
	const Referals = sequelize.define(
		"Referals",
		{
			name: {
				type: DataTypes.TEXT,
			},
			email: {
				type: DataTypes.STRING,
			},
			phone: {
				type: DataTypes.STRING,
			},
			referal_code:{
				type: DataTypes.TEXT
			},
			status: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			timestamps: true,
		}
	);
	return Referals;
};
