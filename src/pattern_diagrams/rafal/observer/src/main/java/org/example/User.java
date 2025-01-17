package org.example;

import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Data
@RequiredArgsConstructor
@SuperBuilder
@ToString
public class User implements TrainingSessionSubscriber {
    Long id;
    String firstName;

    static boolean sendMessage(Message message) {
        System.out.println(message);
        return true;
    }

    @Override
    public void trainingSessionCancelled(TrainingSession trainingSession) {
        sendMessage(new Message(User.builder().firstName("System").id(1000L).build(), this,
                "TrainingSession cancelled " +  trainingSession.startDate.toString(), trainingSession.description));

    }
}
