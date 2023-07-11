import React, { useContext } from "react";
import { userContext } from "./Context";

export default function Content() {
    let user = userContext(userContext);

    const headerStyle = {
        backgroundColor: "#cee",
        textAlign: "center",
        padding: 5,
    };

    return (
        <div style={headerStyle}>
            <a href="#">home</a>&nbsp;&nbsp;
            <a href="#">Product</a>&nbsp;&nbsp;
            <a href="#">Contact Us</a>&nbsp;&nbsp; ชื่อสมาชิก {{ user }}
        </div>
    );
}