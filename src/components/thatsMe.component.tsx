import {
    CommonContainer, CommonContainerWithBackground,
    CommonSpacer,
    CommonWrapper,
    Paragraph,
} from "../styles/common.styles";
import Portrait from "../static/img/portrait-lucent.png"
import {
    AccordionsContainer, DegreesContainer, Introduction,
    PersonContainer,
    PortraitImg, RatingContainer,
    RatingSection,
    StepsContainer,
    SummaryContainer, TheDrive, WorkExperienceContainer
} from "../styles/person.styles";
import {
    Box, Card, CardContent,
    Step,
    StepLabel,
    Stepper, Typography,
} from "@mui/material";
import {APP_ROUTES} from "../routes/routes";
import {BreadcrumbComponent} from "./breadcrumb.component";
import {Crumb} from "../types/breadcrumb.types";
import SchoolIcon from '@mui/icons-material/School';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {SectionContainer, SectionTitle} from "../styles/imprint.styles";
import {AccordionComponent} from "./accordion.component";
import {RatingComponent} from "./rating.component";
import {AccordionContent, RatingLabel} from "../types/person.types";
import {KeyWords} from "../types/search.types";

const crumbs: Crumb[] = [
    {label: "Home", route: APP_ROUTES.home},
    {label: "That's me", route: APP_ROUTES.person}
]



const programmingLanguages: RatingLabel[] = [
    {
        label: "Typescript",
        level: 2.5
    }, {
        label: "JavaScript",
        level: 2.5
    }, {
        label: "HTML",
        level: 2
    }, {
        label: "CSS",
        level: 2
    }, {
        label: "Java",
        level: 1.5
    },
    {
        label: "Go",
        level: 1
    },
    {
        label: "Swift",
        level: 1
    }
]

const frameworks: RatingLabel[] = [
    {
        label: "React.js",
        level: 2
    },
    {
        label: "Next.js",
        level: 1.5
    }, {
        label: "Echo",
        level: 1
    }
]



const misc: RatingLabel[] = [
    {
        label: "Docker",
        level: 1
    }
]

const creativeArt: RatingLabel[] = [
    {
        label: "Final Cut Pro X",
        level: 2.5
    }, {
        label: "Photoshop",
        level: 2
    }, {
        label: "Adobe Premiere",
        level: 1.5
    }
]

const accordions: AccordionContent[] = [
    {
        title: '2022 Sept - now: SYNDIKAT7',
        text: "I began my studies with SYNDIKAT7 on the 1st of September 2022 and started developing progressive web apps with React, Javascript/Typescript, HTML/CSS, Golang and Echo." +
            "\n Besides that, I learned handling algorithms, basic syntax and semantic of Java during the theoretical part of my dual studies." +
            "\n Regarding projects at work, I've worked so far on internal projects like implementing a local search function in our docs and building a kind of link-/mediatree for handling links to the SYNDIKAT7-website and other social media platforms."
    },
]


export const MeKeyWords: KeyWords = {
    labels: ["SYNDIKAT7", "Work Experience", "CV",
        "About Me", "Portrait", "Tech Stacks", "Life",
        "Curriculum Vitae", "Motivation", "Drive", ],
    route: APP_ROUTES.person
}

