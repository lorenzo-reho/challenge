import Button from "@mui/material/Button";
import axios from 'axios'
import { useState, useEffect } from "react";

const Page1 = () => {

    const [count, SetCount] = useState(0);
    const [joke, SetJoke] = useState('');

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => {SetJoke(response.data.value);})
        .catch(error => {console.log(error)})
    }, [count]);

    return (
        <>
            <Button variant="outlined" onClick={() => {SetCount(count+1)}}>New Joke!</Button>
            <p>{joke}</p>
        </>
    );
}

export default Page1;