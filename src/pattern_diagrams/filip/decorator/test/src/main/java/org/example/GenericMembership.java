package org.example;

import java.util.ArrayList;
import java.util.List;

public class GenericMembership implements Membership {
    @Override
    public float getCost() { return 50.0f; }

    @Override
    public float getCancellationFee() { return 10.0f; }

    @Override
    public float getDiscountPercentage() { return 0; }

    @Override
    public List<String> getBenefits() {
        List<String> benefits = new ArrayList<>();
        benefits.add("Access to the gym");
        return benefits;
    }
}
