package pattern_diagrams.damian.main;

public class Main {
    public static void main(String[] args) {
        ExerciseFactory indoorFactory = new IndoorExerciseFactory();
        ExerciseFactory outdoorFactory = new OutdoorExerciseFactory();

        Exercise indoorGenEx1 = indoorFactory.createGeneralExercise("Yoga", ExerciseDifficulty.BEGINNER, "Relaxing indoor yoga session.", 30, "https://yogaUrl.com");
        Exercise indoorSportEx1 = indoorFactory.createSportExercise("Keepie ups", ExerciseDifficulty.INTERMEDIATE, "Keepie ups practice.", 20, "https://football.com", Sport.FOOTBALL);

        Exercise outdoorGenEx1 = outdoorFactory.createGeneralExercise("Jogging", ExerciseDifficulty.BEGINNER, "A simple outdoor jogging exercise.", 30, "https://example.com/outdoor-jogging");
        outdoorGenEx1.setPreferredTerrain("Grass");
        Exercise outdoorSportEx1 = outdoorFactory.createSportExercise("Football Practice", ExerciseDifficulty.ADVANCED, "Football drills and practice.", 60, "https://example.com/outdoor-football", Sport.FOOTBALL);
        outdoorSportEx1.setPreferredTerrain("Pavement");
        

        System.out.println("\n" + indoorGenEx1.getExerciseDataSummary());
        System.out.println(indoorGenEx1.getExerciseTutorialUrl());

        System.out.println("\n" + indoorSportEx1.getExerciseDataSummary());
        System.out.println(indoorSportEx1.getExerciseTutorialUrl());

        System.out.println("\n" + outdoorGenEx1.getExerciseDataSummary());
        System.out.println(outdoorGenEx1.getExerciseTutorialUrl());

        System.out.println("\n" + outdoorSportEx1.getExerciseDataSummary());
        System.out.println(outdoorSportEx1.getExerciseTutorialUrl());
    }
}