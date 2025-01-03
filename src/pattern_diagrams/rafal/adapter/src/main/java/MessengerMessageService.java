public class MessengerMessageService {

    public boolean sendMessage(Long userId, Long to, String title, String content) {
        System.out.printf("%s from %s to %s titled: %s content: %s\n", this.getClass().getName(), userId.toString(),
                to.toString(), title, content);
        return true;
    }
}
