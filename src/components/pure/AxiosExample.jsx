import React, {useState} from 'react'
import { useEffect } from 'react'
import { getRandomUser } from '../../utils/axios.service'

export default function AxiosExample() {
    const [User, setUser] = useState(false)

    useEffect(()=>{
        getRandomUser()
            .then((response)=> {
                console.log(response)
                setUser(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h1>AxiosExample</h1>
            {User && JSON.stringify(User.results[0])}
        </div>
    )
}
