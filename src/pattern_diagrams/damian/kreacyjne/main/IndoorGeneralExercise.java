package pattern_diagrams.damian.main;

public class IndoorGeneralExercise implements Exercise {
    private String name;
    private ExerciseDifficulty difficulty;
    private String description;
    private int duration;
    private String tutorialUrl;

    public IndoorGeneralExercise(String name, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl) {
        this.name = name;
        this.difficulty = difficulty;
        this.description = description;
        this.duration = duration;
        this.tutorialUrl = tutorialUrl;
    }

    @Override
    public String getExerciseDataSummary() {
        return "Indoor General Exercise: " + name + "\nDifficulty: " + difficulty + "\nDescription: " + description + "\nDuration: " + duration + " mins";
    }

    @Override
    public String getExerciseTutorialUrl() {
        return tutorialUrl;
    }
}