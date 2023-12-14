import React from "react";
import userContext from "./userContext";

const UserState = (props) => {
    const state = {
        "name": "krishna",
    }
    return(
        <userContext.Provider value={state}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState