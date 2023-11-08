import {
    CommonContainer,
    CommonContainerWithBackground,
    CommonLimiter,
    CommonSpacer,
    CommonWrapper,
    Paragraph,
} from "../styles/common.styles";
import {InfoContainer, SectionContainer, SectionTitle,} from "../styles/imprint.styles";
import {BreadcrumbComponent} from "./breadcrumb.component";
import {Crumb} from "../types/breadcrumb.types";
import {APP_ROUTES} from "../routes/routes";
import {KeyWords} from "../types/search.types";

const crumbs: Crumb[] = [
    {label: "Home", route: APP_ROUTES.home},
    {label: "Imprint", route: APP_ROUTES.imprint}
]


export const ImprintKeyWords: KeyWords = {
    labels: ["Recht", "Inhaber", "Owner", "Legal", "Impressum", "Disclaimer"],
    route: APP_ROUTES.imprint
}

const ImprintComponent = () => {

    return (<>
        <CommonWrapper>
            <CommonLimiter>
                <CommonContainer>
                    <CommonSpacer>
                        <BreadcrumbComponent crumbs={crumbs}/>
                        <CommonContainerWithBackground>
                            <SectionContainer>
                                <SectionTitle>Disclaimer: </SectionTitle>
                                <Paragraph>This is a private website that is
                                    dedicated to
                                    creating a portrait of me and my portfolio. Feel
                                    free to
                                    contact me in any way.</Paragraph>
                            </SectionContainer>
                            <SectionContainer>
                                <SectionTitle>Contact Information: </SectionTitle>
                                <InfoContainer>
                                    <Paragraph>Name: </Paragraph>
                                    <Paragraph> Robin Schwenzfeier</Paragraph>
                                    <Paragraph>Mail: </Paragraph>
                                    <Paragraph><a
                                        href={"mailto:hello@mausio.eu"}>hello@mausio.eu</a>
                                    </Paragraph>
                                    <Paragraph>LinkedIn: </Paragraph>
                                    <Paragraph><a
                                        href={"https://www.linkedin.com/in/robin-schwenzfeier-954294236/"}>
                                        linkedin.com/in/robin-schwenzfeier</a>
                                    </Paragraph>
                                </InfoContainer>
                            </SectionContainer>
                        </CommonContainerWithBackground>
                    </CommonSpacer>
                </CommonContainer>
            </CommonLimiter>
        </CommonWrapper>
    </>)
}

export default ImprintComponent