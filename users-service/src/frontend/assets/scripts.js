const baseUrl = '/rooms';

async function loadRooms() {
  const response = await fetch(baseUrl);
  const rooms = await response.json();
  const roomsList = document.getElementById('rooms');
  roomsList.innerHTML = '';
  rooms.forEach(room => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>Nombres</strong> N° ${room.firstName} - <strong>Email:</strong> ${room.email} - <strong>Telefono:</strong> ${room.phone}`;
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
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone')
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
