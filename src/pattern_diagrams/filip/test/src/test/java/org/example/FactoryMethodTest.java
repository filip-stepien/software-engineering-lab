package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class FactoryMethodTest {
    @Test
    public void testFactoryMethod() {

        Worker worker = new Worker();
        Membership standard = worker.createMembership(MembershipType.STANDARD);
        Membership premium = worker.createMembership(MembershipType.PREMIUM);
        Membership multisport = worker.createMembership(MembershipType.MULTI_SPORT);

        assertTrue(standard instanceof StandardMembership);
        assertTrue(premium instanceof PremiumMembership);
        assertTrue(multisport instanceof MultisportMembership);
    }
}
