

const PostUsers = () => {
     
    const handleSingUp = (event) => {
        event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const password =  form.password.value;
       const newUser = {name, email, password}
       console.log(newUser)


       fetch('http://localhost:5003/users', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newUser)
       })
       .then(res => res.json())
       .then(data => {
        if(data.acknowledged){
            alert('Data added successfully')
            form.reset();
        }
        console.log(data)
       })

    }

    return (
        <div>
            <h2 className="text-4xl text-center mt-8 text-red-950 font-bold">Create User </h2>
            <div className="w-2/3 mx-auto">
                <form onSubmit={handleSingUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default PostUsers;