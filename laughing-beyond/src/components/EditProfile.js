import React from "react"

const EditProfile = (props) => {
    return (
        <div class="container">
           <form onSubmit={props.handleSubmit}>
                <div>
                    <label for="name">Name: </label>
                    <input onChange={props.handleChange} type="text" name="name" value={props.user.name} placeholder="Name" />
                </div>
                <div>
                    <label for="email">Email: </label>
                    <input onChange={props.handleChange} type="text" name="email" value={props.user.email} placeholder="Email" />
                </div>
                <div>
                    <label for="username">Username: </label>
                    <input onChange={props.handleChange} type="text" name="username" value={props.user.username} placeholder="Username" />
                </div>
                <div>
                    <label for="img">Image: </label>
                    <input onChange={props.handleChange} type="text" name="img" value={props.user.img} placeholder="Image" />
                </div>
                <input type="submit" value="Edit Profile" />
           </form>

           <button id='deletebtn' onClick={props.handleDelete}>Delete Profile</button>
        </div>
    )
}
export default EditProfile