import org.example.LoginManager;
import org.example.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class LoginManagerTest {

    private LoginManager loginManager;

    @BeforeEach
    void setUp() {
        loginManager = LoginManager.getInstance();
    }

    @Test
    void testAuthenticate() {
        User user = loginManager.authenticate("testUser", "password");
        assertNotNull(user);
        assertEquals("testUser", user.getLogin());
    }

    @Test
    void testLogout() {
        User user = new User("testUser");
        boolean result = loginManager.logout(user);
        assertTrue(result);
    }

    @Test
    void testIsLoggedIn() {
        User user = new User("testUser");
        boolean result = loginManager.isLoggedIn(user);
        assertFalse(result); // Adjust based on your logic
    }
}
