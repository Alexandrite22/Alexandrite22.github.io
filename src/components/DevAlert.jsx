import React from "react"
import styled from "@emotion/styled"
import { FaPlus, FaTimes } from "react-icons/fa"
import {
  AlertType,
  addAlert,
  clearAlerts,
  clearDontShowAgain,
  removeAlertBySource,
} from "../lib/alerts"
import { useResponsiveSizes, useScreenSize } from "../hooks/useScreenSize"
import { Text } from "./ui/Typography"

// Styled Components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.gap};
  min-height: 100%;
  width: 100%;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
  background-color: ${props => props.theme.colors.ui.border.light}; // Using theme border color instead of black
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
  
  // Handlers
  const addInfoAlert = () => {
    addAlert(AlertType.INFO, "INFO", "This is an info alert")
  }

  const addErrorAlert = () => {
    addAlert(AlertType.ERROR, "ERROR", "This is an error alert")
  }

  const addWarningAlert = () => {
    addAlert(AlertType.WARNING, "WARNING", "This is a warning alert")
  }

  const addSuccessAlert = () => {
    addAlert(AlertType.SUCCESS, "SUCCESS", "This is a success alert")
  }

  const addOneOfEachAlert = () => {
    addInfoAlert()
    addErrorAlert()
    addWarningAlert()
    addSuccessAlert()
  }

  const clearAllAlerts = () => {
    clearAlerts()
  }

  const addAlertsWith4Sources = () => {
    const sources = ["File", "Database", "API", "User"]
    const types = [AlertType.INFO, AlertType.ERROR, AlertType.WARNING, AlertType.SUCCESS]
    
    sources.forEach(source => {
      types.forEach(type => {
        addAlert(type, source, `This is an ${source.toLowerCase()} ${type} alert`)
      })
    })
  }

  const clearFileAlerts = () => {
    removeAlertBySource("File")
  }

  const clearDatabaseAlerts = () => {
    removeAlertBySource("Database")
  }

  const clearApiAlerts = () => {
    removeAlertBySource("API")
  }

  const clearUserAlerts = () => {
    removeAlertBySource("User")
  }

  const addTimedAlerts = () => {
    addAlert(
      AlertType.SUCCESS,
      "Timer",
      "This Success Alert will self-destruct in 20 seconds",
      20,
    )
    addAlert(
      AlertType.WARNING,
      "Timer",
      "This Warning Alert will self-destruct in 15 seconds",
      15,
    )
    addAlert(
      AlertType.ERROR,
      "Timer",
      "This Error Alert will self-destruct in 10 seconds",
      10,
    )
    addAlert(
      AlertType.INFO,
      "Timer",
      "This Info Alert will self-destruct in 5 seconds",
      5,
    )
  }

  const clearDontShowAgainState = () => {
    clearDontShowAgain()
  }

  const addDontShowAgainAlert = () => {
    const alerts = [
      { type: AlertType.INFO, source: "Alert One" },
      { type: AlertType.ERROR, source: "Alert Two" },
      { type: AlertType.WARNING, source: "Alert Three" },
      { type: AlertType.SUCCESS, source: "Alert Four" },
      { type: AlertType.INFO, source: "Alert Five" },
      { type: AlertType.ERROR, source: "Alert Six" },
    ]

    alerts.forEach(({ type, source }) => {
      addAlert(
        type,
        source,
        "Click the checkbox to prevent alert from popping once closed"
      )
    })

    // Adapted calls for special args
    addAlert(
      AlertType.WARNING,
      "Alert Seven",
      "Click the checkbox to prevent alert from popping once closed",
      47,
      true, // dontShowAgain
    )
    addAlert(
      AlertType.SUCCESS,
      "Alert Eight",
      "Click the checkbox to prevent alert from popping once closed",
      48,
      true, // dontShowAgain
    )
  }

  const addLengthErrorAlert = () => {
    const length = 5000
    const randomString = Array.from({ length }, () =>
      String.fromCharCode(Math.floor(Math.random() * (126 - 32 + 1)) + 32),
    ).join("")

    addAlert(AlertType.ERROR, "LengthError", randomString)
  }

  // Button props for reuse
  const buttonProps = {
    padding: respXS,
    borderRadius: respXS,
  }

  return (
    <GridContainer gap={respXS} borderRadius={respXS}>
      {/* Column 1 */}
      <Card padding={respXS} borderRadius={`0rem ${respXS} ${respXS} ${respXS}`}>
        <FlexColumn gap={respXS}>
          <FlexRow>
            <Text>Add Info Alert</Text>
            <StyledButton onClick={addInfoAlert} {...buttonProps}>
              <FaPlus />
            </StyledButton>
          </FlexRow>
          <FlexRow>
            <Text>Add Error Alert</Text>
            <StyledButton onClick={addErrorAlert} {...buttonProps}>
              <FaPlus />
            </StyledButton>
          </FlexRow>
          <FlexRow>
            <Text>Add Warning Alert</Text>
            <StyledButton onClick={addWarningAlert} {...buttonProps}>
              <FaPlus />
            </StyledButton>
          </FlexRow>
          <FlexRow>
            <Text>Add Success Alert</Text>
            <StyledButton onClick={addSuccessAlert} {...buttonProps}>
              <FaPlus />
            </StyledButton>
          </FlexRow>
          <StyledDivider margin={respXS} />
          <FlexRow>
            <Text>Add One of Each Alert</Text>
            <StyledButton onClick={addOneOfEachAlert} {...buttonProps}>
              <FaPlus />
            </StyledButton>
          </FlexRow>
        </FlexColumn>
        <FlexColumn>
          <FlexRow>
            <Text>Clear All Alerts</Text>
            <StyledButton onClick={clearAllAlerts} {...buttonProps}>
              <FaTimes />
            </StyledButton>
          </FlexRow>
        </FlexColumn>
      </Card>

      {/* Column 2 */}
      <Card padding={respXS} borderRadius={respXS}>
        <FlexColumn gap={respXS}>
          <FlexRow>
            <Text>Add Alerts w/ 4 sources</Text>
            <StyledButton onClick={addAlertsWith4Sources} {...buttonProps}>
              <FaPlus />
            </StyledButton>
          </FlexRow>
          <StyledDivider margin={respXS} />
          <FlexRow>
            <Text>Add Timed Alerts</Text>
            <StyledButton onClick={addTimedAlerts} {...buttonProps}>
              <FaPlus />
            </StyledButton>
          </FlexRow>
          <StyledDivider margin={respXS} />
          <FlexRow>
            <Text>Add Length Error Alert</Text>
            <StyledButton onClick={addLengthErrorAlert} {...buttonProps}>
              <FaPlus />
            </StyledButton>
          </FlexRow>
          <StyledTextarea
            padding={respXS}
            borderRadius={respXS}
            readOnly
            placeholder="Alert logs or content could go here..."
          />
        </FlexColumn>
        <FlexColumn gap={respXS}>
          <FlexRow>
            <Text>Clear File Alerts</Text>
            <StyledButton onClick={clearFileAlerts} {...buttonProps}>
              <FaTimes />
            </StyledButton>
          </FlexRow>
          <FlexRow>
            <Text>Clear Database Alerts</Text>
            <StyledButton onClick={clearDatabaseAlerts} {...buttonProps}>
              <FaTimes />
            </StyledButton>
          </FlexRow>
          <FlexRow>
            <Text>Clear API Alerts</Text>
            <StyledButton onClick={clearApiAlerts} {...buttonProps}>
              <FaTimes />
            </StyledButton>
          </FlexRow>
          <FlexRow>
            <Text>Clear User Alerts</Text>
            <StyledButton onClick={clearUserAlerts} {...buttonProps}>
              <FaTimes />
            </StyledButton>
          </FlexRow>
          <StyledDivider margin={respXS} />
          <FlexRow>
            <Text>Clear All Alerts</Text>
            <StyledButton onClick={clearAllAlerts} {...buttonProps}>
              <FaTimes />
            </StyledButton>
          </FlexRow>
        </FlexColumn>
      </Card>

      {/* Column 3 */}
      <Card padding={respXS} borderRadius={respXS}>
        <FlexColumn gap={respSM}>
          <FlexRow>
            <Text>Add Dont Show Again Alerts</Text>
            <StyledButton onClick={addDontShowAgainAlert} {...buttonProps}>
              <FaPlus />
            </StyledButton>
          </FlexRow>
        </FlexColumn>
        <FlexColumn gap={respSM}>
          <FlexRow>
            <Text>Clear Don't Show Again State</Text>
            <StyledButton onClick={clearDontShowAgainState} {...buttonProps}>
              <FaTimes />
            </StyledButton>
          </FlexRow>
        </FlexColumn>
      </Card>
    </GridContainer>
  )
}
