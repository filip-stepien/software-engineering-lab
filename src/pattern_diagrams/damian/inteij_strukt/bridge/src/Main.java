import java.io.Console;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        ExerciseType type1 = new SportExercise(Type.SPORT, "Keepie ups",
                ExerciseDifficulty.INTERMEDIATE,
                "Keepie ups practice.",
                20,
                "https://football.com",
                Sport.FOOTBALL);

        ExerciseType type2 = new GeneralExercise(Type.GENERAL,
                "Jogging",
                ExerciseDifficulty.BEGINNER,
                "A simple outdoor jogging exercise.",
                30,
                "https://example.com/outdoor-jogging");

        IndoorExercise ex1 = new IndoorExercise(type1, "Indoor Keepie ups");
        OutdoorExercise ex2 = new OutdoorExercise(type2, "Outdoor jogging", "Pavement");

        System.out.println(ex1.getExerciseDataSummary());
        System.out.println(ex2.getExerciseDataSummary());
    }
}