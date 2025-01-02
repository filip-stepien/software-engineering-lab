public class OutdoorExercise extends Exercise{
    private String name;
    private String preferredTerrain;

    public OutdoorExercise(ExerciseType type,String name, String preferredTerrain) {
        this.exerciseType = type;
        this.name = name;
        this.preferredTerrain = preferredTerrain;
    }

    public String getPreferredTerrain() {
        return preferredTerrain;
    }

    public String getExerciseDataSummary() {
        return name + ":\n " + " " + this.exerciseType.getDescription();
    }

    public String getExerciseTutorialUrl() {
        return this.exerciseType.getTutorialUrl();
    }
}
