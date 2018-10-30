// objects with methods


// alert("Objects methods")
// var employee = new Object;
// // var employee={}; //common way
// document.write(Object.getOwnPropertyNames(employee));

// employee={
// 	empId       : 386364,
// 	empName     : "Rajith Kumar",
// 	hoursWorked : 35,
// 	overTime 	: 5,
// 	wages		: function() {
// 		this.wages=(this.hoursWorked*16.75) + (this.overTime*33.50);
// 		return this.wages;
// 	}

// };
// document.write("<br> Employee ID:" + employee.empId);
// document.write("<br> Employee Name:" + employee.empName);
// document.write("<br> Employee Normal Hours worked:" + employee.hoursWorked);
// document.write("<br> Employee Over Time Worked:" + employee.overTime);
// document.write("<br> Employee Total Hour worked:" + employee.wages());





// car example
var car = new Object;

car={
	regNo       : "EMH416",
	model     	 : "VW GTI 2006",
	type 		 : "EMH416",
	engine 		 : "Petrol",
	move    		: function() {
	var car =document.getElementById("car");
	var start =0;
	speed =setInterval(move, 3);
	function move() {
		if (start >= 1600) {
			start = 0;
		} else {
			start++;
			car.style.left=start + "px";
		}
	}
}
};

document.write("<br> Car REG:" + car.regNo);
document.write("<br> Car Model:" + car.model);
document.write("<br> Car Type:" + car.type);
document.write("<br> Car engine Type:" + car.engine);
document.write(car.move());
var speed;
/*function moveCar() {
	var car =document.getElementById("car");
	var start =0;
	speed =setInterval(move, 3);
	function move() {
		if (start >= 1600) {
			start = 0;
		} else {
			start++;
			car.style.left=start + "px";
		}
	}
}*/

function stopCar() {
	clearInterval(speed);
	alert("Stopped!");
}

