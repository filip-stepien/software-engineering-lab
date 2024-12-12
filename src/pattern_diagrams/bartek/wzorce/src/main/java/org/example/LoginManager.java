package org.example;
public class LoginManager {

    private static LoginManager instance;

    private LoginManager() {
    }

    public static LoginManager getInstance() {
        if (instance == null) {
            synchronized (LoginManager.class) {
                if (instance == null) {
                    instance = new LoginManager();
                }
            }
        }
        return instance;
    }

    public User authenticate(String login, String password) {
        // Logic for authentication
        System.out.println("Authenticating user: " + login);
        return new User(login); // Example return
    }

    public boolean logout(User user) {
        // Logic for logout
        System.out.println("Logging out user: " + user.getLogin());
        return true;
    }

    public boolean isLoggedIn(User user) {
        // Logic to check if a user is logged in
        System.out.println("Checking if user is logged in: " + user.getLogin());
        return false; // Example return
    }
}

