class Main {
    public static void main(String[] args) {}

    public static int factorial(int n) {
        if (n < 3) {
            return n;
        }

        return n * factorial(n - 1);
    }
}
