// ===== GENERAR COPOS DE NIEVE QUE CAEN =====
function createSnowflakes() {
    const snowflakes = '❅❆❄︎✻';
    for (let i = 0; i < 50; i++) {
      const snow = document.createElement('div');
      snow.className = 'snowflake';
      snow.innerHTML = snowflakes.charAt(Math.floor(Math.random() * snowflakes.length));
      
      // Posición horizontal aleatoria
      snow.style.left = Math.random() * 100 + 'vw';
      
      // Tamaño aleatorio
      const size = Math.random() * 1.5 + 0.5; // entre 0.5 y 2 rem
      snow.style.fontSize = size + 'rem';
      
      // Velocidad aleatoria (duración de la animación)
      const duration = Math.random() * 10 + 8; // entre 8 y 18 segundos
      snow.style.animationDuration = duration + 's';
      
      // Rotación inicial aleatoria
      snow.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      // Opacidad aleatoria
      snow.style.opacity = Math.random() * 0.7 + 0.3;
      
      // Añadir al body
      document.body.appendChild(snow);
    }
  }
  
  // Iniciar copos al cargar
  document.addEventListener('DOMContentLoaded', createSnowflakes);
  
  // ===== BARRA DE CARGA REALISTA =====
  const progress = document.querySelector('.loader-progress');
  let width = 0;
  
  const interval = setInterval(() => {
    const increase = Math.random() * 2 + 0.3;
    width = Math.min(width + increase, 100);
    progress.style.width = width + '%';
  
    if (width >= 100) {
      clearInterval(interval);
      // Opcional: campanada al final 🛎️
      // setTimeout(() => {
      //   const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-small-1.mp3');
      //   audio.volume = 0.3;
      //   audio.play();
      // }, 500);
    }
  }, 400);