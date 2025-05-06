import { useState } from "react";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import ActionBtn from "./components/ActionBtn";
import UserListContainer from "./components/UserListContainer";
import { initialUsers } from "./data/initialUsers";
import { currentDateAndTime, currentDate } from "./utils/dateTime";

export default function App() {
  // User Registeration State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/50");

  //User login State
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userData, setUserData] = useState(initialUsers);

  //toggle state

  const [toggleForm, setToggleForm] = useState(true);
  const [showRegisteredUser, setShowRegisteredUser] = useState(false);
  const [showActiveUser, setShowActiveUser] = useState(false);
  const activeUsers = userData.filter((user) => user.loginStatus === true);
  const handleRegister = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !image) return;
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
      },
    ]);

    setEmail("");
    setFullName("");
    setPassword("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = userData.find(
      (user) =>
        user.userEmail === userEmail && user.userPassword === userPassword
    );
    if (foundUser) {
      setUserData((prevUserData) =>
        prevUserData.map((user) =>
          user.userEmail === userEmail
            ? {
                ...user,
                loginStatus: true,
                loginTime: currentDateAndTime(),
              }
            : user
        )
      );
      console.log("✅ User logged in successfully");
    } else {
      console.log("❌ No user found with these credentials");
    }
    // reset login data
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <>
      <main className="w-full min-h-screen flex justify-center items-center flex-col p-10 ">
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
          <div className="w-full h-fit flex justify-between items-start flex-row flex-wrap gap-10">
            <UserListContainer
              listHeading={"Registered users"}
              userData={userData}
              showCard={showRegisteredUser}
              listMode={"registeredUsers"}
            />
            <UserListContainer
              listHeading={"Active users"}
              userData={activeUsers}
              showCard={showActiveUser}
              listMode={"activeUsers"}
            />
          </div>
        </div>
      </main>
    </>
  );
}
