package org.example;

public class MultisportMembership extends Membership {
    @Override
    public long getValidityDays() {
        return 365;
    }

    @Override
    public float getChargePrice() {
        return 40.0f;
    }
}
