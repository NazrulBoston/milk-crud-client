import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const GetUsers = () => {

    const users = useLoaderData();
    console.log(users)
    const [updatedUsers, setUpdatedUsers] = useState(users)

    const handleDelete = (_id) => {
        console.log(_id)
        
        fetch(`http://localhost:5003/users/${_id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if(data.deletedCount > 0){
                alert("Data deleted successfully")
            }

            const remainingUsers = updatedUsers.filter((items) => items._id !== _id)
            setUpdatedUsers(remainingUsers);
        })


    };

    return (
        <div className="text-center">
            <h2 className="text-2xl">Total user:{updatedUsers.length}</h2>
            {
                updatedUsers.map((user) => <div>

                    <h1>
                        {user.name} :
                        {user.email}
                        <button onClick={() => handleDelete(user._id)} className="ml-5">X</button>
                      <Link to = {`/users/${user._id}`}> <input className="btn btn-sm" type="submit" value="Update" /></Link>
                    </h1>

                </div>)
            }


        </div>
    );
};

export default GetUsers;