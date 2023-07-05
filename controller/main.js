const Table = require('../model/tableDetails');

exports.addBill = async (req, res, next) => {
    try {
        const price = req.body.price;
        const dish = req.body.dish;
        const table = req.body.table;

        const data = await Table.create({ price: price, dish: dish, table: table });
        res.status(201).json({ tableDetails: data });
    }
    catch (err) {
        console.log(err);
    }
}

exports.getBill = async (req, res, next) => {
    try {
        const response = await Table.findAll();
        res.status(202).json({billDetails: response});
    }

    catch(err) {
        console.log(err);
    }
}

exports.deleteBill = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Table.destroy({where: {id: id}});
        res.sendStatus(204);
    }
    catch(err) {
        console.log(err);
    }
}


