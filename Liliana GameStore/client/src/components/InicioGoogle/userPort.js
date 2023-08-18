export const userPost = (userData) =>{
    let {displayName , email ,photoURL  ,accessToken} = userData
    let names = displayName.split(" ");
    let firstName = names[0];  // "Franco"
    let lastName = names[1]; 

    let userObj ={
        first_name: firstName,
        last_name : lastName,
        username: displayName,
        email: email,
        password: accessToken,
        cp: 1234,
        address: "Dirección...",
        phone: "+542668877",
        avatar_img: `${photoURL}`
    }
    return userObj
}