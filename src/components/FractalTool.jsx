import React from "react"
import styled from "@emotion/styled"
import { FaPlus } from "react-icons/fa"
import { useResponsiveSizes, useScreenSize } from "../hooks/useScreenSize"
import { Text } from "./ui/Typography"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.isLandscape ? 'repeat(2, 1fr)' : '1fr')};
  gap: ${props => props.gap};
  min-height: 100%;
  width: 100%;
`

const Card = styled.div`
  background-color: ${(props) => props.theme.colors['background-card']};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: ${props => props.borderRadius};
  height: 100%;
  padding: ${props => props.padding};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${props => props.gap || '0.5rem'};
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${props => props.gap || '0.5rem'};
`

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.brand.primary};
  color: white;
  border: none;
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding}; // simplistic padding, maybe use responsive values
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
  min-width: 2rem; 
  min-height: 2rem;

  &:hover {
    opacity: 0.8;
  }
  
  svg {
    width: 1em;
    height: 1em;
  }
`

const StyledDivider = styled.div`
  height: 2px;
  background-color: ${props => props.theme.colors.ui.border.light};
  border-radius: 999px;
  width: 100%;
  margin: ${props => props.margin} 0;
`

const StyledTextarea = styled.textarea`
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.ui.border.light};
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  min-height: 10em;
  width: 100%;
  resize: vertical;
  font-family: inherit;
  flex: 1;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2);
    border-radius: 24px;
  }
`

export default function DevAlert() {
  const { respSM, respMD, respXS } = useResponsiveSizes()
  const { isLandscape } = useScreenSize()

  // Button props for reuse
  const buttonProps = {
    padding: respXS,
    borderRadius: respXS,
  }

  return (
    <GridContainer gap={respXS} borderRadius={respXS} isLandscape={isLandscape} overflow={isLandscape ? 'visible' : 'hidden'}>
      {/* Column 1 */}
      <Card padding={respXS} borderRadius={`0rem ${respXS} ${respXS} ${respXS}`}>
        <FlexColumn gap={respXS}>
          <FlexRow>
            <Text>Upload Fractal Settings</Text>
            <StyledButton {...buttonProps}>
              <FaPlus />
            </StyledButton>
          </FlexRow>
        </FlexColumn>
      </Card>

      {/* Column 2 */}
      <Card padding={respXS} borderRadius={respXS}>
        <FlexColumn gap={respXS}>
          
        </FlexColumn>
        <StyledDivider margin={respXS} />
        <FlexColumn gap={respXS}>
          
        </FlexColumn>
      </Card>
    </GridContainer>
  )
}
