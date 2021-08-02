import Login from "../Views/Login";
import Users from "../Views/Users/";
import Admin from "../Views/Admin";

export default [
    { path: "/welcome", Component: Login, protected: false },
    { path: "/admin", Component: Admin, protected: true },
    { path: "/", Component: Users, protected: true }
]