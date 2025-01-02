
public class GeneralExercise implements ExerciseType{
    private Type type;
    private String name;
    private ExerciseDifficulty difficulty;
    private String description;
    private int duration;
    private String tutorialUrl;

    public String getName() {
        return name;
    }

    public ExerciseDifficulty getDifficulty() {
        return difficulty;
    }

    public int getDuration() {
        return duration;
    }

    public String getTutorialUrl() {
        return tutorialUrl;
    }

    public GeneralExercise(Type type, String name, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl) {
        this.type = type;
        this.name = name;
        this.difficulty = difficulty;
        this.description = description;
        this.duration = duration;
        this.tutorialUrl = tutorialUrl;
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