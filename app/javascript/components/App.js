import React from "react";
import AppRoutes from "../Routes/index";
import { UserProvider } from "./User/hooks/userContext";



export default props => <> <UserProvider><AppRoutes/></UserProvider></>;