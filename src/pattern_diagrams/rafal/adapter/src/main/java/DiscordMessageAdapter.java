import lombok.AllArgsConstructor;

@AllArgsConstructor
public class DiscordMessageAdapter implements MessageService{
    DiscordMessageService service;

    @Override
    public boolean sendMessage(Message message) {
        String content = String.format("**%s** %s", message.title, message.content);
        return  service.sendMessage(message.from.id, message.to.id, content);
    }
}
