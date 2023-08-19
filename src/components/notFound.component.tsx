import Lottie from "react-lottie-player"
import corgiBallon from "../static/lottie/corgi.json"
import {
    LottieContainer,
    NotFoundContainer, NotFoundMessage,
    NotFoundTitle
} from "../styles/notFound.styles"


const NotFoundComponent = () => {

    return (<NotFoundContainer>
        <NotFoundTitle>
            404
        </NotFoundTitle>
        <LottieContainer>
            <Lottie
                loop
                animationData={corgiBallon}
                play
                style={{width: 350, height: 350, position: "relative", left: "10px"}}
            />
        </LottieContainer>
        <NotFoundMessage>
            something went wrong
        </NotFoundMessage>
    </NotFoundContainer>)
}


export default NotFoundComponent