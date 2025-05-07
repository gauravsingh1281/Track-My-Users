import { currentDateAndTime, currentDate } from "../utils/dateTime";

export const initialUsers = [
  {
    userId: 1,
    userFullName: "Gaurav Pratap Singh",
    userEmail: "gaurav@reactuser.com",
    userPassword: "demo",
    userImage: "https://avatars.githubusercontent.com/u/85905403?v=4",
    loginStatus: true,
    joinedOn: currentDate(),
    loginTime: currentDateAndTime(),
    loginHistory: ["1 May 2025, 10:05 AM", "7 May 2025, 09:15 AM"],
  },
  {
    userId: 2,
    userFullName: "Priya Mehta",
    userEmail: "priya.mehta@example.com",
    userPassword: "secure456",
    userImage: "https://i.pravatar.cc/50?u=2",
    loginStatus: false,
    joinedOn: currentDate(),
    loginTime: null,
  },
  {
    userId: 3,
    userFullName: "Rahul Verma",
    userEmail: "rahul.verma@example.com",
    userPassword: "welcome789",
    userImage: "https://i.pravatar.cc/50?u=3",
    loginStatus: false,
    joinedOn: currentDate(),
    loginTime: null,
  },
];
