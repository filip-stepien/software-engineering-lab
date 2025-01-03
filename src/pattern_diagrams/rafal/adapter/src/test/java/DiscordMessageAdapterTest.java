import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DiscordMessageAdapterTest {
    static User user1;
    static User user2;

    static Message message;

    @BeforeAll
    static void setUp(){
        User.messageService = new DiscordMessageAdapter(new DiscordMessageService());

        user1 = new User(1L);
        user2 = new User(2L);
        message = new Message(user1, user2, "MSG_TITLE", "MSG_TEXT");
    }

    @Test
    void sendMessage() {
        assertTrue(User.sendMessage(message));
    }
}