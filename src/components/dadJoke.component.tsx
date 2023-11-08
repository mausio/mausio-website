import {HomeInset, HomeSearch} from "../styles/home.styles.ts";
import {useEffect, useState} from "react";
import {BorderContainer} from "../styles/dadJoke.styles.ts";
import { useLongPress } from "@uidotdev/usehooks";


const DadJokeComponent = () => {
    const [joke, setJoke] = useState();

    function callDadJoke() {
        const request = new XMLHttpRequest();
        request.onload = function () {
            const joke = JSON.parse(request.response);
            setJoke(joke.joke);
        }
        request.open('GET', 'https://icanhazdadjoke.com/', true);
        request.setRequestHeader('Accept', 'application/json');
        request.send();
    }

    const attrs = useLongPress(
        () => {
            callDadJoke()
        },
        {
            threshold: 300,
        }
    );


    useEffect(() => {
        callDadJoke();
    }, [])


    return (
        <HomeInset>
            <HomeSearch>
                <BorderContainer style={{padding: "10px 10px 6px 10px"}}  {...attrs}>
                    <BorderContainer className={"update"} style={{padding: "40px 26px 40px 26px"}}>
                        <p>{joke}</p>
                    </BorderContainer>
                    <p style={{
                        padding: "5px 0px 0px 0px",
                        textAlign: "center",
                        color: "var(--secondary-light)",
                        opacity: "0.8"
                    }}>long press for a new joke</p>
                </BorderContainer>
            </HomeSearch>
        </HomeInset>
    )
}


export default DadJokeComponent

