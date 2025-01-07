package org.example;

import java.util.List;

public class GroupExercisesMembershipDecorator extends MembershipDecorator{
    public GroupExercisesMembershipDecorator(Membership membership) { super(membership); }

    @Override
    public float getCost() { return membership.getCost() + 70.0f; }

    @Override
    public float getCancellationFee() { return membership.getCancellationFee() + 12.0f; }

    @Override
    public float getDiscountPercentage() { return membership.getDiscountPercentage() + 15.0f; }

    @Override
    public List<String> getBenefits() {
        List<String> benefits = membership.getBenefits();
        benefits.add("Access to all group classes");
        benefits.add("Unlimited group class attendance");
        benefits.add("Free group class merchandise");
        return benefits;
    }
}
