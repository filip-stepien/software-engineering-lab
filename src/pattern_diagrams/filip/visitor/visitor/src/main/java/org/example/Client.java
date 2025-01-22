package org.example;

import org.example.User;
import org.example.Visitor;

public class Client extends User {
    private float weight;
    private float height;

    public Client(String firstName, String lastName, String email, float weight, float height) {
        super(firstName, lastName, email);
        this.weight = weight;
        this.height = height;
    }

    public float getWeight() {
        return weight;
    }

    public float getHeight() {
        return height;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visitClient(this);
    }
}