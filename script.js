let step = 0;  // 0 = Крестик, 1 = Нолик

function slot(a) {
    let hod = document.getElementById('slot' + a).innerText;
    if (hod != "X") {
        if (hod != 'O') {
            if (step == 0) {
                document.getElementById('slot' + a).innerHTML = 'X';
                step = 1
            }
            else {
                step = 0
                document.getElementById('slot' + a).innerHTML = 'O';
            }
        }
        else {
            alert("Здесь нельзя сходитЬ!")
        }
    }
    else {
        alert("Здесь нельзя сходитЬ!")
    }
}