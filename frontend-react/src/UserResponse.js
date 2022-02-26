import axios from "axios";
import React, { useState, useEffect } from "react";

const UserResponse = () => {
    const id = window?.location?.href?.split('=').pop();
    console.log('edxhbxj',id);

    useEffect(() => {
        getUserResponse();
    },[]);

    const getUserResponse = () => {
        axios.post('http://localhost:8000/getUserResponse',{ id: id }).then((res) => { console.log('res',res.data) }).catch((err) => { console.log(err); })
    }

    return (
        <div>
            <div className="mb-2">
                <h2>User Responses</h2>
            </div>
        </div>
    )
}

export default UserResponse;