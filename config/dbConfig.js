module.exports = {
	HOST: "localhost",
	USER: "root",
	PASSWORD: "joeroot@123",
	DB: "ritz-floor-backend",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		accquire: 30000,
		idle: 10000,
	},
};
