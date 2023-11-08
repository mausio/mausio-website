import {
    ConstructionLottie,
    LottieContainer,
    NotFoundContainer,
    NotFoundMessage,
} from "../styles/notFound.styles.ts";
import Lottie from "react-lottie-player";
import phoneConstruction from "../static/lottie/phone_construction.json";

const ConstructionComponent = () => {

    return (<NotFoundContainer>
        <ConstructionLottie>
        <LottieContainer>
            <Lottie
                loop
                animationData={phoneConstruction}
                play
                style={{width: 350, height: 350, position: "relative", left: "10px"}}
            />
        </LottieContainer>
        </ConstructionLottie>
        <NotFoundMessage style={{color: "darkorange", fontWeight: "800", fontSize: "1.5em"}}>
            under construction
        </NotFoundMessage>
    </NotFoundContainer>)
}

export default ConstructionComponent