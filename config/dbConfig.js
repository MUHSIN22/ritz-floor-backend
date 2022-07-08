module.exports = {
	HOST: "localhost",
	USER: "root",
	PASSWORD: "",
	DB: "ritzfoor-admin-dashboard",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		accquire: 30000,
		idle: 10000,
	},
};
