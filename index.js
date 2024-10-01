// Webdeveloper Maintenance

var developer = {
    fullName: "Rubab Ansari",
    course: "WebDevelopment",
    monthlyFees: 1000,
    EstablishmentFees: 500,

    studentMaintenanceCharges: function () {
        var maintenanceCharges = 0;

        for (var i = 0; i < 12; i++) {
            var monthlyCharge = this.monthlyFees;
            if (this.EstablishmentFees) {
                monthlyCharge += this.EstablishmentFees;
            }

            maintenanceCharges += monthlyCharge;
        }

        return maintenanceCharges;
    }
}

var developerAnnualCharges = developer.studentMaintenanceCharges();
console.log("Developer Maintenance charges is :", developerAnnualCharges);

//   Annual Charges of Raza
var student = {
    fullName: "Raza",
    age: 10,
    MonthlyFees: 2000,
    EstablishmentFees: 500,

    // Function to get annual charges of Raza
    razaAnnualCharges: function () {
        var annualCharges = 0;

        for (var i = 0; i < 12; i++) {
            var monthlyCharge = this.MonthlyFees;
            if (this.EstablishmentFees) {
                monthlyCharge += this.EstablishmentFees;
            }

            annualCharges += monthlyCharge;
        }

        return annualCharges;
    }
}

var schoolAnnualCharges = student.razaAnnualCharges();
console.log("Raza Annual charges is :", schoolAnnualCharges);

// book Example Plane1
var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [5, 6]
};

function calcAnnual() {
    var bestPrice = plan1.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < plan1.discountMonths.length; i++) {
        if (plan1.discountMonths[i] === thisMo) {
            bestPrice = plan1.price * .8;
            break;
        }
    }
    return bestPrice * 12;
}

var discount = calcAnnual();
console.log("Special Discount plane 1:", discount);


// Book Example plane2
function calcAnnual(percentIfDisc) {
    var bestPrice = plan1.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < plan1.discountMonths.length; i++) {
        if (plan1.discountMonths[i] === thisMo) {
            bestPrice = plan1.price * percentIfDisc;
            break;
        }
    }
    return bestPrice * 12;
}

var annualPrice = calcAnnual(.85);
console.log("Special Discount plane 2: ", annualPrice);

// Book Example plane 3
var plan3 = {
    fruit: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7],
    calcAnnual: function (percentIfDisc) {
        var bestPrice = plan1.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < plan1.discountMonths.length; i++) {
            if (plan1.discountMonths[i] === thisMo) {
                bestPrice = plan1.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    }
};

var bookExample = plan3.calcAnnual();
console.log("Special Discount plane 3: ", bookExample);






