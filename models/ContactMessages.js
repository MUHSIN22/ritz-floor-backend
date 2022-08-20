module.exports = (sequelize, DataTypes) => {
	const ContactMessage = sequelize.define(
		"ContactMessage",
		{
			name: {
				type: DataTypes.TEXT
			},
			message: {
				type: DataTypes.TEXT,
			},
			phone: {
				type: DataTypes.STRING
			},
			email: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return ContactMessage;
};
