public class MaintainedState implements AvailabilityState{
    private String maintananceStart;
    private String maintananceEnd;

    public MaintainedState(String maintananceStart, String maintananceEnd) {
        this.maintananceStart = maintananceStart;
        this.maintananceEnd = maintananceEnd;
    }

    public AvailabilityState handleBooking(){
        //symulacja zawiadomienia że sala jest remontowana
        System.out.println("Sala jest zamknięta w tym terminie");
        return this;
    }
}
