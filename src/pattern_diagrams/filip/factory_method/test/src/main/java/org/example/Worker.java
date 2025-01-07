package org.example;

public class Worker {
    public Membership createMembership(MembershipType type) {
        return switch (type) {
            case STANDARD -> new StandardMembership();
            case PREMIUM -> new PremiumMembership();
            case MULTI_SPORT -> new MultisportMembership();
        };
    }
}
