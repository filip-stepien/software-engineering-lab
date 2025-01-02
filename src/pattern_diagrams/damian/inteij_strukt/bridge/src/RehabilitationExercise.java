public class RehabilitationExercise implements ExerciseType{
    private Type type;
    private String name;
    private boolean AssistanceNeeded;
    private ExerciseDifficulty difficulty;
    private String description;
    private int duration;
    private String tutorialUrl;

    public String getName() {
        return name;
    }

    public boolean isAssistanceNeeded() {
        return AssistanceNeeded;
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

    public RehabilitationExercise(Type type, String name, boolean assistanceNeeded, ExerciseDifficulty difficulty, String description, int duration, String tutorialUrl) {
        this.type = type;
        this.name = name;
        AssistanceNeeded = assistanceNeeded;
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
