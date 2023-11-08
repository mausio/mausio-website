import {BackgroundAnimation} from "../styles/background.styles";


export const BackgroundComponent = () => {

    const spanArray: number[] = [];

    for (let i = 0; i<50; i++){
        spanArray[i] = 1;
    }

    return (
        <BackgroundAnimation>
            <div className="background">
                {spanArray.map((i)=>{
                    console.log(i)
                    return <span></span>
                })}
            </div>
        </BackgroundAnimation>
    )
}