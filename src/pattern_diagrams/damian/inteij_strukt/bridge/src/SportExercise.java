public class SportExercise implements ExerciseType{
    private Type type;
    private String name;
    private Sport sport;
    private ExerciseDifficulty difficulty;
    private String description;
    private int duration;
    private String preferredTerrain;
    private String tutorialUrl;

    public String getName() {
        return name;
    }

    public Sport getSport() {
        return sport;
    }

    public ExerciseDifficulty getDifficulty() {
        return difficulty;
    }

    public int getDuration() {
        return duration;
    }

    public String getPreferredTerrain() {
        return preferredTerrain;
    }

    public String getTutorialUrl() {
        return tutorialUrl;
    }

    public SportExercise(Type type, String name, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl, Sport sport) {
        this.type = type;
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
    public Type getType() {
        return type;
    }

    @Override
    public String getDescription() {
        return description;
    }
}