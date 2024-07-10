const express = require('express');
const router = express.Router();
const roomController = require('../controllers/userController');

router.post('/', roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getRoomById);
router.put('/:id', roomController.updateRoom);
router.delete('/:id', roomController.deleteRoom);
router.patch('/:id/availability', roomController.updateAvailability);

module.exports = router;
