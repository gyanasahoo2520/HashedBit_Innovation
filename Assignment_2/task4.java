public class task4 {

    public static int findSumOfProducts(int n1, int n2) {
        int sum = 0;

        while (n1 > 0 || n2 > 0) {

            int digit1 = n1 % 10;
            int digit2 = n2 % 10;

            sum += digit1 * digit2;

            n1 /= 10;
            n2 /= 10;
        }

        return sum;
    }

    public static void main(String[] args) {

        int n1 = 25;
        int n2 = 34;

        int result = findSumOfProducts(n1, n2);
        System.out.println("The sum of products of corresponding digits is: " + result); // Output: 24
    }
}
