import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const UserLogout = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/users/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true, 
          }
        )

        localStorage.removeItem("token")
        navigate("/")
      } catch (error) {
        console.error("Error while logout", error)
        localStorage.removeItem("token")
        navigate("/")
      }
    }

    logoutUser()
  }, [navigate, token])

  return <div>Logging out...</div>
}

export default UserLogout
