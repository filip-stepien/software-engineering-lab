import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;

class TrainingSessionTest {

    @Test
    void testTrainingSessionBuilder() {
        Client client = Client.builder()
                .id(1L)
                .firstName("Gustaw")
                .birthDate(new Date())
                .height(170L)
                .weight(80L)
                .build();

        TrainingSession trainingSession = TrainingSession.builder()
                .description("From noob to Giga-chad in 10 min")
                .startDate(new Date())
                .duration(10)
                .attendants(new ArrayList<>(Collections.singletonList(client)))
                .skillLevel(SkillLevel.NOOB)
                .trainer(Trainer.builder().id(2L).firstName("Ziutek").build())
                .build();

    }
}