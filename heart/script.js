const beat = document.querySelector('.beat');

function startHeartbeat() {
  beat.classList.add('heartbeat');
  beat.style.animation = 'heartbeat 1s ease-in-out infinite';
}

startHeartbeat();

function stopHeartbeat() {
    beat.classList.remove('heartbeat');
    beat.style.animation = '';
  }
  