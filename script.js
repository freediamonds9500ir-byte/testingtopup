document.addEventListener('DOMContentLoaded', () => {
    const mainForm = document.getElementById('topup-form');

    if (mainForm) {
        mainForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const orderData = {
                id: document.getElementById('player_id').value,
                wa: document.getElementById('whatsapp').value,
                item: document.querySelector('input[name="nominal"]:checked').value,
                method: document.querySelector('input[name="payment"]:checked').value
            };
            localStorage.setItem('current_order', JSON.stringify(orderData));
            
            // Animasi Fade Out sebelum pindah halaman
            document.body.style.opacity = '0';
            document.body.style.transition = '0.5s';
            setTimeout(() => {
                window.location.href = 'form.html'; // Path relatif untuk Netlify
            }, 500);
        });
    }
});
