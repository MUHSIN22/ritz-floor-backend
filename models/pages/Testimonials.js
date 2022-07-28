module.exports = (sequelize, DataTypes) => {
	const Testimonials = sequelize.define(
		"Testimonials",
		{
			content: {
				type: DataTypes.TEXT,
			},
			role: {
				type: DataTypes.TEXT,
			},
			name: {
				type: DataTypes.STRING,
			}
		},
		{
			timestamps: false,
		}
	);
	return Testimonials;
};

