import {Outlet, useNavigate} from "react-router-dom";
import {
    FooterContainer,
    FooterLinks,
    LogoContainer,
    LogoTitle,
} from "../styles/nav.styles";
import {APP_ROUTES} from "../routes/routes";
import {BackgroundComponent} from "./background.component";
``
const NavigationComponent = () => {
    const navigate = useNavigate();

    const handleNavigate = (dest: string) => {
        navigate(dest)
    }

    return (<>
        <LogoContainer>
            <LogoTitle onClick={() => handleNavigate(APP_ROUTES.home)}>
                Robin Schwenzfeier
            </LogoTitle>
        </LogoContainer>
        <Outlet/>
        <FooterContainer>
            <div>
                <FooterLinks
                    onClick={() => handleNavigate(APP_ROUTES.home)}>Home</FooterLinks>
                <p> | </p>
                <FooterLinks
                    onClick={() => handleNavigate(APP_ROUTES.imprint)}>Imprint</FooterLinks>
            </div>
        </FooterContainer>
        <BackgroundComponent/>
    </>)
}

export default NavigationComponent