import {RatingLabel} from "../types/person.types";
import {FC, useState} from "react";
import {Paragraph} from "../styles/common.styles";
import {RatingBoxContainer} from "../styles/person.styles";
import {Box, Rating, Tooltip, Typography} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

type Props = {
    ratings: RatingLabel[],
    title: string
}

const labels: { [index: string]: string } = {
    1: 'Some Experience',
    2: 'Advanced Experience',
    3: 'In-depth Knowledge',
};

export const RatingComponent: FC<Props> = ({title, ratings}) => {
    const [tipValue, setTipValue] = useState(2);

    return (<>
        <Paragraph>
            {title}
        </Paragraph>
        <RatingBoxContainer>
            {ratings.map((item) => {
                return (
                    <div key={item.label}>
                        <Tooltip title={labels[Math.round(tipValue)]} followCursor>
                            <Box>
                                <Typography
                                    className={"ratingTypography"}
                                    component="legend">
                                    {item.label}
                                </Typography>
                                <Rating
                                    className={"ratingColor"}
                                    value={item.level}
                                    onChangeActive={(_, newHover) => {
                                        setTipValue(newHover);
                                    }}
                                    precision={0.5}
                                    size={"small"}
                                    max={3}
                                    icon={<CircleIcon
                                        fontSize="inherit"/>}
                                    emptyIcon={
                                        <CircleOutlinedIcon
                                            fontSize="inherit"/>
                                    }
                                    />

                            </Box>
                        </Tooltip>
                    </div>
                )
            })}
        </RatingBoxContainer>
    </>)
}