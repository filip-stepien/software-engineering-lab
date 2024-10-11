# Software Engineering

## Topic

The project topic is a gym management system.

## System Description

### 1. Basic Information about the System

The gym management system aims to efficiently manage memberships, class bookings, and customer service in the gym. The system allows clients to purchase memberships, manage them, and reserve spots for classes. Trainers can organize classes, book rooms, and communicate with clients. Staff can verify memberships and manage customer data, while managers can oversee personnel.

### 2. Description of the Modeled Reality

The system consists of the following entities:

- **Membership** - a document granting the client access to the gym. The membership specifies the time window during which it is valid, personal details of the owner, payment information, and contact details. It is also used to track the days and times when the user was present at the gym facility.
- **Training Room** - a space where training sessions occur. It is used for sports activities. Each room has a unique number, equipment, and a maximum capacity of people allowed at the same time.
- **Classes** - represent a reserved time slot during which group exercises take place. Classes are described by the time and date when they occur, the room in which they are held, the trainers leading them, and the clients participating.

### 3. Outline of System Users

###### Users:

1. Client
2. Trainer
3. Staff
4. Manager

###### 3.1. Client

Each client has a membership they can manage, can sign up for classes, and can consult with a trainer.

###### 3.2. Trainer

Trainers can reserve training rooms, manage classes, and communicate with clients.

###### 3.3. Staff

Staff can issue and modify clients' memberships.

###### 3.4. Manager

Managers can oversee staff, rooms, and can also use the system like other staff members (e.g., managing user memberships).

### 4. Description of System Functionality

###### Functionalities:

1. Purchasing a membership
2. Cancelling a membership
3. Renewing a membership
4. Changing data on the membership
5. Signing clients up for classes
6. Organizing classes by trainers
7. Canceling classes by trainers
8. Managing rooms

###### 4.1. Purchasing a Membership

The user must request a staff member to set up a membership. They will need to provide personal information, payment method, and select the type of membership.

###### 4.2. Cancelling a Membership

Staff cancels the membership upon the user's request. The user provides their personal information for this purpose.

###### 4.3. Renewing a Membership

If the membership is not canceled, it will automatically renew without the need for user interaction.

###### 4.4. Managing Memberships

The user approaches a staff member, who edits the data associated with the membership. The client must specify which data they wish to change, and the staff must verify if the change is possible.

###### 4.5. Signing Clients Up for Classes

Clients have access to the scheduled classes and can freely sign up for them.

###### 4.6. Organizing Classes by Trainers

Trainers enter the planned date and time of the classes, their type, and the room number into the system.

###### 4.7. Canceling Classes by Trainers

Trainers remove information about previously scheduled classes from the system.

###### 4.8. Managing Rooms

Managers establish which rooms are in use and can be reserved for classes, and which require maintenance.

### 5. Description of Non-Functional Requirements of the System

The system is multi-platform: all users can access the system via a website, and clients and trainers can interact with the system through a mobile application. It is also easily scalable and resistant to significant resource load, prepared to handle a large number of users. Authorization is conducted using secure authentication methods, including two-factor verification for staff and managers. The interface is intuitive and responsive, with navigation optimized for accessibility for all users.

## Glossary
- Membership - the client's identifier in the system, authorizing access to the gym. A membership can be purchased, canceled, transferred to another client, or have its data changed.
- Training Room - a facility where training takes place. The room can be reserved for exercises and can also be taken out of service for maintenance.
- Classes - a time slot during which training occurs in the room. Classes can be organized at specific times, canceled, or rescheduled to another day.
- Client - the primary user of the system. The client can purchase and manage a membership, sign up for classes, and communicate with trainers.
- Trainer - a person responsible for organizing training classes and consulting with clients.
- Staff - a system user authorizing operations related to managing clients' memberships.
- Manager - a person managing staff, memberships, and rooms in the system.

## User Stories

As a gym client:

1. I want to purchase a membership so that I can work out.
2. I want to sign up for classes to work out under supervision.
3. I want to cancel my membership so that I don’t have to pay for it.
4. I want to renew my membership to continue working out.
5. I want to manage my membership so that I can cancel/renew it.
6. I want to change my details on the membership so that they are up to date (e.g., contact information, payment details).
7. I want to browse available classes to find ones that interest me.

As a trainer:

1. I want to organize classes so that clients can work out in groups.
2. I want to reserve rooms for classes so that clients can work out in groups.
3. I want to cancel classes so that clients do not need to come.
4. I want to manage rooms so that I can change the room where classes will take place.
5. I want to communicate with clients to inform them about changes in classes (e.g., cancellation, room change).
6. I want to view the list of clients signed up for my classes to know who will participate in the training.
7. I want to assess clients' progress to adjust the training program to their needs.

As a staff member:

1. I want to maintain rooms so that they are in good condition.
2. I want to cancel memberships to terminate client access to the gym.
3. I want to change membership details so that clients can manage their personal information.
4. I want to verify client entry to check if they have a valid membership.
5. I want to generate reports on client activity to monitor their engagement.
6. I want to inform clients about expiring memberships to encourage renewal.
7. I want to maintain training rooms to prepare them for classes.

As a manager:

1. I want to reserve rooms for classes so that trainers can conduct sessions.
2. I want to manage memberships to monitor exercising clients.
3. I want to manage staff to delegate tasks (e.g., maintenance, canceling memberships).
4. I want to analyze room usage to optimize class organization.
5. I want to monitor membership sales to check the gym's revenue level.
6. I want to update information on room availability so that clients and trainers can train.
7. I want to create reports on class popularity to better plan staff schedules.
