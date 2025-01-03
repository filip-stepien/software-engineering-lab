import lombok.AllArgsConstructor;

@AllArgsConstructor
public class MessengerMessageAdapter implements  MessageService{
    MessengerMessageService messengerMessageService;

    @Override
    public boolean sendMessage(Message message) {
        return messengerMessageService.sendMessage(message.from.id, message.to.id, message.title, message.title);
    }
}
