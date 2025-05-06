import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
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
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);
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
    setShowRegisterForm(false);
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
    setShowLoginForm(false);
    setUserEmail("");
    setUserPassword("");
  };

  return (
    <>
      <main className="w-full min-h-screen   bg-[#fbf1de] flex justify-center items-center flex-col p-10 ">
        <h1 className="text-black text-4xl">Track My Users</h1>
        <p>Manage users effortlessly — from sign-up to sign-out.</p>
        {/* Action Button */}
        <div className="flex my-6 justify-center items-center flex-row gap-10">
          <button
            type="button"
            onClick={() => {
              setShowRegisterForm(!showRegisterForm);
              setShowLoginForm(false);
            }}
            className="px-4 py-2 bg-amber-500 text-white rounded-2xl cursor-pointer active:scale-[90%] transition-all ease-in duration-100"
          >
            New user
          </button>
          <button
            className="px-4 py-2 bg-amber-500 text-white rounded-2xl cursor-pointer active:scale-[90%] transition-all ease-in duration-100"
            onClick={() => {
              setShowLoginForm(!showLoginForm);
              setShowRegisterForm(false);
            }}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => setShowRegisteredUser(!showRegisteredUser)}
            className="px-4 py-2 bg-amber-500 text-white rounded-2xl cursor-pointer active:scale-[90%] transition-all ease-in duration-100"
          >
            View all registered users
          </button>
          <button
            type="button"
            onClick={() => setShowActiveUser(!showActiveUser)}
            className="px-4 py-2 bg-amber-500 text-white rounded-2xl cursor-pointer active:scale-[90%] transition-all ease-in duration-100"
          >
            Show active users
          </button>
        </div>

        <div className="w-full flex justify-center items-center flex-col gap-20">
          {/* Register and login section */}
          <div className="w-full flex justify-center items-center flex-row flex-wrap gap-10">
            {/* User Registration form container */}
            {showRegisterForm && (
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
              />
            )}
            {showLoginForm && (
              <Login
                userEmail={userEmail}
                userPassword={userPassword}
                onSetUserEmail={setUserEmail}
                onSetUserPassword={setUserPassword}
                onLogin={handleLogin}
                setShowRegister={setShowRegisterForm}
                registerForm={showRegisterForm}
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
