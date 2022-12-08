import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'

export default function JokesNorris() {
    const [Jokes, setJokes] = useState([])
    const [Likes, setLikes] = useState(0)

    useEffect(() => {
    }, [])

    const getNewJoke = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/random')
        if (response.status === 200) {
            const joke = { value: response.data.value, like: false }
            const tempJokes = [...Jokes].concat([joke])
            setJokes(tempJokes)
        }
    }

    const changeLikeJoke = (index) => {
        let tempJokes = [...Jokes]
        tempJokes.splice(index, 1)
        let likedJoke = { ...Jokes[index], like: !Jokes[index].like }
        Jokes[index].like ? setLikes(Likes - 1) : setLikes(Likes + 1)
        setJokes(tempJokes.concat([likedJoke]))
    }

    const printJoke = () => {
        if (Jokes.length > 0) {
            console.log('printing')
            return (
                <div>
                    {Jokes.map((joke, index) => {
                        return (
                            <li key={index}>
                                {joke.value}
                                <Button variant="outlined" onClick={() => changeLikeJoke(index)}>{!joke.like ? 'Like' : 'Unlike'}</Button>
                            </li>
                        )
                    })}

                </div>
            )
        }
    }

    return (
        <div>
            <h1>JokesNorris</h1>
            <ul>
                {printJoke()}
            </ul>
            <div>
                <p>Total likes: {Likes} Total UnLikes: {Jokes.length - Likes}</p>
                <button onClick={() => getNewJoke()}>New Joke Norris</button>
            </div>
        </div>
    )
}
