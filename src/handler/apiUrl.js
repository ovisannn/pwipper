const apiDomain = "http://localhost:3000"

const PostLogin = () => {
    return `${apiDomain}/user/login`
}

const PostRegister = () => {
    return `${apiDomain}/user/register`
}

const GetUserPublicInformation = (username) => {
    return `${apiDomain}/user/${username}`
}

// eslint-disable-next-line
export default {
    PostLogin, 
    PostRegister,
    GetUserPublicInformation
}