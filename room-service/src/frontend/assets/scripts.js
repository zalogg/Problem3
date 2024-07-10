const baseUrl = '/rooms';

async function loadRooms() {
  const response = await fetch(baseUrl);
  const rooms = await response.json();
  const roomsList = document.getElementById('rooms');
  roomsList.innerHTML = '';
  rooms.forEach(room => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Habitación</strong> N° ${room.number} - <strong>Tipo:</strong> ${room.type} - <strong>Capacidad:</strong> ${room.capacity}`;
    roomsList.appendChild(li);
  });
}

async function addRoom(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      number: formData.get('number'),
      type: formData.get('type'),
      capacity: formData.get('capacity')
    })
  });
  if (response.ok) {
    form.reset();
    loadRooms();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadRooms();
  
  document.getElementById('addRoomForm').addEventListener('submit', addRoom);

});
