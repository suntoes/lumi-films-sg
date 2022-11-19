import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const ChildBioYear = styled.span`
  font-weight: bold;
`

export const ParentBioYear = styled.div`
  display: inline-block;
  text-align: left;
  min-width: 4.5em;
  padding-left: 3.5em;
  margin-right: 1em;
`

export const BioYear = ({children}) => (
  <ParentBioYear>
    <ChildBioYear>
      {children}
    </ChildBioYear>
  </ParentBioYear>
)
