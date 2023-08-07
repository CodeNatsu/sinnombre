const overlay = document.querySelector('.overlay');
const acceptBtn = document.getElementById('acceptBtn');
const cancelBtn = document.getElementById('cancelBtn');

// Función para mostrar el mensaje emergente.
function showOverlay() {
  overlay.classList.add('active');
}

// Función para ocultar el mensaje emergente.
function hideOverlay() {
  overlay.classList.remove('active');
}

// Verificar si se ha mostrado el mensaje anteriormente a través de una cookie.
function checkCookie() {
  const cookieName = 'popupShown';
  const popupShown = getCookie(cookieName);

  if (!popupShown) {
    setCookie(cookieName, true, 365); // La cookie expirará en 365 días.
    showOverlay();
  }
}

// Función para obtener el valor de una cookie.
function getCookie(name) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');

  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }

  return null;
}

// Función para establecer una cookie.
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

// Mostrar el mensaje emergente si no hay cookie establecida.
checkCookie();

// Eventos de los botones.
acceptBtn.addEventListener('click', function() {
  // Aquí puedes redireccionar a la página de libros o realizar otras acciones si el usuario acepta.
  // Por ejemplo, redireccionar a una página específica:
  window.location.href = 'https://hentaihotclouds.blogspot.com';
});

cancelBtn.addEventListener('click', function() {
  window.location.href = 'https://www.google.com';
});
