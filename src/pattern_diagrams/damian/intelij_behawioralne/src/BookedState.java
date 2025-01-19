public class BookedState implements AvailabilityState{
    private String bookingID;

    public BookedState(String bookingID) {
        this.bookingID = bookingID;
    }

    public void setBookingID(String bookingID) {
        this.bookingID = bookingID;
    }

    public AvailabilityState handleBooking(){
        //symulacja zawiadomienia że sala jest już zabookowana
        System.out.println("Sala jest już zabookowana w tym terminie");
        return this;
    }
}
