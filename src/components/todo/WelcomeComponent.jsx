import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { retrieveHelloWorldBean, retrieveHelloWorldBeanPathVariable } from "./api/HelloWorldApiService"
import { useAuth } from "./security/AuthContext"

export default function WelcomeComponent() {

    const { username } = useParams()

    const authContext = useAuth()

    const [message, setMessage] = useState(null)


    function callHelloWorldBeanPathVariable(){
        retrieveHelloWorldBeanPathVariable('Uros', authContext.token)
        .then((response) => successfullResponse(response))
        .catch((error) => errorResponse(error))
        .finally(() => console.log('cleanUp for hello-world-bean-path-variable'))
    }

    function successfullResponse(response) {
        console.log(response)
        setMessage(JSON.stringify(response.data))
        // setMessage(response.data)
    }

    function errorResponse(error) {
        console.log(error)
    }


    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your todos. <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldBeanPathVariable}>Call Hello World </button>
            </div>
            <div>
                <div className="text-info">{message}</div>
            </div>
        </div>

    )
}
