package org.example;

import org.example.Client;
import org.example.Trainer;
import org.example.Worker;

public interface Visitor {
    void visitClient(Client client);
    void visitWorker(Worker worker);
    void visitTrainer(Trainer trainer);
}