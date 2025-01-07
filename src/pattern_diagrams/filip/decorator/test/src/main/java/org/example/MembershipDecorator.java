package org.example;

import java.util.ArrayList;
import java.util.List;

public class MembershipDecorator implements Membership {
    protected Membership membership;

    public MembershipDecorator(Membership membership) { this.membership = membership; }

    @Override
    public float getCost() { return membership.getCost(); }

    @Override
    public float getCancellationFee() { return membership.getCancellationFee(); }

    @Override
    public float getDiscountPercentage() { return membership.getDiscountPercentage(); }

    @Override
    public List<String> getBenefits() { return membership.getBenefits(); }
}
