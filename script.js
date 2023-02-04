let amount = 0.000;



function clickable() {
    amount = amount + 0.001;
    document.getElementById('amount').innerHTML = amount.toFixed(3) + ' ₽';
}