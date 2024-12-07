package pattern_diagrams.damian.main;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ExerciseFactoryTest {

    @Test
    void testIndoorExerciseFactory() {
        ExerciseFactory indoorFactory = new IndoorExerciseFactory();

        Exercise indoorGenEx = indoorFactory.createGeneralExercise("Yoga", ExerciseDifficulty.BEGINNER, "Relaxing indoor yoga session.", 30, "https://yogaUrl.com");
        Exercise indoorSportEx = indoorFactory.createSportExercise("Keepie ups", ExerciseDifficulty.INTERMEDIATE, "Keepie ups practice.", 20, "https://football.com", Sport.FOOTBALL);

        assertNotNull(indoorGenEx);
        assertEquals("Yoga", indoorGenEx.getExerciseDataSummary().contains("Yoga") ? "Yoga" : null);
        assertEquals("https://yogaUrl.com", indoorGenEx.getExerciseTutorialUrl());

        assertNotNull(indoorSportEx);
        assertEquals("Keepie ups", indoorSportEx.getExerciseDataSummary().contains("Keepie ups") ? "Keepie ups" : null);
        assertEquals("https://football.com", indoorSportEx.getExerciseTutorialUrl());
    }

    @Test
    void testOutdoorExerciseFactory() {
        ExerciseFactory outdoorFactory = new OutdoorExerciseFactory();

        Exercise outdoorGenEx = outdoorFactory.createGeneralExercise("Jogging", ExerciseDifficulty.BEGINNER, "A simple outdoor jogging exercise.", 30, "https://example.com/outdoor-jogging");
        Exercise outdoorSportEx = outdoorFactory.createSportExercise("Football Practice", ExerciseDifficulty.ADVANCED, "Football drills and practice.", 60, "https://example.com/outdoor-football", Sport.FOOTBALL);

        assertNotNull(outdoorGenEx);
        assertTrue(outdoorGenEx.getExerciseDataSummary().contains("Jogging"));
        assertEquals("https://example.com/outdoor-jogging", outdoorGenEx.getExerciseTutorialUrl());

        assertNotNull(outdoorSportEx);
        assertTrue(outdoorSportEx.getExerciseDataSummary().contains("Football Practice"));
        assertEquals("https://example.com/outdoor-football", outdoorSportEx.getExerciseTutorialUrl());
    }
}
