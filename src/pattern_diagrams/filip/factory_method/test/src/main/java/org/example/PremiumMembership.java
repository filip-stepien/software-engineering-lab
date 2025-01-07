package org.example;

public class PremiumMembership extends Membership {
    @Override
    public long getValidityDays() {
        return 720;
    }

    @Override
    public float getChargePrice() {
        return 120.0f;
    }
}
