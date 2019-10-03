const Spot = require("../models/Spot")

//index listar todos os objetos
//show listar apenas um objeto
//destroy, update
//store criar objeto

module.exports = {
	async store(req,res){
		const { filename } = req.file;
		const { company, price, techs } = req.body;
		const { user_id } = req.body;//req.headers mas da erro
		
		let spot = {
			thumbnail: filename,
			company,
			price,
			techs : techs.split(",").map(tech => tech.trim()),
			user: user_id
		}
		console.log(spot)
		spot = Spot.create(spot)
		
		return res.json(spot)
	}
}