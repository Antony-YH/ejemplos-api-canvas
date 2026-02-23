# 🎨 Proyecto Canvas - Ejemplos de Figuras 2D utilizando API Canvas

Este proyecto muestra el uso del elemento `<canvas>` de HTML5 para dibujar figuras utilizando JavaScript.

Incluye:

- Rectángulos con esquinas redondeadas
- Figuras personalizadas
- Un personaje estilo Pac-Man
- Uso de curvas Bézier
- Uso de arcos y formas básicas

---

## 📂 Estructura del Proyecto

/proyecto
│── index.html
│── style.css (opcional)
│── script.js
│── README.md

---

## 🚀 Cómo Ejecutar el Proyecto

1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. El canvas se renderizará automáticamente.

No requiere instalación de dependencias.

---

## 🖌️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- API Canvas 2D

---

## 🧠 ¿Qué Hace el Código?

El archivo `main.js`:

- Obtiene el elemento canvas.
- Usa el contexto 2D (`getContext("2d")`).
- Dibuja formas utilizando:
  - `arc()`
  - `fillRect()`
  - `bezierCurveTo()`
  - `arcTo()`
- Implementa una función auxiliar `roundedRect()` para crear rectángulos con esquinas redondeadas.
- Posiciona las figuras usando coordenadas X e Y.
- Utiliza desplazamiento (`dx`, `dy`) para mover el dibujo a otra posición sin modificar la lógica original.

---

## 📌 Función Destacada

### roundedRect(ctx, x, y, width, height, radius)

Permite dibujar un rectángulo con esquinas redondeadas utilizando `arcTo()`.

---

## 🎮 Pac-Man

El personaje estilo Pac-Man se dibuja usando:

- `arc()` para el cuerpo
- `lineTo()` para la boca
- `bezierCurveTo()` para detalles
- Cambios de `fillStyle` para ojos y detalles

---

## 🛠️ Posibles Mejoras

- Animación con `requestAnimationFrame()`
- Movimiento del personaje
- Interacción con teclado
- Colisiones
- Agregar fantasmas

---

## 👨‍💻 Autor

Proyecto realizado como práctica del uso de Canvas en JavaScript.

---

## 📜 Licencia

Uso libre para fines educativos.