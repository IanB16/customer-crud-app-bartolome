const express = require('express');
const Customer = require('../models/customer.model.js');
const router = express.Router();
const {getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer} = require('../controllers/customer.controller.js');

router.get('/', getCustomers);
router.get("/:id", getCustomer);

router.post("/", createCustomer);

//update a Customer
router.put("/:id", updateCustomer);

//delete a Customer
router.delete("/:id", deleteCustomer);


module.exports = router;