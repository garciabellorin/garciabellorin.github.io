function calcTip() {
	var subtotalElem = document.getElementById('subtotal').value;
	var tipElem = document.getElementById('tip').value;
	var totalElem = document.getElementById('total');
	// var subtotal = subtotalElem.value;
	// var tip = tipElem.value;
	// var total = (1 + tip / 100) * subtotal * 1.00;
    var total = (tipElem / 100) * subtotalElem;
	totalElem.innerHTML = '$' + total;
}