var input = ["payment", "talents", "manager", "managerPayment", "car", "petrol", "toll", "others"];
var value = [0, 0, 0, 0, 0, 0, 0, 0];

var update = function(arg) {
	for(var i=0; i<input.length; i++) {
	 	if(arg.name == input[i]) {
	 		value[i] = arg.value;
	 	}
	}
}

var process = function() {
	for(var i=0; i<input.length; i++) {
		debug(input[i] + " -> " + value[i]);
	}

	var logistics = valueOf("car") + valueOf("petrol") + valueOf("toll");
	var payment = valueOf("payment") - logistics - (valueOf("manager")*valueOf("managerPayment")) - valueOf("others");
	var finalPayment = payment * 0.65;
	var paymentPerManager = valueOf("managerPayment");
	var paymentPerTalent = finalPayment/valueOf("talents");
	var companyProfit = payment * 0.35;
	if(paymentPerTalent <= 50) {
		paymentPerTalent = payment/valueOf("talents");
		companyProfit = 0;
	}

	display(logistics, paymentPerTalent, paymentPerManager, companyProfit);
}

var display = function(arg0, arg1, arg2, arg3) {
	document.getElementById("forms").className = "hide-for-small-up";
	document.getElementById("result").className = "row";
	document.getElementById("payment").innerHTML = "RM" + toDouble(valueOf("payment"));
	document.getElementById("logistic").innerHTML = "RM" + toDouble(arg0);
	document.getElementById("others").innerHTML = "RM" + toDouble(valueOf("others"));
	document.getElementById("perTalent").innerHTML = "RM" + toDouble(arg1);
	document.getElementById("perManager").innerHTML = "RM" + toDouble(arg2);
	document.getElementById("profit").innerHTML = "RM" + toDouble(arg3);
}

var toDouble = function(arg) {
	return parseFloat(Math.round(arg * 100) / 100).toFixed(2);
}

var valueOf = function(arg) {
	for(var i=0; i<input.length; i++) {
		if(arg == input[i]) return parseInt(value[i]);
	}

	return -1;
}

var debug = function(arg) {
	console.log(arg);
}