function findTax(salary) {
    let tax = 0;

    switch (true) {
        case salary > 0 && salary <= 500000:
            tax = 0; // 0% tax
            break;
        case salary > 500000 && salary <= 1000000:
            tax = salary * 0.10; // 10% tax
            break;
        case salary > 1000000 && salary <= 1500000:
            tax = salary * 0.20; // 20% tax
            break;
        case salary > 1500000:
            tax = salary * 0.30; // 30% tax
            break;
        default:
            console.log("Invalid salary input.");
            return null; // Return null for invalid inputs
    }

    return tax;
}

console.log("Tax for salary 400000:", findTax(400000)); // 0
console.log("Tax for salary 800000:", findTax(800000)); // 80000
console.log("Tax for salary 1200000:", findTax(1200000)); // 240000
console.log("Tax for salary 2000000:", findTax(2000000)); // 600000
console.log("Tax for invalid salary:", findTax(-5000)); // Invalid salary input
