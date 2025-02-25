import styled from "styled-components";

export const CommonWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
`

export const CommonContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 420px;

  @media (min-width: 1000px) {
    max-width: 900px;
  }
`

export const CommonLimiter = styled.div`
max-width: 420px;
`

export const CommonContainerWithBackground = styled.div`
  background-color: var(--opacity-background);
  backdrop-filter: blur(3px);
  padding: 10px;
  margin: 5px;
  border-radius: 15px;
  width: auto;
  overflow: hidden;
`

export const CommonSiteTitle = styled.h2`
  margin: 0 0 0 16px;
`

export const Paragraph = styled.p`
  margin: 4px 4px 4px 4px;
  text-align: justify;
`

export const CommonSpacer = styled.div`
  padding: 10px;
`

export const CrumbsContainer = styled.div`
  margin: 0 0 10px 10px;
`