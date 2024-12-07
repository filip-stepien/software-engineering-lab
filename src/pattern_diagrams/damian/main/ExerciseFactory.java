package pattern_diagrams.damian.main;

public interface ExerciseFactory {
    public Exercise createGeneralExercise(String name, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl);
    public Exercise createSportExercise(String name, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl, Sport sport);
}
