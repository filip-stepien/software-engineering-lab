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

}
