package pattern_diagrams.damian.main;

public class OutdoorGeneralExercise implements Exercise {
    private String name;
    private ExerciseDifficulty difficulty;
    private String description;
    private int duration;
    private String preferredTerrain;
    private String tutorialUrl;

    public OutdoorGeneralExercise(String name, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl) {
        this.name = name;
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
        return "Outdoor General Exercise: " + name + "\nDifficulty: " + difficulty + "\nDescription: " + description + "\nDuration: " + duration + " mins\nPreferred Terrain: " + preferredTerrain;
    }

    @Override
    public String getExerciseTutorialUrl() {
        return tutorialUrl;
    }
}