import {Breadcrumbs, Link} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {FC} from "react";
import {Crumb} from "../types/breadcrumb.types";
import {CrumbsContainer} from "../styles/common.styles";

type Props = {
    crumbs: Crumb[]
}

export const BreadcrumbComponent: FC<Props> = ({crumbs}) => {
    const navigate = useNavigate();

    const handleNavigate = (dest: string) => {
        navigate(dest)
    }

    return (
        <CrumbsContainer>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {
                    crumbs.map((crumb) => {
                        return (
                            <Link
                                key={crumb.route}
                                color="var(--primary-highlight)"
                                underline="hover"
                                onClick={() => handleNavigate(crumb.route)}>
                                {crumb.label}
                            </Link>
                        )
                    })
                }
            </Breadcrumbs>
        </CrumbsContainer>)
}