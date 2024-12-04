import lombok.Builder;
import lombok.Data;

import java.util.*;

@Builder
@Data
public class TrainingSession {
    Date startDate;
    String description;
    float duration;
    SkillLevel skillLevel;
    List<Client> attendants;
    boolean isCancelled;
    Trainer trainer;


    public static void main(String[] args) {

        Client client = Client.builder()
                .id(1L)
                .firstName("Gustaw")
                .birthDate(new Date())
                .height(170L)
                .weight(80L)
                .build();

        System.out.println(client);


        TrainingSession trainingSession = TrainingSession.builder()
                .description("From noob to Giga-chad in 10 min")
                .startDate(new Date())
                .duration(10)
                .attendants(new ArrayList<>(Collections.singletonList(client)))
                .skillLevel(SkillLevel.NOOB)
                .trainer(Trainer.builder().id(2L).firstName("Ziutek").build())
                .build();

        System.out.println(trainingSession);
    }
}
