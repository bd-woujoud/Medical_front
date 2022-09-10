//A bunch of API call to the server (all are async functions)
const AuthService = {
 
    login: function (userInfo) {
        return fetch("http://localhost:5000/users/login",
            {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include' // n3adi biha ll Token //gérer token
            }).then((res, errors) => {
                if (res.status === 404) {
                    return errors
                } else {
                    if (res.status !== 401)
                        return res.json().then(jsonData => jsonData)
                        

                    else
                        return { isAuthenticated: false, user: { email: "" } , role:"", message:'user not found' }
                }
            })
    },

    register: function (userInfo) {
        return fetch("http://localhost:5000/users/register",
            {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then(res => res.json())
            .then(jsonData => jsonData)
    },

    logout: function () {
        return fetch("http://localhost:5000/users/logout", { credentials: 'include' })
            .then(res => res.json())
            .then(jsonData => jsonData)
    },

    isAuthenticated: function () {
        return fetch("http://localhost:5000/users/authenticated", { credentials: 'include' })
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(jsonData => jsonData)
                else
                    return { message:Error,isAuthenticated: false, user: { email: ""} , role: "" }
            })
            
    },

    getme : function(){
        return fetch("http://localhost:5000/users/getme", { credentials: 'include' })
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(jsonData => jsonData)
                else
                    return null
            })
    }
}

export default AuthService
/* useEffect(() => {
    AuthService.isAuthenticated().then((jsonData) => {
        console.log("...isAuthenticated() function...", jsonData)
        setIsAuth(jsonData.isAuthenticated);
        setUser(jsonData.user);
        setIsLoaded(true)
        getmeAgain()
    })
}, [])

useEffect(()=> {
    getmeAgain()
},[avatarupload])

const getmeAgain = () => {
    AuthService.getme().then(res => {
        console.log(res);
        setuserdetails(res)
    })
} */