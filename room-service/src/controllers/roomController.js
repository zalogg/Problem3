const roomService = require('../services/roomService');

exports.createRoom = async (req, res) => {
  try {
    const result = await roomService.createRoom(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await roomService.getAllRooms();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRoomById = async (req, res) => {
  try {
    const room = await roomService.getRoomById(req.params.id);
    if (room) {
      res.status(200).json(room);
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const result = await roomService.updateRoom(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    const result = await roomService.deleteRoom(req.params.id);
    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAvailability = async (req, res) => {
  try {
    const result = await roomService.updateAvailability(req.params.id, req.body.availability);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
