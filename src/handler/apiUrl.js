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

const GetVideoThumbnails = () =>{
    return `${apiDomain}/video/thumbnails`
}

const GetVideoDetails = (videoId) =>{
    return `${apiDomain}/video/${videoId}`
}

const GetVideosProducts = (videoId) =>{
    return `${apiDomain}/video=${videoId}/products`
}

const PostComment = () => {
    return `${apiDomain}/video/comment/insert`
}

const SearchVideo = (keyword) =>{
    return `${apiDomain}/video/search/${keyword}`
}

const CheckUsername = (username) =>{
    return `${apiDomain}/user/username/check/${username}`
}

const CheckEmail = (email) =>{
    return `${apiDomain}/user/email/check/${email}`
}
// eslint-disable-next-line
export default {
    PostLogin, 
    PostRegister,
    GetUserPublicInformation,
    GetVideoThumbnails,
    GetVideoDetails,
    GetVideosProducts,
    PostComment,
    SearchVideo,
    CheckUsername,
    CheckEmail
}