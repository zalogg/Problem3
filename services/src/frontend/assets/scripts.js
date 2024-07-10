// URL del backend
const baseUrl = '/rooms';

// Función para cargar la lista de servicios
async function loadRooms() {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error('Error al cargar los servicios');
    }
    const rooms = await response.json();
    const roomsList = document.getElementById('rooms');
    roomsList.innerHTML = '';
    rooms.forEach(room => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Servicio:</strong> ${room.serviceName} - <strong>Descripción:</strong> ${room.description} - <strong>Precio:</strong> ${room.price}`;
      roomsList.appendChild(li);
    });
  } catch (error) {
    console.error('Error en loadRooms:', error);
  }
}

// Función para agregar un nuevo servicio
async function addRoom(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const newService = {
    serviceName: formData.get('serviceName'),
    description: formData.get('description'),
    price: formData.get('price')
  };
  
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newService)
    });
    if (!response.ok) {
      throw new Error('Error al agregar el servicio');
    }
    form.reset();
    loadRooms();
  } catch (error) {
    console.error('Error en addRoom:', error);
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  loadRooms();
  
  document.getElementById('addRoomForm').addEventListener('submit', addRoom);
});
