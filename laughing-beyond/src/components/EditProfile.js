import React from "react"

const EditProfile = (props) => {
    return (
        <div>
           <form onClick={props.handleSubmit}>
               <input onChange={props.handleChange} type="text" name="img" value={props.user.img} placeholder="Image" />
               <input onChange={props.handleChange} type="text" name="name" value={props.user.name} placeholder="Name" />
               <input onChange={props.handleChange} type="text" name="email" value={props.user.email} placeholder="Email" />
               <input onChange={props.handleChange} type="text" name="username" value={props.user.username} placeholder="Username" />
               <input type="submit" value="Edit Profile" />
           </form>

           <button onClick={props.handleDelete}>Delete Profile</button>
        </div>
    )
}
export default EditProfile