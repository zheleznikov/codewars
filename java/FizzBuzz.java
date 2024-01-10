import java.io.ByteArrayOutputStream;
import java.io.PrintStream;


/**
 * Реализуйте метод fizzBuzz(), который выводит на экран числа в диапазоне от begin до end включительно.
 * <p>
 * При этом:
 * - Если число делится без остатка на 3, то вместо него выводится слово Fizz
 * - Если число делится без остатка на 5, то вместо него выводится слово Buzz
 * - Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
 * - В остальных случаях выводится само число
 * <p>
 * Метод принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно).
 * Если диапазон пуст (в случае, когда begin > end), то метод просто ничего не печатает.
 */
public class FizzBuzz {


    /**
     * Тестовые данные
     * <p>
     * Положительный кейс. Есть и fizz и buzz b fizz buzz
     * 1. 1 - 16 ->
     * String expected1 = "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16";
     * <p>
     * 2. 3 - 3 ->
     * String expected2 = "Fizz";
     * <p>
     * 3. 30 - 30 ->
     * String expected3 = "FizzBuzz";
     * <p>
     * 4. 0 - 0 -> "FizzBuzz"
     * String expected4 = "FizzBuzz";
     * <p>
     * 5. 1 - 0 -> пустое значение
     * String expected5 = "";
     * <p>
     * 6. -15 - 15 ->
     * String expected6 = "FizzBuzz-14-13Fizz-11BuzzFizz-8-7FizzBuzz-4Fizz-2-1FizzBuzz12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz";
     */

    public static void main(String args[]) {
        String expected1 = "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16";
        startTest(1, 16, expected1);

        String expected2 = "Fizz";
        startTest(3, 3, expected2);

        String expected3 = "FizzBuzz";
        startTest(30, 30, expected3);

        String expected4 = "FizzBuzz";
        startTest(0, 0, expected4);

        String expected5 = "";
        startTest(1, 0, expected5);

        String expected6 = "FizzBuzz-14-13Fizz-11BuzzFizz-8-7FizzBuzz-4Fizz-2-1FizzBuzz12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz";
        startTest(-15, 15, expected6);

    }


    private static void fizzBuzz(int begin, int end) {

        for (int i = begin; i <= end; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.print("FizzBuzz");

            } else if (i % 3 == 0) {
                System.out.print("Fizz");

            } else if (i % 5 == 0) {
                System.out.print("Buzz");

            } else {
                System.out.print(i);
            }
        }

    }

    private static void fizzBuzzAdvanced(int begin, int end) {

        for (int i = begin; i <= end; i++) {

            boolean hasFizz = i % 3 == 0;
            boolean hasBuzz = i % 5 == 0;

            String fizzPart = hasFizz ? "Fizz" : "";
            String buzzPart = hasBuzz ? "Buzz" : "";

            if (hasFizz || hasBuzz) {
                System.out.print(fizzPart + buzzPart);
            } else {
                System.out.print(i);
            }
        }

    }

    private static void startTest(int begin, int end, String expected) {
        PrintStream standardOut = System.out;

        ByteArrayOutputStream out = new ByteArrayOutputStream();
        System.setOut(new PrintStream(out));

        fizzBuzz(begin, end);
//        fizzBuzzAdvanced(begin, end);

        String actual = out.toString().trim();

        System.setOut(standardOut);


        if (!expected.equals(actual)) {
            System.out.println("Test did not pass. Begin: " + begin + " End: " + end);
            System.out.println("Expected: " + expected + " but was: " + actual);
        } else {
            System.out.println("Test passed. Begin: " + begin + " End: " + end);
        }
    }

}