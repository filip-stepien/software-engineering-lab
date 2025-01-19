public class Gym {
    private String name;
    private String id;
    private AvailabilityState availabilityState;
    private int maxParticipants;

    public Gym(String name, String id, AvailabilityState availabilityState, int maxParticipants) {
        this.name = name;
        this.id = id;
        this.availabilityState = availabilityState;
        this.maxParticipants = maxParticipants;
    }

    public void setAvabilityState(AvailabilityState avabilityState) {
        this.availabilityState = avabilityState;
    }

    public void open(){
        AvailabilityState tmp = new OpenedState();

        this.setAvabilityState(tmp);
    }

    public void Maintain(String startDate, String endDate){
        AvailabilityState tmp = new MaintainedState(startDate, endDate);

        this.setAvabilityState(tmp);
    }

    public void handleBooking(){
        this.availabilityState = this.availabilityState.handleBooking();
    }
}
