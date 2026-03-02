export function initTracking() {
  const form = document.getElementById('tracking-form');
  const input = document.getElementById('tracking-input');
  const message = document.getElementById('tracking-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    
    input.classList.remove('error', 'success');
    message.textContent = '';
    message.style.color = '';

    if (!value) {
      input.classList.add('error');
      message.textContent = 'Please enter a valid tracking number.';
      message.style.color = 'red';
      return;
    }

    const btn = form.querySelector('.btn');
    const originalText = btn.textContent;
    btn.textContent = 'Tracking...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      
      if (value.length < 8) {
        input.classList.add('error');
        message.textContent = 'Tracking number not found. Please verify.';
        message.style.color = 'red';
      } else {
        input.classList.add('success');
        message.textContent = 'Shipment found! In transit to destination.';
        message.style.color = 'green';
      }
    }, 1000);
  });
}
