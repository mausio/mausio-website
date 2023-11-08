import {SearchBox} from "../types/search.types";
import {APP_ROUTES} from "../routes/routes";

export const DefaultSearchboxData: SearchBox[] = [
    {
        label: "Imprint",
        route: APP_ROUTES.imprint
    },
    {
        label: "Portfolio",
        route: APP_ROUTES.portfolio
    },
    {
        label: "Social Media",
        route: APP_ROUTES.mediaLinks
    },
    {
        label: "That's Me",
        route: APP_ROUTES.person
    },
    {
        label: "Dad joke",
        route: APP_ROUTES.dadJoke
    }
]
