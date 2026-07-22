export  function Profile ({name="user"}) {
   
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    )
}

export function User({name,age}) {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}