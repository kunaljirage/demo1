import React from "react";
import AppRoutes from "../Routes/index";
import { UserProvider } from "./hooks/userContext";



export default props => <> <UserProvider><AppRoutes/></UserProvider></>;