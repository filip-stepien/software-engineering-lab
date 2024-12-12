package org.example;

public class StandardMembership extends Membership {
    @Override
    public long getValidityDays() {
        return 180;
    }

    @Override
    public float getChargePrice() {
        return 80.0f;
    }
}
