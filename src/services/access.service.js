const bcrypt = require("bcrypt")

const shopModel = require('../models/shop.models');


class AccessService {
	static signUp = async ({ name, email, password }) => {
		try {
			const isCreated = await shopModel.exists({ email });
			if (isCreated)
				return {
					code: 'yyyy',
					message: 'Shop already registered ',
				};
        


		} catch (error) {
			return {
				code: 'xxxx',
				message: error.message,
				status: 'error',
			};
		}
	};
}
