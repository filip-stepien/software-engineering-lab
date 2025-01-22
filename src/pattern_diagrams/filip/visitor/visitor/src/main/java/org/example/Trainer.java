package org.example;

import org.example.Visitor;
import org.example.Worker;

public class Trainer extends Worker {
    private String expertise;

    public Trainer(String firstName, String lastName, String email, String expertise, float salary) {
        super(firstName, lastName, email, "Training", salary);
        this.expertise = expertise;
    }

    public String getExpertise() {
        return expertise;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visitTrainer(this);
    }
}