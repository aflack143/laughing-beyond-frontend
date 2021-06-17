import React from "react"

const EditProfile = (props) => {
    return (
        <div class="container">
           <form onSubmit={props.handleSubmit}>
               <label for="name">Name: </label>
               <input onChange={props.handleChange} type="text" name="name" value={props.user.name} placeholder="Name" /><br></br>
               <label for="email">Email: </label>
               <input onChange={props.handleChange} type="text" name="email" value={props.user.email} placeholder="Email" /><br></br>
               <label for="username">Username: </label>
               <input onChange={props.handleChange} type="text" name="username" value={props.user.username} placeholder="Username" /><br></br>
               <label for="img">Image: </label>
               <input onChange={props.handleChange} type="text" name="img" value={props.user.img} placeholder="Image" /><br></br>
               <input type="submit" value="Edit Profile" />
           </form>

           <button onClick={props.handleDelete}>Delete Profile</button>
        </div>
    )
}
export default EditProfile