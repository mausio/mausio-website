import {RatingLabel} from "../types/person.types";
import {FC} from "react";
import {Paragraph} from "../styles/common.styles";
import {RatingBoxContainer} from "../styles/person.styles";
import {Box, Rating, Typography} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

type Props = {
    ratings: RatingLabel[],
    title: string
}

export const RatingComponent: FC<Props> = ({title, ratings}) => {

    return (<>
        <Paragraph>
            {title}
        </Paragraph>
        <RatingBoxContainer>
            {ratings.map((item) => {
                return (
                    <div key={item.label}>
                        <Box>
                            <Typography
                                className={"ratingTypography"}
                                component="legend">
                                {item.label}
                            </Typography>
                            <Rating
                                className={"ratingColor"}
                                value={item.level}
                                precision={0.5}
                                size={"small"}
                                max={3}
                                icon={<CircleIcon
                                    fontSize="inherit"/>}
                                emptyIcon={
                                    <CircleOutlinedIcon
                                        fontSize="inherit"/>}
                                readOnly/>
                        </Box>
                    </div>
                )
            })}
        </RatingBoxContainer>
    </>)
}