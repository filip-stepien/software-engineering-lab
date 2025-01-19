public class OpenedState implements AvailabilityState{

    public OpenedState() {

    }

    public AvailabilityState handleBooking(){
        //symulacja generowania id booking
        String id = "34";
        System.out.println("Booking completed!");
        return new BookedState(id);
    }
}
