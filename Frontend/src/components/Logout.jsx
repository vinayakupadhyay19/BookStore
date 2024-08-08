import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setauthUser] = useAuth();
  const handleLogout = () => {
    try {
      setauthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("User");
      toast.success("Logged out successfully");

      setTimeout(() => {
        window.location.reload();
      }, 1200);
    } catch (err) {
      toast.error("Couldn't log out");
      setTimeout(() => {}, 1200);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer dark:bg-slate-900 dark:text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
