import {AutocompleteTitle, BorderContainer, HomeInset, HomeSearch} from "../styles/home.styles"
import {Autocomplete} from "@mui/material";
import {TextField} from "@material-ui/core";
import {DefaultSearchboxData} from "../data/searchbox.data";
import {useNavigate} from "react-router-dom";
import {SearchBox} from "../types/search.types";
import {MeKeyWords} from "./thatsMe.component";
import {findMatchingSearch, transformKeyWords} from "../utils/search.utils";
import {SyntheticEvent, useState} from "react";
import {ImprintKeyWords} from "./imprint.component";
import {MediaKeyWords} from "./mediaLinks.component";


const HomeComponent = () => {
    const navigate = useNavigate();
    const [searchData, setSearchData] = useState<SearchBox[]>(DefaultSearchboxData)

    const handleNavigate = (dest: string | null | SearchBox) => {
        if (typeof dest === "string") {
            navigate(dest)
        } else if (dest != null && dest.label !== null) {
            navigate(dest.route)
        }
    }

    const summarizedSearchData = [
        ...DefaultSearchboxData,
        ...transformKeyWords([
            MeKeyWords,
            ImprintKeyWords,
            MediaKeyWords
        ])]

    const handleSearchValue = (_: SyntheticEvent, v: string) => {
        if (v.length > 1 && searchData !== summarizedSearchData) {
            setSearchData(summarizedSearchData)
            return
        } else if (searchData !== DefaultSearchboxData) {
            setSearchData(DefaultSearchboxData)
        }
        return
    }

    return (
        <HomeInset>
            <HomeSearch>
                <BorderContainer>
                    <AutocompleteTitle>
                        {/*TODO: Decide if sentence fits: "Type in anything you want and we will go there"*/}
                        Type in anything and we will go there
                    </AutocompleteTitle>
                    {/*TODO: Handle if word/route does not exist -> modal with error*/}
                    <Autocomplete
                        options={searchData}
                        freeSolo
                        disablePortal
                        sx={{maxWidth: 280, color: "white"}}
                        onInputChange={(e, v) => {
                            handleSearchValue(e, v)
                        }}
                        onChange={(_, dest) => {
                            handleNavigate(findMatchingSearch(searchData, dest))
                        }}
                        renderInput={(params) =>
                            <TextField {...params} label="Search"/>}
                    />
                </BorderContainer>
            </HomeSearch>
        </HomeInset>
    )
}

export default HomeComponent