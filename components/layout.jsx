// import { Children } from "react/cjs/react.development";
import Navbar from "./navbar";
// import { PropsWithChildren } from "react";

const Layout = ({Children}) => {

    return <>
        <Navbar/>
        <div>{Children}</div>
    </>
}

export default Layout

