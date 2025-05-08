import { currentDateAndTime, currentDate } from "../utils/dateTime";

export const initialUsers = [
  {
    userId: 1,
    userFullName: "Gaurav Pratap Singh",
    userEmail: "gaurav@reactuser.com",
    userPassword: "demo",
    userImage: "https://avatars.githubusercontent.com/u/85905403?v=4",
    loginStatus: true,
    joinedOn: "25 April 2025, 12:00 PM",
    loginTime: currentDateAndTime(),
    loginHistory: [
      "7 May 2025, 10:05 AM",
      "3 May 2025, 6:50 PM",
      "1 May 2025, 09:15 AM",
      "25 April 2025, 12:00 PM",
    ],
  },
  {
    userId: 2,
    userFullName: "Vijay Deverakonda",
    userEmail: "vijay.dev@example.com",
    userPassword: "secure456",
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS134dP2TLWsMBOo5_xUY9XOvD-DdAoTYrnuA&s",
    loginStatus: false,
    joinedOn: currentDate(),
    loginTime: null,
    loginHistory: [],
  },
  {
    userId: 3,
    userFullName: "Megha Akash",
    userEmail: "megha.akash@example.com",
    userPassword: "welcome789",
    userImage:
      "https://i.pinimg.com/736x/05/4d/d7/054dd706d299c405071d81f6ae3cf494.jpg",
    loginStatus: true,
    joinedOn: "4 May 2025",
    loginTime: "7 May 2025, 09:15 AM",
    loginHistory: [
      "7 May 2025, 08:30 AM",
      "5 May 2025, 10:00 AM",
      "4 May 2025, 09:15 AM",
    ],
  },
];
