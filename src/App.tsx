import NavigationComponent from "./components/navigation.component.tsx";
import {Route, Routes} from "react-router-dom";
import HomeComponent from "./components/home.component.tsx";
import {APP_ROUTES} from "./routes/routes.ts";
import ImprintComponent from "./components/imprint.component.tsx";
import ThatsMe from "./components/thatsMe.component.tsx";
import MediaLinksComponent from "./components/mediaLinks.component.tsx";
import NotFoundComponent from "./components/notFound.component.tsx";
import ConstructionComponent from "./components/construction.component.tsx";
import DadJokeComponent from "./components/dadJoke.component.tsx";

function App() {


    return (
        <Routes>
            <Route path="/" element={<NavigationComponent/>}>
                <Route index element={<HomeComponent/>}/>
                <Route path={APP_ROUTES.imprint}
                       element={<ImprintComponent/>}/>
                <Route path={APP_ROUTES.person}
                       element={<ThatsMe/>}/>
                <Route path={APP_ROUTES.mediaLinks}
                       element={<MediaLinksComponent/>}/>
                <Route path={APP_ROUTES.portfolio}
                       element={<ConstructionComponent/>}/>
                <Route path={APP_ROUTES.dadJoke} element={<DadJokeComponent/>}/>

                {/*TODO: Make External Link Component dynamic*/}
                <Route path={APP_ROUTES.linkedIn.url}
                       element={<RedirectLinkedIn/>}/>

                {/* TODO: Masonry image list from Materiul UI for Portfolio*/}
                {/*TODO: Media-/Linktree erstellen als MindMap*/}
                {/*TODO: Theme Switch einbauen*/}
                {/*TODO: Refactor static data into matching files and structure*/}
                {/*TODO: Delete dead code*/}
                {/*TODO: Add prettier */}
                {/*TODO: get rid off errors in console*/}
                {/*TODO: Mobile responsive*/}

                <Route path='*' element={<NotFoundComponent/>}/>
            </Route>
        </Routes>
    );
}


function RedirectLinkedIn() {
    window.location.replace(APP_ROUTES.linkedIn.externalUrl)
    return null;
}

export default App
