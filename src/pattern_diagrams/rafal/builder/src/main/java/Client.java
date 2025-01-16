
import lombok.Builder;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

import java.util.Date;



@SuperBuilder
@ToString(callSuper = true)
public class Client extends User {
    Long weight;
    Long height;
    Date birthDate;
}
