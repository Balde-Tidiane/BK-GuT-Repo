import java.util.Random;

public class RandomNumberGenerator {
    public static void main(String[] args) {
        // Erstelle ein Random-Objekt
        Random random = new Random();
        
        // Generiere und zeige 10 Zufallszahlen zwischen 0 (inklusive) und 100 (exklusive)
        for (int i = 0; i < 10; i++) {
            int randomNumber = random.nextInt(100); // Ändere die 100, um den maximalen Wert anzupassen
            System.out.println("Zufallszahl " + (i + 1) + ": " + randomNumber);
        }
    }
}
