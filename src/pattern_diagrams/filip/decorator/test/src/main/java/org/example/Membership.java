package org.example;

import java.util.List;

public interface Membership {
    public float getCost();
    public float getCancellationFee();
    public float getDiscountPercentage();
    public List<String> getBenefits();
}
