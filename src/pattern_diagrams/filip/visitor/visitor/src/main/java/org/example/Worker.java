package org.example;

import org.example.User;
import org.example.Visitor;

public class Worker extends User {
    private String department;
    private float salary;

    public Worker(String firstName, String lastName, String email, String department, float salary) {
        super(firstName, lastName, email);
        this.department = department;
        this.salary = salary;
    }

    public String getDepartment() {
        return department;
    }

    public float getSalary() {
        return salary;
    }

    @Override
    public void accept(Visitor visitor) {
        visitor.visitWorker(this);
    }
}