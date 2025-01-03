import lombok.AllArgsConstructor;

@AllArgsConstructor
public class User {
    static MessageService messageService;

    Long id;

    static boolean sendMessage(Message message) {
        messageService.sendMessage(message);
        return true;
    }

}
