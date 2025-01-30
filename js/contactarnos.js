
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtén los datos del formulario
    const formData = new URLSearchParams(new FormData(this));

    // Envía los datos a Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbwpX65C00otRmz0q7jgoxTJF4cCt4PctImiJOkstFoXMh3O4ZO3TvKpZLgUzQSHAiaI/exec", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(response => response.text())
    .then(message => {
      // Muestra el mensaje de éxito
      const messageDiv = document.getElementById("message");
      messageDiv.textContent = message;
      messageDiv.style.display = "block";
      messageDiv.style.backgroundColor = "#e0f7fa"; // Color de fondo para éxito
      messageDiv.style.borderColor = "#00bcd4"; // Color del borde para éxito

      // Limpia el formulario después de enviar
      document.getElementById("contact-form").reset();

      // Oculta el mensaje después de 5 segundos
      setTimeout(() => {
        messageDiv.style.display = "none";
      }, 5000); // 5000 milisegundos = 5 segundos
    })
    .catch(error => {
      // Muestra el mensaje de error
      const messageDiv = document.getElementById("message");
      messageDiv.textContent = "Error al enviar el mensaje. Inténtalo de nuevo.";
      messageDiv.style.display = "block";
      messageDiv.style.backgroundColor = "#ffebee"; // Color de fondo para error
      messageDiv.style.borderColor = "#f44336"; // Color del borde para error

      // Oculta el mensaje después de 5 segundos
      setTimeout(() => {
        messageDiv.style.display = "none";
      }, 5000); // 5000 milisegundos = 5 segundos

    });
  });
