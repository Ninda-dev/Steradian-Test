const { Car, Order } = require('../models')

class Controller {
    static async getCars(req, res) {
        try {
            let data = await Car.findAll()
            
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            
        }
    }
    
    static async getOrders(req, res) {
        try {
            let data = await Order.findAll()
            
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            
        }
    }
    
    static async createCar(req, res) {
        try {
            const newCar = await Car.create(req.body)

            res.status(201).json(newCar)
        } catch (error) {
            console.log(error);
        }
    }
    
    static async updateCar(req, res) {
        try {
            const {id} = req.params

            await Car.update(req.body, {
                where: {id}
            })

            res.json({message: 'Car updated'})
        } catch (error) {
            console.log(error);
        }
    }
    
    static async deleteCar(req, res) {
        try {
            const {id} = req.params
            
            await Car.destroy({
                where: {id}
            })

            res.json({message: 'Car deleted'})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Controller