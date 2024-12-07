package pattern_diagrams.damian.main;

public class OutdoorSportExercise implements Exercise {
    private String name;
    private Sport sport;
    private ExerciseDifficulty difficulty;
    private String description;
    private int duration;
    private String preferredTerrain;
    private String tutorialUrl;

    public OutdoorSportExercise(String name, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl, Sport sport) {
        this.name = name;
        this.sport = sport;
        this.difficulty = difficulty;
        this.description = description;
        this.duration = duration;
        this.preferredTerrain = null;
        this.tutorialUrl = tutorialUrl;
    }

    public void setPreferredTerrain(String terrain){
        this.preferredTerrain = terrain;
    }

    @Override
    public String getExerciseDataSummary() {
        return "Outdoor Sport Exercise: " + name + "\nSport: " + sport + "\nDifficulty: " + difficulty + "\nDescription: " + description + "\nDuration: " + duration + " mins\nPreferred Terrain: " + preferredTerrain;
    }

    @Override
    public String getExerciseTutorialUrl() {
        return tutorialUrl;
    }
}