const express = require('express');
const router = express.Router();
const rentItemController = require('../controllers/rentItemcontroller');

router.post('/create', rentItemController.rentItemCreate);
router.put('/:id/update', rentItemController.updateRentItem);
router.delete('/:id/delete', rentItemController.deleteRentItem);
module.exports = router;