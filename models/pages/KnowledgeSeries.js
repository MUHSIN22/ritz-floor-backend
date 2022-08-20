module.exports = (sequelize, DataTypes) => {
	const knowledgeSeries = sequelize.define(
		"knowledgeSeries",

		{
			content_title: {
				type: DataTypes.TEXT,
			},
			content: {
				type: DataTypes.TEXT,
			},
            product_title: {
				type: DataTypes.TEXT,
			},
		},
		{
			timestamps: false,
		}
	);
	return knowledgeSeries;
};