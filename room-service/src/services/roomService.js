const Room = require('../models/roomModel');

exports.createRoom = async (roomData) => {
  return await Room.create(roomData);
};

exports.getAllRooms = async () => {
  return await Room.findAll();
};

exports.getRoomById = async (id) => {
  return await Room.findByPk(id);
};

exports.updateRoom = async (id, roomData) => {
  return await Room.update(roomData, { where: { id } });
};

exports.deleteRoom = async (id) => {
  return await Room.destroy({ where: { id } });
};

exports.updateAvailability = async (id, availability) => {
  return await Room.update({ availability }, { where: { id } });
};
