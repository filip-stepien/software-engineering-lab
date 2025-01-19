//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Gym gym1 = new Gym("sala ćwiczeń", "5", new OpenedState(), 25);
        Gym gym2 = new Gym("kort tenisowy", "2", new BookedState("65"), 6);
        Gym gym3 = new Gym("boisko koszykówki", "7", new MaintainedState("19-01-2025", "25-01-2025"), 30);

        //symulacja pozytywnego zabookowania sali na ćwiczenia
        gym1.handleBooking();

        //symulacja próby zabookowania sali, która już jest zabookowana
        gym2.handleBooking();

        //symulacja próby zabookowania sali, na której jest remont
        gym3.handleBooking();
    }
}