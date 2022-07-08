module.exports = (sequelize, DataTypes) => {
	const Referals = sequelize.define(
		"Referals",
		{
			refered_by: {
				type: DataTypes.TEXT,
			},
			refered_user: {
				type: DataTypes.STRING,
			},
			refer_code: {
				type: DataTypes.STRING,
			},
			checked: {
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
