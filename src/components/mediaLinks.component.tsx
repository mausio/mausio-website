import {Crumb} from "../types/breadcrumb.types";
import {APP_ROUTES} from "../routes/routes";
import {KeyWords} from "../types/search.types";
import {BreadcrumbComponent} from "./breadcrumb.component";
import {CommonContainer, CommonSpacer, CommonWrapper} from "../styles/common.styles";
import {Bubble, ChatContainer, LinkButton, LinksContainer, MediaSpacer,} from "../styles/media.styles";
import instaImg from '../static/img/insta.png'
import mailImg from '../static/img/mail.png'
import linkedInImg from '../static/img/linkedin.png'
import telegramImg from '../static/img/telegram.png'

const crumbs: Crumb[] = [
    {label: "Home", route: APP_ROUTES.home},
    {label: "Media Links", route: APP_ROUTES.mediaLinks}
]


export const MediaKeyWords: KeyWords = {
    labels: ["Contact", "Get In Touch", "Mail", "LinkedIn", "Telegram", "Instagram", "Twitter", "Threads", "Reddit", "Social Media", "Soziale Medien", "Kontakt", "Text Me"],
    route: APP_ROUTES.mediaLinks
}

type mediaLinksType = {
    label: string,
    url: string,
    img: string
}

const MediaLinks: mediaLinksType[] = [
    {
        label: "Instagram",
        url: "https://instagram.com/mausio.main",
        img: instaImg
    },
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/robin-schwenzfeier-954294236/",
        img: linkedInImg
    },
    {
        label: "Telegram",
        url: "https://t.me/mausio",
        img: telegramImg
    },
    {
        label: "Mail",
        url: "mailto:robin.schwenzfeier@icloud.com",
        img: mailImg
    }
]


const MediaLinksComponent = () => {

    return (
        <CommonWrapper>
            <CommonContainer>
                <CommonSpacer>
                    <BreadcrumbComponent crumbs={crumbs}/>
                    <MediaSpacer>
                        <ChatContainer>
                            <Bubble className={"left"}>
                                Hey!
                                <br/>
                                Look me up on social media and/or contact me:
                                <br/>
                            </Bubble>
                            <LinksContainer>
                                {MediaLinks.map((item) => {
                                    return (
                                        <a href={item.url}>
                                            <LinkButton>
                                                <img src={item.img} alt={`${item.label}-img`}/>
                                                <p>{item.label}</p>
                                            </LinkButton>
                                        </a>)
                                })}
                            </LinksContainer>
                        </ChatContainer>
                    </MediaSpacer>
                </CommonSpacer>
            </CommonContainer>
        </CommonWrapper>)
}

export default MediaLinksComponent;