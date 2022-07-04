module.exports = (sequelize, DataTypes) => {
	const ProductList = sequelize.define(
		"product-list",
		{
			Venyl: {
				type: DataTypes.STRING,
			},
			Tiles: {
				type: DataTypes.STRING,
			},
			Laminate: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			HardWood: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	);
	return ProductList;
};
