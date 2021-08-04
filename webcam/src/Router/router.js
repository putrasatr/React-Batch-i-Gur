import Login from "../Views/Login";
import Users from "../Views/Users/";
import Admin from "../Views/Admin";

export const routers = [
    { path: "/welcome", Component: Login, protectedRoute: false },
    { path: "/admin", Component: Admin, protectedRoute: true },
    { path: "/", Component: Users, protectedRoute: true }
]