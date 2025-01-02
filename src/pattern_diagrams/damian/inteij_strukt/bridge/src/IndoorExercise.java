public class IndoorExercise extends Exercise{
    private String name;

    public IndoorExercise(ExerciseType type, String name ) {
        this.exerciseType = type;
        this.name = name;
    }

    public String getExerciseDataSummary() {
        return name + ":\n " + " " + this.exerciseType.getDescription();
    }

    public String getExerciseTutorialUrl() {
        return this.exerciseType.getTutorialUrl();
    }
}
