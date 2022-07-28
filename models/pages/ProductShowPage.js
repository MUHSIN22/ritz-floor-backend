module.exports = (sequelize, DataTypes) => {
	const ProductShowPage = sequelize.define(
		"ProductShowPage",

		{
            productId: {
                type: DataTypes.INTEGER
            },
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
	return ProductShowPage;
};

