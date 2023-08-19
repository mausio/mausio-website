import styled from "styled-components";


export const PortraitImg = styled.img`
  width: 150px;
  height: 190px;
  border-radius: 10px;
  object-fit: cover;
  filter: brightness(1.02);
  justify-self: end;
  grid-area: portrait;
  margin: 5px;
  padding: 0;
`

export const PersonContainer = styled.div`
  display: grid;

  grid-template-areas: 
  "summary portrait"
  "drive drive"
  "degrees degrees"
  "workExperience workExperience"
  "rating rating";

  grid-template-columns: auto;
  grid-template-rows: auto;
  margin: 5px;
  row-gap: 5px;
`

export const SummaryContainer = styled.div`
  grid-area: summary;
`

export const DegreesContainer = styled.div`
  grid-area: degrees;
`

export const WorkExperienceContainer = styled.div`
  grid-area: workExperience;
`

export const RatingContainer = styled.div`
  grid-area: rating;

  .disclaimer {
    color: var(--secondary-color);
    font-weight: 200;
    margin-bottom: 0;
  }
`

export const TheDrive = styled.div`
  grid-area: drive;

  .card {
    background-color: var(--tertiary-background) !important;
    color: var(--primary-color) !important;
    text-align: start !important;
    margin: 20px 15px;
    border-radius: 10px;
  }

  .highlight {
    color: var(--secondary-highlight);
  }

  .darken {
    color: var(--secondary-color) !important;
  }
`

export const Introduction = styled.p`
  margin: 4px 4px 4px 4px;
  height: auto;
  text-align: start;
`

export const StepsContainer = styled.div`
  margin: 15px 0;

  .lightStep {
    svg {
      color: var(--secondary-highlight) !important;
    }

    span {
      font-size: 0.8rem !important;
      color: var(--secondary-color) !important;
    }
  }

  .greyStep {
    svg {
      color: var(--tertiary-color) !important;
    }

    span {
      font-size: 0.8rem !important;
      color: var(--tertiary-color) !important;
    }
  }
`

export const AccordionsContainer = styled.div`
  margin: 14px 0;
  background-color: transparent;

  svg {
    color: var(--primary-color) !important;
  }

  .accordion {
    background-color: var(--tertiary-background);
    border-radius: 15px;
  }

  .accordionSummary {
    background-color: var(--tertiary-background);
    border-radius: 10px;
  }

  .accordionDetails {
    background-color: var(--tertiary-background);
    border-radius: 10px;
  }

  .accordionTitle {
    font-size: 0.8rem !important;
    color: var(--primary-color)
  }

  .accordionText {
    font-size: 0.9rem;
    color: var(--primary-color);
  }
`

export const RatingSection = styled.div`
  margin: 15px 0;

  .ratingColor {
    svg {
      fill: var(--primary-highlight) !important;
    }
  }

  .ratingTypography {
    font-size: 0.8rem;
  }
`

export const RatingBoxContainer = styled.div`
  margin: 10px 0 25px 10px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

`