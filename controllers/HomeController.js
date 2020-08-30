class HomeController{

    async index(req, res){
        res.send("API Users - Eduardo Matias Ribeiro");
    }

}

module.exports = new HomeController();