import { Usecase } from './usecase.js';
export const scenarios: Array<Usecase> = [
    {
        author: {
            name: 'Filip',
            surname: 'Stępień',
            group: '3ID11B',
            subject: 'Gym Management System',
        },
        language: 'English',
        usecase: 'Purchase a membership',
        preconditions: ['none'],
        postconditions: ['Created membership identifying the user'],
        actors: ['client', 'employee'],
        mainFlow: [
            { num: 1, text: 'Client requests the employee to create a membership' },
            { num: 2, text: 'Employee selects the `New membership` option' },
            { num: 3, text: 'System displays a form to create a membership' },
            { num: 4, text: 'Employee enters the client’s personal, payment, and contact details in the form' },
            { num: 5, text: 'Employee selects the `Save` option' },
            { num: 6, text: 'System checks if the entered data is correctly formatted' },
            { num: 7, text: 'System checks if the payment method is available' },
            { num: 8, text: 'System creates a new membership' },
            { num: 9, text: 'System charges the fee' },
            { num: 10, text: 'System displays a confirmation' },
        ],
        alternateFlow: [
            { num: 6, text: 'Incorrect data format. RETURN TO 3' },
            { num: 7, text: 'Payment method unavailable. RETURN TO 3' },
        ],
    },
    {
        author: {
            name: 'Filip',
            surname: 'Stępień',
            group: '3ID11B',
            subject: 'Gym Management System',
        },
        language: 'English',
        usecase: 'Membership cancellation',
        preconditions: ['There must be a membership identifying the client'],
        postconditions: ['Client’s membership removed from the system'],
        actors: ['client', 'employee'],
        mainFlow: [
            { num: 1, text: 'Client requests the employee to cancel their membership' },
            { num: 2, text: 'Employee selects the `View memberships` option' },
            { num: 3, text: 'System displays the list of memberships' },
            { num: 4, text: 'Employee enters the client’s data in the search bar' },
            { num: 5, text: 'System displays options matching the search' },
            { num: 6, text: 'Employee selects the membership from the search results' },
            { num: 7, text: 'Employee selects the `Delete membership` option' },
            { num: 8, text: 'System displays a confirmation window' },
            { num: 9, text: 'Employee confirms membership deletion' },
            { num: 10, text: 'System deletes the membership' },
            { num: 11, text: 'System generates a confirmation of the operation' },
        ],
        alternateFlow: [
            { num: 5, text: 'Client not found. RETURN TO 3' },
        ],
    },
    {
        author: {
            name: 'Filip',
            surname: 'Stępień',
            group: '3ID11B',
            subject: 'Gym Management System',
        },
        language: 'English',
        usecase: 'Membership renewal',
        preconditions: [
            'Client must be logged into the system',
            'There must be a membership identifying the client',
        ],
        postconditions: ['Membership expiration date extended'],
        actors: ['none'],
        mainFlow: [
            { num: 1, text: 'System checks the expiration date of user memberships' },
            { num: 2, text: 'System finds an expired membership' },
            { num: 3, text: 'System checks if the payment method for renewing the membership is available' },
            { num: 4, text: 'System renews the membership' },
            { num: 5, text: 'System charges the fee' },
        ],
        alternateFlow: [
            { num: 3, text: 'Payment method unavailable. RETURN TO 1' },
        ],
    },
    {
        author: {
            name: 'Filip',
            surname: 'Stępień',
            group: '3ID11B',
            subject: 'Gym Management System',
        },
        language: 'English',
        usecase: 'Updating membership data',
        preconditions: [
            'Client must be logged into the system',
            'There must be a membership identifying the client',
        ],
        postconditions: ['Updated user data on the membership'],
        actors: ['client', 'employee'],
        mainFlow: [
            { num: 1, text: 'Client requests the employee to update membership data' },
            { num: 2, text: 'Employee selects the `View memberships` option' },
            { num: 3, text: 'System displays the list of memberships' },
            { num: 4, text: 'Employee enters the client’s data in the search bar' },
            { num: 5, text: 'System displays options matching the search' },
            { num: 6, text: 'Employee selects the membership from the search results' },
            { num: 7, text: 'System displays a form with data' },
            { num: 8, text: 'Employee edits the data in the form' },
            { num: 9, text: 'Employee selects the `Save` option' },
            { num: 10, text: 'System checks if the entered data is correctly formatted' },
            { num: 11, text: 'System updates the membership data' },
            { num: 12, text: 'System generates a confirmation of the operation' },
        ],
        alternateFlow: [
            { num: 5, text: 'Client not found. RETURN TO 3' },
            { num: 10, text: 'Incorrect data format. RETURN TO 7' },
        ],
    },
    {
        author: {
            name: 'Filip',
            surname: 'Stępień',
            group: '3ID11B',
            subject: 'Gym Management System',
        },
        language: 'English',
        usecase: 'System login',
        preconditions: ['User must exist in the system'],
        postconditions: ['User session created'],
        actors: ['client', 'employee', 'trainer', 'manager'],
        mainFlow: [
            { num: 1, text: 'User navigates to the login screen' },
            { num: 2, text: 'System displays the login form' },
            { num: 3, text: 'User enters login details' },
            { num: 4, text: 'User selects the `Login` option' },
            { num: 5, text: 'System checks if the user exists' },
            { num: 6, text: 'System creates the user session' },
            { num: 7, text: 'System displays the start screen' },
        ],
        alternateFlow: [
            { num: 5, text: 'User not found. RETURN TO 2' },
        ],
    },
    {
        author: {
            name: 'Rafał',
            surname: 'Grot',
            group: '3ID11B',
            subject: 'Gym Management System',
        },
        language: 'English',
        usecase: 'Client Class Registration',
        preconditions: [
            'Client is logged into the system',
            'Scheduled classes exist in the system',
        ],
        postconditions: ['Client is assigned to the class'],
        actors: ['client'],
        mainFlow: [
            { num: 1, text: 'Client selects the class screen' },
            { num: 2, text: 'System displays a calendar with scheduled classes' },
            { num: 3, text: 'Client selects the desired class' },
            { num: 4, text: 'System displays details of the selected class' },
            { num: 5, text: 'Client selects the `Register` option' },
            { num: 6, text: 'System checks class availability' },
            { num: 7, text: 'System registers the client for the class' },
            { num: 8, text: 'System displays a confirmation' },
        ],
        alternateFlow: [
            { num: 6, text: 'No seats available. RETURN TO 2' },
        ],
    },
    {
        author: {
            name: 'Rafał',
            surname: 'Grot',
            group: '3ID11B',
            subject: 'Gym Management System',
        },
        language: 'English',
        usecase: 'Employee Registration',
        preconditions: ['Employee is not yet registered in the system'],
        postconditions: ['Employee is added to the system'],
        actors: ['manager'],
        mainFlow: [
            { num: 1, text: 'Manager selects the `Add Employee` option' },
            { num: 2, text: 'System displays the employee registration form' },
            { num: 3, text: 'Manager enters employee details' },
            { num: 4, text: 'Manager selects the `Add` option' },
            { num: 5, text: 'System verifies the format of the entered data' },
            { num: 6, text: 'System adds the employee to the system' },
            { num: 7, text: 'System displays a confirmation' },
        ],
        alternateFlow: [
            { num: 5, text: 'Invalid data format. RETURN TO 3' },
        ],
    },
    {
        author: {
            name: 'Rafał',
            surname: 'Grot',
            group: '3ID11B',
            subject: 'Gym Management System',
        },
        language: 'English',
        usecase: 'Employee Data Editing',
        preconditions: ['Employee must be registered in the system'],
        postconditions: ['Employee data is modified in the system'],
        actors: ['manager', 'employee'],
        mainFlow: [
            { num: 1, text: 'Employee requests data modification from the manager' },
            { num: 2, text: 'Manager selects `View Employees` option' },
            { num: 3, text: 'System displays a list of employees' },
            { num: 4, text: 'Manager enters employee data in the search bar' },
            { num: 5, text: 'System displays matching search results' },
            { num: 6, text: 'Manager selects the employee account' },
            { num: 7, text: 'System displays a form with the data' },
            { num: 8, text: 'Manager edits data in the form' },
            { num: 9, text: 'Manager selects the `Save` option' },
            { num: 10, text: 'System verifies the data format' },
            { num: 11, text: 'System modifies employee data' },
            { num: 12, text: 'System generates a confirmation' },
        ],
        alternateFlow: [
            { num: 5, text: 'Employee not found. RETURN TO 3' },
            { num: 10, text: 'Invalid data format. RETURN TO 7' },
        ],
    },
    {
        author: {
            name: 'Rafał',
            surname: 'Grot',
            group: '3ID11B',
            subject: 'Gym Management System',
        },
        language: 'English',
        usecase: 'Removing Employee from System',
        preconditions: ['Employee must be registered in the system'],
        postconditions: ['Employee account is deleted from the system'],
        actors: ['manager'],
        mainFlow: [
            { num: 1, text: 'Manager selects `View Employees` option' },
            { num: 2, text: 'System displays a list of employees' },
            { num: 3, text: 'Manager enters employee data in the search bar' },
            { num: 4, text: 'System displays matching search results' },
            { num: 5, text: 'Manager selects the employee account' },
            { num: 6, text: 'System displays a data form' },
            { num: 7, text: 'Manager selects the `Delete Employee` option' },
            { num: 8, text: 'System displays a confirmation window' },
            { num: 9, text: 'Manager confirms deletion' },
            { num: 10, text: 'System deletes the employee account' },
            { num: 11, text: 'System generates a confirmation' },
        ],
        alternateFlow: [
            { num: 4, text: 'Employee not found. RETURN TO 2' },
        ],
    },
    {
        author: {
            name: 'Rafał',
            surname: 'Grot',
            group: '3ID11B',
            subject: 'Gym Management System',
        },
        language: 'English',
        usecase: 'Room Maintenance by Employee',
        preconditions: [
            'Employee is logged into the system',
            'Room maintenance is scheduled',
        ],
        postconditions: [
            'Room has been maintained',
            'Employee receives confirmation of maintenance completion',
        ],
        actors: ['employee'],
        mainFlow: [
            { num: 1, text: 'Employee logs into the system' },
            { num: 2, text: 'Employee navigates to the Maintenance Calendar section' },
            { num: 3, text: 'System displays the maintenance calendar with scheduled room maintenances' },
            { num: 4, text: 'Employee selects the room requiring maintenance' },
            { num: 5, text: 'System displays maintenance details, including time and scope of work' },
            { num: 6, text: "Employee begins room maintenance by selecting 'Start Maintenance'" },
            { num: 7, text: "Upon completion, the employee selects 'Finish Maintenance'" },
            { num: 8, text: 'System displays maintenance completion confirmation for the employee' },
        ],
        alternateFlow: [
            { num: 4, text: 'If the maintenance time has passed or there is no scheduled maintenance for the selected room, RETURN TO 2' },
            { num: 7, text: 'If maintenance was not successfully completed, RETURN TO 6 to continue work' },
        ],
    },
    {
        "author": {
            "name": "Bartłomiej",
            "surname": "Karkoszka",
            "group": "3ID11B",
            "subject": "Gym Management System"
        },
        "language": "English",
        "usecase": "Closing a Room",
        "preconditions": ["Room must exist in the system"],
        "postconditions": ["Room status set to 'closed'"],
        "actors": ["manager"],
        "mainFlow": [
            { "num": 1, "text": "Manager selects the option `View Training Rooms`" },
            { "num": 2, "text": "System displays a list of rooms" },
            { "num": 3, "text": "Manager enters the room number in the search bar" },
            { "num": 4, "text": "System displays options matching the search" },
            { "num": 5, "text": "Manager selects the room" },
            { "num": 6, "text": "System displays information about the room" },
            { "num": 7, "text": "Manager selects the option `Close Room`" },
            { "num": 8, "text": "System displays a confirmation window" },
            { "num": 9, "text": "Manager confirms the option" },
            { "num": 10, "text": "System changes the room status" },
            { "num": 11, "text": "System generates an operation confirmation" }
        ],
        "alternateFlow": [
            { "num": 4, "text": "Room not found. RETURN TO 2" },
            { "num": 5, "text": "Room already has 'closed' status. RETURN TO 6" }
        ]
    },
    {
        "author": {
            "name": "Bartłomiej",
            "surname": "Karkoszka",
            "group": "3ID11B",
            "subject": "Gym Management System"
        },
        "language": "English",
        "usecase": "Opening a Room",
        "preconditions": ["Room must exist in the system"],
        "postconditions": ["Room status set to 'open'"],
        "actors": ["manager"],
        "mainFlow": [
            { "num": 1, "text": "Manager selects the option `View Training Rooms`" },
            { "num": 2, "text": "System displays a list of rooms" },
            { "num": 3, "text": "Manager enters the room number in the search bar" },
            { "num": 4, "text": "System displays options matching the search" },
            { "num": 5, "text": "Manager selects the room" },
            { "num": 6, "text": "System displays information about the room" },
            { "num": 7, "text": "Manager selects the option `Open Room`" },
            { "num": 8, "text": "System displays a confirmation window" },
            { "num": 9, "text": "Manager confirms the option" },
            { "num": 10, "text": "System changes the room status" },
            { "num": 11, "text": "System generates an operation confirmation" }
        ],
        "alternateFlow": [
            { "num": 4, "text": "Room not found. RETURN TO 2" },
            { "num": 5, "text": "Room does not have 'closed' status. RETURN TO 6" }
        ]
    },
    {
        "author": {
            "name": "Bartłomiej",
            "surname": "Karkoszka",
            "group": "3ID11B",
            "subject": "Gym Management System"
        },
        "language": "English",
        "usecase": "Generating a Report on Conducted Classes",
        "preconditions": ["none"],
        "postconditions": ["File with report on conducted training sessions created"],
        "actors": ["manager"],
        "mainFlow": [
            { "num": 1, "text": "Manager selects the option `View Classes`" },
            { "num": 2, "text": "System displays a list of training sessions" },
            { "num": 3, "text": "Manager selects the option `Generate Report`" },
            { "num": 4, "text": "System displays a report options form" },
            { "num": 5, "text": "Manager selects the date range of conducted sessions" },
            { "num": 6, "text": "Manager selects the report type `Summary`" },
            { "num": 7, "text": "Manager selects the target file format" },
            { "num": 8, "text": "Manager selects the option `Generate`" },
            { "num": 9, "text": "System creates a report file for download" },
            { "num": 10, "text": "System generates an operation confirmation" }
        ],
        "alternateFlow": [
            { "num": 5, "text": "Start date is after the end date. RETURN TO 4" }
        ]
    },
    {
        "author": {
            "name": "Bartłomiej",
            "surname": "Karkoszka",
            "group": "3ID11B",
            "subject": "Gym Management System"
        },
        "language": "English",
        "usecase": "Generating a Sales Report",
        "preconditions": ["none"],
        "postconditions": ["File with membership sales report created"],
        "actors": ["manager"],
        "mainFlow": [
            { "num": 1, "text": "Manager selects the option `View Memberships`" },
            { "num": 2, "text": "System displays a list of memberships" },
            { "num": 3, "text": "Manager selects the option `Generate Sales Report`" },
            { "num": 4, "text": "System displays a report options form" },
            { "num": 5, "text": "Manager selects the sales date range for memberships" },
            { "num": 6, "text": "Manager selects the target file format" },
            { "num": 7, "text": "Manager selects the option `Generate`" },
            { "num": 8, "text": "System creates a report file for download" },
            { "num": 9, "text": "System generates an operation confirmation" }
        ],
        "alternateFlow": [
            { "num": 5, "text": "Start date is after the end date. RETURN TO 4" }
        ]
    },
    {
        "author": {
            "name": "Bartłomiej",
            "surname": "Karkoszka",
            "group": "3ID11B",
            "subject": "Gym Management System"
        },
        "language": "English",
        "usecase": "Client-Contact with Trainer",
        "preconditions": ["Client logged into the system", "Trainer logged into the system"],
        "postconditions": ["Client's message reaches trainer, and trainer can respond"],
        "actors": ["client"],
        "mainFlow": [
            { "num": 1, "text": "Client goes to the Trainer Contact section in the system" },
            { "num": 2, "text": "System displays a list of available trainers" },
            { "num": 3, "text": "Client selects a trainer from the list" },
            { "num": 4, "text": "System displays the option to send a message" },
            { "num": 5, "text": "Client selects the Message option and types the message content to the trainer" },
            { "num": 6, "text": "Client selects the Send option" },
            { "num": 7, "text": "System checks the validity of the entered message content" },
            { "num": 8, "text": "System delivers the message to the trainer and generates a notification" },
            { "num": 9, "text": "System displays a message send confirmation for the client" }
        ],
        "alternateFlow": [
            { "num": 7, "text": "Message is empty or contains disallowed content. RETURN TO 5" }
        ]
    },
    {
        "author": {
            "name": "Damian",
            "surname": "Karwat",
            "group": "3ID11B",
            "subject": "Gym Management System"
        },
        "language": "English",
        "usecase": "Class Organization by Trainer",
        "preconditions": [
            "The trainer is logged into the system",
            "A room is available for reservation in the system"
        ],
        "postconditions": [
            "New classes are added to the calendar and available for clients to join"
        ],
        "actors": ["trainer"],
        "mainFlow": [
            { "num": 1, "text": "The trainer goes to the Class Organization section in the system" },
            { "num": 2, "text": "The system displays the option to Add new classes" },
            { "num": 3, "text": "The trainer selects the option to Add new classes" },
            { "num": 4, "text": "The system displays a form where the trainer can enter class details" },
            { "num": 5, "text": "The trainer selects the Reserve room option and checks room availability" },
            { "num": 6, "text": "The system displays a list of available rooms and their details" },
            { "num": 7, "text": "The trainer selects a room and confirms the reservation" },
            { "num": 8, "text": "The trainer confirms the form by selecting Save" },
            { "num": 9, "text": "The system verifies the form data and room availability for the selected time" },
            { "num": 10, "text": "The system adds the new class to the calendar and makes it available for clients to join" },
            { "num": 11, "text": "The system generates a confirmation of the class creation for the trainer" }
        ],
        "alternateFlow": [
            { "num": 9, "text": "The chosen class time is occupied or the room is unavailable. RETURN TO 5 to select a different room or time" },
            { "num": 9, "text": "The form contains errors (e.g., incomplete information). RETURN TO 4 to complete missing data" }
        ]
    },
    {
        "author": {
            "name": "Damian",
            "surname": "Karwat",
            "group": "3ID11B",
            "subject": "Gym Management System"
        },
        "language": "English",
        "usecase": "Class Cancellation by Trainer",
        "preconditions": [
            "The trainer is logged into the system",
            "There are scheduled classes in the system that the trainer wants to cancel"
        ],
        "postconditions": [
            "Classes are removed from the calendar, and registered clients receive a cancellation notification"
        ],
        "actors": ["trainer"],
        "mainFlow": [
            { "num": 1, "text": "The trainer goes to the Class Organization section in the system" },
            { "num": 2, "text": "The system displays the trainer's class calendar" },
            { "num": 3, "text": "The trainer selects the class they want to cancel from the list or calendar" },
            { "num": 4, "text": "The trainer selects the Cancel class option" },
            { "num": 5, "text": "The system displays a confirmation window" },
            { "num": 6, "text": "The trainer confirms the cancellation" },
            { "num": 7, "text": "The system removes the class from the calendar" },
            { "num": 8, "text": "The system sends a cancellation notification to clients registered for the class" },
            { "num": 9, "text": "The system displays a confirmation of the operation for the trainer" }
        ],
        "alternateFlow": [
            { "num": 6, "text": "The trainer cancels the cancellation by selecting No. RETURN TO 2, with no changes to the class calendar" }
        ]
    },
    {
        "author": {
            "name": "Damian",
            "surname": "Karwat",
            "group": "3ID11B",
            "subject": "Gym Management System"
        },
        "language": "English",
        "usecase": "Change of Class Room by Trainer",
        "preconditions": [
            "The trainer is logged into the system",
            "There are scheduled classes in the system for which the trainer wants to change the room"
        ],
        "postconditions": [
            "The room for the class is changed, and registered clients receive a notification of the change"
        ],
        "actors": ["trainer"],
        "mainFlow": [
            { "num": 1, "text": "The trainer goes to the Class Organization section in the system" },
            { "num": 2, "text": "The system displays the trainer's class calendar" },
            { "num": 3, "text": "The trainer selects the class for which they want to change the room from the list or calendar" },
            { "num": 4, "text": "The trainer selects the Change room option and checks room availability" },
            { "num": 5, "text": "The system displays a list of available rooms and their details" },
            { "num": 6, "text": "The trainer selects a room and confirms the change" },
            { "num": 7, "text": "The system sends a notification to clients registered for the class about the room change" },
            { "num": 8, "text": "The system displays a confirmation of the operation for the trainer" }
        ],
        "alternateFlow": [
            { "num": 6, "text": "The selected room is unavailable. RETURN TO 5 to select a different room" }
        ]
    },
    {
        "author": {
            "name": "Damian",
            "surname": "Karwat",
            "group": "3ID11B",
            "subject": "Gym Management System"
        },
        "language": "English",
        "usecase": "Trainer-Client Communication",
        "preconditions": [
            "The trainer is logged into the system",
            "The client is logged into the system"
        ],
        "postconditions": [
            "The trainer's message reaches the client, and the client has the option to respond"
        ],
        "actors": ["trainer"],
        "mainFlow": [
            { "num": 1, "text": "The trainer goes to the Class Organization section in the system" },
            { "num": 2, "text": "The system displays the trainer's class calendar" },
            { "num": 3, "text": "The trainer selects a class from the class list" },
            { "num": 4, "text": "The system displays class details" },
            { "num": 5, "text": "The trainer accesses the list of participants registered for the class" },
            { "num": 6, "text": "The trainer selects one of the registered clients" },
            { "num": 7, "text": "The system displays the option to send a message to the client" },
            { "num": 8, "text": "The trainer enters the message content" },
            { "num": 9, "text": "The trainer selects the Send option" },
            { "num": 10, "text": "The system sends the message to the client" },
            { "num": 11, "text": "The system displays a confirmation of the message being sent" }
        ],
        "alternateFlow": [
            { "num": 5, "text": "No clients registered for the class. RETURN TO 2" },
            { "num": 8, "text": "The message is empty or contains disallowed content. RETURN TO 7 to correct the message content" }
        ]
    },
    {
        "author": {
            "name": "Damian",
            "surname": "Karwat",
            "group": "3ID11B",
            "subject": "Gym Management System"
        },
        "language": "English",
        "usecase": "Client Progress Analysis by Trainer",
        "preconditions": [
            "The trainer is logged into the system",
            "The client is logged into the system"
        ],
        "postconditions": [
            "The trainer has access to detailed client progress statistics"
        ],
        "actors": ["trainer"],
        "mainFlow": [
            { "num": 1, "text": "The trainer goes to the Class Organization section in the system" },
            { "num": 2, "text": "The system displays the trainer's class calendar" },
            { "num": 3, "text": "The trainer selects a class from the class list" },
            { "num": 4, "text": "The system displays class details" },
            { "num": 5, "text": "The trainer accesses the list of participants registered for the class" },
            { "num": 6, "text": "The trainer selects one of the registered clients" },
            { "num": 7, "text": "The system displays the client's profile" },
            { "num": 8, "text": "The trainer reviews client progress statistics, such as results, attendance, achievements" },
            { "num": 9, "text": "The system displays detailed client progress statistics"},
            { "num": 10,"text": "The trainer has the ability to analyze the client's progress and adjust the training plan"},
        ],
        "alternateFlow": [
            { "num": 5, "text": "No clients registered for the class. RETURN TO 2" },
            { "num": 8, "text": "The client has no available data in the system. RETURN TO 7 to select another client" },
        ],
    },
];




