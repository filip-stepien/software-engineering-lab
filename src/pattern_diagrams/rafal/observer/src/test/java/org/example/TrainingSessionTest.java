package org.example;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;


import static org.example.SkillLevel.NOOB;
import static org.junit.jupiter.api.Assertions.*;

class TrainingSessionTest {

    static TrainingSession trainingSession;
    static Client client;

    @BeforeEach
    void setUp(){
        client = Client.builder()
                .id(1L)
                .firstName("Gustaw")
                .birthDate(new Date())
                .height(170L)
                .weight(80L)
                .build();

        trainingSession = TrainingSession.builder()
                .description("From noob to Giga-chad in 10 min")
                .startDate(new Date())
                .duration(10)
                .attendants(new ArrayList<>(Collections.singletonList(client)))
                .skillLevel(NOOB)
                .trainer(Trainer.builder().id(2L).firstName("Ziutek").build())
                .build();
    }

    @org.junit.jupiter.api.Test
    void addObserver() {
        trainingSession.addObserver(client);
    }

    @org.junit.jupiter.api.Test
    void removeObserver() {
    }

    @org.junit.jupiter.api.Test
    void cancel() {
        trainingSession.addObserver(client);
        trainingSession.cancel();

    }
}