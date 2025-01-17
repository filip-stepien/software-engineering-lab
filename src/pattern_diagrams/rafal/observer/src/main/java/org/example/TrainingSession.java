package org.example;

import lombok.Builder;
import lombok.Getter;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Builder
@Getter
public class TrainingSession {
    Date startDate;
    String description;
    float duration;
    SkillLevel skillLevel;
    List<Client> attendants;
    boolean isCancelled;
    Trainer trainer;


    @Builder.Default
    Set<TrainingSessionSubscriber> subscribers = new HashSet<>() ;
    void addObserver(TrainingSessionSubscriber subscriber) {
        subscribers.add(subscriber);
    }

    void removeObserver(TrainingSessionSubscriber subscriber) {
        subscribers.remove(subscriber);
    }


    public void cancel(){
        isCancelled = true;
        for (TrainingSessionSubscriber subscriber : subscribers) {
            subscriber.trainingSessionCancelled(this);
        };
    }
}