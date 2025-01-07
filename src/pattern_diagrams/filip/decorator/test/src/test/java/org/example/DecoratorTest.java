package org.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class DecoratorTest {
    @Test
    public void testDecorator() {
        Membership membership = new GroupExercisesMembershipDecorator(
            new PoolAccessMembershipDecorator(
                new FreeDrinksMembershipDecorator(
                    new GenericMembership()
                )
            )
        );

        assertEquals(180.0f, membership.getCost());
        assertEquals(25.0f, membership.getDiscountPercentage());
        assertEquals(37.0f, membership.getCancellationFee());
        assertEquals(9, membership.getBenefits().size());
    }
}
