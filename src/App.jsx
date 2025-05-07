import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import ActionBtn from "./components/ActionBtn";
import UserListContainer from "./components/UserListContainer";
import UserFullDetailModal from "./components/UserFullDetailModal";
import { initialUsers } from "./data/initialUsers";
import { currentDateAndTime, currentDate } from "./utils/dateTime";

export default function App() {
  // User Registeration State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/950");

  //User login State
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userData, setUserData] = useState(initialUsers);

  //toggle state

  const [toggleForm, setToggleForm] = useState(true);
  const [showRegisteredUser, setShowRegisteredUser] = useState(false);
  const [showActiveUser, setShowActiveUser] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const activeUsers = userData.filter((user) => user.loginStatus === true);
  const handleRegister = (e) => {
    e.preventDefault();
    // input field validation
    if (!fullName || !email || !password || !image) {
      const missingFields = [];
      if (!fullName) missingFields.push("Full Name");
      if (!email) missingFields.push("Email");
      if (!password) missingFields.push("Password");
      if (!image) missingFields.push("Image");

      toast.error(
        `Please fill the following fields: ${missingFields.join(", ")}.`
      );
      return;
    }

    // Email and Password Validation

    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      isValid = false;
    }

    //Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be 6+ chars and include uppercase, lowercase, number, and symbol."
      );
      isValid = false;
    }

    if (isValid) {
      const id = crypto.randomUUID();
      setUserData((prevUserData) => [
        ...prevUserData,
        {
          userId: id,
          userFullName: fullName,
          userEmail: email,
          userPassword: password,
          userImage: `${image}?u=${id}`,
          loginStatus: false,
          joinedOn: currentDate(),
          loginTime: null,
          loginHistory: [],
        },
      ]);

      setEmail("");
      setFullName("");
      setPassword("");
      toast.success("User registered successfully.");
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // input field validation
    if (!userEmail || !userPassword) {
      const missingFields = [];
      if (!userEmail) missingFields.push("Email");
      if (!userPassword) missingFields.push("Password");
      toast.error(
        `Please fill the following fields: ${missingFields.join(", ")}.`
      );
      return;
    }
    const foundUser = userData.find(
      (user) =>
        user.userEmail === userEmail && user.userPassword === userPassword
    );
    if (foundUser) {
      const timeStamp = currentDateAndTime();
      setUserData((prevUserData) =>
        prevUserData.map((user) =>
          user.userEmail === userEmail
            ? {
                ...user,
                loginStatus: true,
                loginTime: timeStamp,
                loginHistory: [...(user.loginHistory || []), timeStamp]
                  .sort((a, b) => new Date(b) - new Date(a))
                  .slice(0, 8),
              }
            : user
        )
      );
      toast.success("User logged in successfully.");
    } else {
      toast.error("No user found with these credentials.");
    }

    // Reset login data
    setUserEmail("");
    setUserPassword("");
  };

  // User delete handler
  const handleDeleteUser = (userId) => {
    setUserData((prevUserData) =>
      prevUserData.filter((user) => user.userId !== userId)
    );
    toast.success("User deleted successfully.");
  };

  //logout handler
  const handleLogoutUser = (userId) => {
    setUserData((prevUserData) =>
      prevUserData.map((userDetails) =>
        userDetails.userId === userId
          ? { ...userDetails, loginStatus: false, loginTime: null }
          : userDetails
      )
    );
    toast.success("User logged out successfully.");
  };

  console.log(selectedUser);
  return (
    <>
      <main className="w-full min-h-screen flex justify-center items-center flex-col px-10 py-4 ">
        <Header />
        {/* Action Button */}
        <ActionBtn
          showActiveUser={showActiveUser}
          onSetShowActiveUser={setShowActiveUser}
          showRegisteredUser={showRegisteredUser}
          onSetShowRegisteredUser={setShowRegisteredUser}
        />

        <div className="w-full flex justify-center items-center flex-col gap-20">
          {/* Register and login section */}
          <div className="w-full flex justify-center items-center">
            {/* User Registration form container */}
            {toggleForm ? (
              <Login
                userEmail={userEmail}
                userPassword={userPassword}
                onSetUserEmail={setUserEmail}
                onSetUserPassword={setUserPassword}
                onLogin={handleLogin}
                onSetToggleForm={setToggleForm}
                toggleForm={toggleForm}
              />
            ) : (
              <Register
                fullName={fullName}
                email={email}
                password={password}
                image={image}
                onSetFullName={setFullName}
                onSetEmail={setEmail}
                onSetPassword={setPassword}
                onSetImage={setImage}
                onRegisterFormSubmit={handleRegister}
                onSetToggleForm={setToggleForm}
                toggleForm={toggleForm}
              />
            )}
          </div>

          {/* All registered and active user section */}
          <div className="w-full h-fit flex justify-between items-start lg:flex-row flex-wrap gap-10">
            {/*  Registered users*/}

            <UserListContainer
              listHeading={"Registered users"}
              userData={userData}
              showCard={showRegisteredUser}
              listMode={"registeredUsers"}
              selectedUser={selectedUser}
              onSetSelectedUser={setSelectedUser}
              onDeleteUser={handleDeleteUser}
            />

            {/*  Active users*/}
            <UserListContainer
              listHeading={"Active users"}
              userData={activeUsers}
              showCard={showActiveUser}
              listMode={"activeUsers"}
              selectedUser={selectedUser}
              onSetSelectedUser={setSelectedUser}
              onLogOut={handleLogoutUser}
            />
          </div>
          <UserFullDetailModal
            selectedUser={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </main>
    </>
  );
}