const ThatsMe = () => {
    return (<>
        <CommonWrapper>
            <CommonContainer>
                <CommonSpacer>
                    <BreadcrumbComponent crumbs={crumbs}/>
                    <PersonContainer>
                        <SummaryContainer>
                            <CommonContainerWithBackground>
                                <Introduction>
                                    Hello there, I am a computer science student
                                    and
                                    in training to become a full stack
                                    developer. <br/>
                                    I am currently studying at DHBW
                                    Karlsruhe and mostly work on web tech in the
                                    working phase of my studies.
                                </Introduction>
                            </CommonContainerWithBackground>
                        </SummaryContainer>
                        <PortraitImg src={Portrait}/>
                        <TheDrive>
                            <CommonContainerWithBackground>
                                <SectionContainer>
                                    <SectionTitle>
                                        My Drive:
                                    </SectionTitle>
                                    <Card
                                        className={"card"}
                                        sx={{minWidth: 275}}>
                                        <CardContent>
                                            <Typography sx={{fontSize: 14}}
                                                        className={"darken"}
                                                        gutterBottom>
                                                Word of the Day
                                            </Typography>
                                            <Typography variant="h5"
                                                        className={"highlight"}
                                                        component="div">
                                                drīve
                                            </Typography>
                                            <Typography sx={{mb: 1.5}}
                                                        className={"darken"}>
                                                adjective
                                            </Typography>
                                            <Typography
                                                variant="body2">
                                                strong determination to do or
                                                achieve something
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Paragraph>
                                        What others call motivation or ambition
                                        I call drive. The drive to do sth. Why?
                                        Because in my opinion it fits best to
                                        describe a deep... drive of
                                        someone. <br/> <br/>
                                        Classics: <br/>
                                        When I was young I got in contact with
                                        electronics, automation and software.
                                        Suddenly, I wanted to know the way
                                        things work and wasn't satisfied just
                                        operating and controlling systems, but
                                        rather building, constructing, creating,
                                        designing, establishing software (and
                                        hardware).
                                        So many words just to describe what a
                                        software developer does. <br/> <br/>
                                        I was the first person in my family to
                                        achieve and complete the Abitur and I am
                                        going to be the first person in my
                                        family, who has an academic grade. <br/>
                                        This alone gives me satisfaction and
                                        the <span
                                        className={"highlight"}>drive</span>.
                                    </Paragraph>
                                </SectionContainer>
                            </CommonContainerWithBackground>
                        </TheDrive>
                        <DegreesContainer>
                            <CommonContainerWithBackground>
                                <SectionContainer>
                                    <SectionTitle>
                                        Degrees:
                                    </SectionTitle>
                                    <StepsContainer>
                                        <Box sx={{width: '100%'}}>
                                            <Stepper activeStep={2}
                                                     alternativeLabel>
                                                <Step>
                                                    <StepLabel
                                                        className={"lightStep"}
                                                        StepIconComponent={DoneIcon}>2019 <br/> Mittlere
                                                        Reife</StepLabel>
                                                </Step>
                                                <Step>
                                                    <StepLabel
                                                        className={"lightStep"}
                                                        StepIconComponent={DoneAllIcon}>2022 <br/>
                                                        Abitur</StepLabel>
                                                </Step>
                                                <Step>
                                                    <StepLabel
                                                        className={"greyStep"}
                                                        StepIconComponent={SchoolIcon}>2025 <br/> Bachelor</StepLabel>
                                                </Step>
                                            </Stepper>
                                        </Box>
                                    </StepsContainer>
                                    <Paragraph>
                                        In 2019 I completed my Mittlere Reife
                                        <span
                                            style={{color: "var(--secondary-color) "}}> (secondary school) </span> and
                                        continued with my
                                        Abitur <span
                                        style={{color: "var(--secondary-color) "}}> (high school diploma) </span> which
                                        I
                                        also completed in 2022.
                                        <br/>
                                        Soon after, I started my dual studies of
                                        computer science <span
                                        style={{color: "var(--secondary-color) "}}> -alternately work and
                                        study- </span>
                                        and work as a full stack developer.
                                    </Paragraph>
                                </SectionContainer>
                            </CommonContainerWithBackground>
                        </DegreesContainer>
                        <WorkExperienceContainer>
                            <CommonContainerWithBackground>
                                <SectionContainer>
                                    <SectionTitle>
                                        Work Experience:
                                    </SectionTitle>
                                    <Paragraph>
                                        In this section you can find detailed
                                        information about my work (and)
                                        experiences as
                                        a software developer.
                                    </Paragraph>
                                    <AccordionsContainer>
                                        {
                                            accordions.map((singleAccordion) => {
                                                return (
                                                    <AccordionComponent
                                                        title={singleAccordion.title}
                                                        text={singleAccordion.text}
                                                        key={singleAccordion.text}
                                                    />
                                                )
                                            })
                                        }
                                    </AccordionsContainer>
                                </SectionContainer>
                            </CommonContainerWithBackground>
                        </WorkExperienceContainer>
                        <RatingContainer>
                            <CommonContainerWithBackground>
                                <SectionContainer>
                                    <SectionTitle>
                                        Tech Stacks:
                                    </SectionTitle>
                                    <Paragraph className={"disclaimer"}>
                                        Disclaimer: The following is self rated.
                                    </Paragraph>
                                    <RatingSection>
                                        <RatingComponent
                                            ratings={programmingLanguages}
                                            title={"Programming/MarkUp Languages:"}/>
                                        <RatingComponent
                                            ratings={frameworks}
                                            title={"Frameworks: "}/>
                                        <RatingComponent
                                            ratings={creativeArt}
                                            title={"Creative and Art: "}/>
                                        <RatingComponent
                                            ratings={misc}
                                            title={"Misc: "}/>
                                    </RatingSection>
                                    <Paragraph>
                                        Something less measurable: I am advanced
                                        in handling
                                        normal consumer techs like Microsoft
                                        Office, Excel and Word for sure and
                                        operating systems like MacOS and Windows
                                        easily, as well as a little bit Linux
                                        and RaspberryOS. <br/>
                                        Furthermore, I am partly a electrical
                                        engineer as this was part of my school
                                        education of my Abitur.
                                    </Paragraph>
                                </SectionContainer>
                            </CommonContainerWithBackground>
                        </RatingContainer>

                        {/*TODO: Why I want to be a developer*/}
                        {/*TODO: Hobbies*/}
                    </PersonContainer>
                </CommonSpacer>
            </CommonContainer>
        </CommonWrapper>
    </>)
}

export default ThatsMe