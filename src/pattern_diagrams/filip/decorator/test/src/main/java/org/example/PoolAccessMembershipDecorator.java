package org.example;

import java.util.List;

public class PoolAccessMembershipDecorator extends MembershipDecorator {
    public PoolAccessMembershipDecorator(Membership membership) { super(membership); }

    @Override
    public float getCost() { return membership.getCost() + 50.0f; }

    @Override
    public float getCancellationFee() { return membership.getCancellationFee() + 10.0f; }

    @Override
    public float getDiscountPercentage() { return membership.getDiscountPercentage() + 5.0f; }

    @Override
    public List<String> getBenefits() {
        List<String> benefits = membership.getBenefits();
        benefits.add("Access to pool area");
        benefits.add("Free access to poolside spa treatments");
        benefits.add("Free use of poolside equipment");
        return benefits;
    }
}
