class task2 {

    public static double calculate(double num1, double num2, char operator) {
        double result = 0.0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    System.out.println("Error: Division by zero is not allowed.");
                    return Double.NaN; // Return NaN to indicate an error
                }
                break;
            default:
                System.out.println("Error: Invalid operator. Please use +, -, *, or /.");
                return Double.NaN; // Return NaN to indicate an error
        }

        return result;
    }

    public static void main(String[] args) {
        // Example usage
        double num1 = 10.0;
        double num2 = 5.0;

        System.out.println("Addition: " + calculate(num1, num2, '+'));
        System.out.println("Subtraction: " + calculate(num1, num2, '-'));
        System.out.println("Multiplication: " + calculate(num1, num2, '*'));
        System.out.println("Division: " + calculate(num1, num2, '/'));
    }
}
