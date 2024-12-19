package pattern_diagrams.damian.main;

public class IndoorExerciseFactory implements ExerciseFactory {
    @Override
    public Exercise createGeneralExercise(String name, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl) {
        return new IndoorGeneralExercise(name, difficulty, description, duration, tutorialUrl);
    }

    @Override
    public Exercise createSportExercise(String name, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl, Sport sport) {
        return new IndoorSportExercise(name, difficulty, description, duration, tutorialUrl, sport);
    }
}