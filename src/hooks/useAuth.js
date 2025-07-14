import axios from "axios"

const useAuth = () => {
  

    const createUser = (data, navigate) => {
        const url = ''
        axios.post(url, data)
          .then(res => {
            console.log(res.data)
            navigate('/login')
        })
          .catch(err => console.log(err))
    }

    const loginUser = (data, navigate) => {
        const url = ''
        axios.post(url, data)
          .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            navigate('/')
          })
          .catch(err => {
            console.log(err)
            localStorage.removeItem('token')
          })
    }

    return {createUser, loginUser}
}

export default useAuth
