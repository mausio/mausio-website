import {Crumb} from "../types/breadcrumb.types";
import {APP_ROUTES} from "../routes/routes";
import {KeyWords} from "../types/search.types";
import {BreadcrumbComponent} from "./breadcrumb.component";
import {CommonContainer, CommonSpacer, CommonWrapper} from "../styles/common.styles";
import {Bubble, ChatContainer, Instagram} from "../styles/media.styles";
import InstaPic from "../static/img/insta.png";

const crumbs: Crumb[] = [
    {label: "Home", route: APP_ROUTES.home},
    {label: "Media Links", route: APP_ROUTES.mediaLinks}
]


export const MediaKeyWords: KeyWords = {
    labels: ["Contact", "Get In Touch", "Mail", "LinkedIn", "Telegram", "Instagram", "Twitter", "Threads", "Reddit", "Social Media", "Soziale Medien", "Kontakt", "Text Me"],
    route: APP_ROUTES.mediaLinks
}

const MediaLinksComponent = () => {

    return (
        <CommonWrapper>
            <CommonContainer>
                <CommonSpacer>
                    <BreadcrumbComponent crumbs={crumbs}/>
                    <ChatContainer>
                        <Bubble className={"left"}>
                            Hey!
                            <br/>
                            Look me up on social media and/or contact me:
                            <br/>
                        </Bubble>
                        <Instagram/>
                        <img src={InstaPic}/>
                    </ChatContainer>
                </CommonSpacer>
            </CommonContainer>
        </CommonWrapper>)
}

export default MediaLinksComponent;
