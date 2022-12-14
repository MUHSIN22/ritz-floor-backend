module.exports = (sequelize, DataTypes) => {
	const Testimonials = sequelize.define(
		"Testimonials",
		{
			content: {
				type: DataTypes.TEXT,
			},
			rating: {
				type: DataTypes.STRING,
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

