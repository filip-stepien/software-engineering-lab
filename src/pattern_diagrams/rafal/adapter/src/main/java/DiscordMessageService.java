public class DiscordMessageService {
    boolean sendMessage(Long from, Long to, String message) {
        System.out.printf("%s from %s to %s content: %s\n", this.getClass().getName(), from.toString(),
                to.toString(), message);
        return true;
    }
}
