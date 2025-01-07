package org.example;

import java.util.List;

public class FreeDrinksMembershipDecorator extends MembershipDecorator {

    public FreeDrinksMembershipDecorator(Membership membership) { super(membership); }

    @Override
    public float getCost() { return membership.getCost() + 10.0f; }

    @Override
    public float getCancellationFee() { return membership.getCancellationFee() + 5.0f; }

    @Override
    public float getDiscountPercentage() { return membership.getDiscountPercentage() + 5.0f; }

    @Override
    public List<String> getBenefits() {
        List<String> benefits = membership.getBenefits();
        benefits.add("Unlimited access to beverage stations");
        benefits.add("Refillable water bottle");
        return benefits;
    }
}
