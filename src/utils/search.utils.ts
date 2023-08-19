import {KeyWords, SearchBox} from "../types/search.types";

export const transformKeyWords = (keyWords: KeyWords[]): SearchBox[] => {
    const newSearchData: SearchBox[] = []

    keyWords.map((words) => {
        if (words) {
            words.labels.forEach((item) => {
                newSearchData.push({
                    label: item,
                    route: words.route
                } as SearchBox)
            })
        }
    })
    return newSearchData
}

export const findMatchingSearch = (searchIndex: SearchBox[], dest: string | SearchBox | null): null | string => {

    if (typeof dest === "string" && dest) {

        const matchingSearch: string | undefined = searchIndex.find((item) => item.label.toLowerCase() === dest.toLowerCase())?.route || searchIndex.find((item) => item.label.toLowerCase().includes(dest.toLowerCase()))?.route

        if (matchingSearch) {
            return matchingSearch
        }
    }

    if (typeof dest === "object" && dest && dest.label) {

        const matchingSearch: string | undefined = searchIndex.find((item) => item.label.toLowerCase() === dest.label.toLowerCase())?.route || searchIndex.find((item) => item.label.toLowerCase().includes(dest.label.toLowerCase()))?.route

        if (matchingSearch) {
            return matchingSearch
        }
    }

    return null
}