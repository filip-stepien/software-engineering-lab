package pattern_diagrams.damian.main;

public class IndoorSportExercise implements Exercise {
    private String name;
    private ExerciseDifficulty difficulty;
    private String description;
    private int duration;
    private String tutorialUrl;
    private Sport sport;

    public IndoorSportExercise(String name, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl, Sport sport) {
        this.name = name;
        this.difficulty = difficulty;
        this.description = description;
        this.duration = duration;
        this.tutorialUrl = tutorialUrl;
        this.sport = sport;
    }

    @Override
    public String getExerciseDataSummary() {
        return "Indoor Sport Exercise: " + name + "\nSport: " + sport + "\nDifficulty: " + difficulty + "\nDescription: " + description + "\nDuration: " + duration + " mins";
    }

    @Override
    public String getExerciseTutorialUrl() {
        return tutorialUrl;
    }
}
