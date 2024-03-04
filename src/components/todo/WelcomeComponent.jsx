import { Link, useParams } from "react-router-dom"
import { useAuth } from "./security/AuthContext"


export default function WelcomeComponent() {

    const { username } = useParams()
    const authContext = useAuth()



    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your todos. <Link to="/todos">Go here</Link>
            </div>
        </div>

    )
}
