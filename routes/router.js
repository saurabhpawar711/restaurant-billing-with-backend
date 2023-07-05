const express = require('express');

const router = express.Router();

const mainRoute = require('../controller/main');

router.post('/table/add-table', mainRoute.addBill);

router.get('/table/get-table', mainRoute.getBill);

router.delete('/table/delete-table/:id', mainRoute.deleteBill);

module.exports = router;