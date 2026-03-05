document.addEventListener('DOMContentLoaded', () => {
    const orderData = JSON.parse(localStorage.getItem('current_order'));
    if (!orderData) { window.location.href = 'index.html'; return; }

    document.getElementById('res-id').innerText = orderData.id;
    document.getElementById('res-item').innerText = orderData.item.toUpperCase();
    document.getElementById('res-method').innerText = orderData.method.toUpperCase();

    if (orderData.method === 'qris') {
        document.getElementById('qr-container').style.display = 'block';
        document.getElementById('qr-img').src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PAY-${orderData.id}`;
    }

    document.getElementById('btn-confirm').addEventListener('click', () => {
        const text = `Halo Admin, saya mau konfirmasi topup FF:%0AID: ${orderData.id}%0AItem: ${orderData.item}%0AMetode: ${orderData.method}`;
        window.open(`https://wa.me/6289507725699?text=${text}`, '_blank');
    });
});
