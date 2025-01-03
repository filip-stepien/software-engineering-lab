import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
public class Message {
    @Setter
    User from;
    User to;
    String title;
    String content;
}