const Car = require('mongoose').model('Car');

module.exports = {
    getAddCar: (req, res) => {
        res.render('cars/add');
    },

    postAddCar: (req, res) => {
        let reqBody = req.body;
        
        let carObj = {
            make: reqBody.make,
            model: reqBody.model,
            imageUrl: reqBody.imageUrl,
            color: reqBody.color,
            price: reqBody.price,

        }

        Car.create(carObj).then((p) => {
            //res.render('cars/add', {successMessage: 'One car added!'})
            res.redirect('/')
           
        }).catch((err) => {
            res.locals.globalError = err.message;
            res.render('cars/add')
        })
    },

    getAllCars: (req, res) => {
        Car.find().then((cars) => {
            res.render('cars/all', {cars})
        }).catch((err) => {
            res.locals.globalError = err.message;
            res.render('cars/all')
        })
    },
}