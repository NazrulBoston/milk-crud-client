import { useLoaderData } from "react-router-dom";


const Update = () => {

    const singleData = useLoaderData();
    console.log(singleData)


    const handleUpdate = (e)=> {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const updatedUser = {
            name, email, password
        }
        console.log(updatedUser)

        fetch(`http://localhost:5003/users/${singleData._id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",

            },
            body: JSON.stringify(updatedUser)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            alert('data updated successfully')
            form.reset();
          
            
        })






    }

    return (
        <div>
            <h1 className="text-3xl">Update</h1>
            <form onSubmit={handleUpdate} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={singleData?.name} name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={singleData?.email} name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" defaultValue={singleData?.password} name="password" placeholder="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
        </div>
    );
};

export default Update;