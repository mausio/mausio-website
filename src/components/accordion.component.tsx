import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {FC} from "react";

type Props = {
    title: string,
    text: string
}

export const AccordionComponent: FC<Props> = ({title, text}) => {

    const texts = text.split('\n')

    return (<Accordion
            style={{borderRadius: "10px"}}
            className={"accordion"}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                className={"accordionSummary"}>
                <Typography className={"accordionTitle"}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                className={"accordionDetails"}>
                {texts.map((txt) =>
                    <Typography
                        key={txt}
                        className={"accordionText"}>{txt}
                    </Typography>)}
            </AccordionDetails>
        </Accordion>
    )
}