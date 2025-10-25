import React from "react"
import {
  VStack,
  HStack,
  Text,
  Button,
  Divider,
  Textarea,
  SimpleGrid,
} from "@chakra-ui/react"
import { AddIcon, CloseIcon } from "@chakra-ui/icons"
import {
  AlertType,
  addAlert,
  clearAlerts,
  clearDontShowAgainList,
  removeAlertBySource,
} from "../lib/alerts"
import { useScreenSize } from "../hooks/useScreenSize";

export default function AlertsShowcase() {
  const { isLandscape } = useScreenSize();
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
    addAlert(AlertType.INFO, "File", "This is an file info alert")
    addAlert(AlertType.ERROR, "File", "This is an file error alert")
    addAlert(AlertType.WARNING, "File", "This is an file warning alert")
    addAlert(AlertType.SUCCESS, "File", "This is an file success alert")
    addAlert(AlertType.INFO, "Database", "This is an database info alert")
    addAlert(AlertType.ERROR, "Database", "This is an database error alert")
    addAlert(AlertType.WARNING, "Database", "This is an database warning alert")
    addAlert(AlertType.SUCCESS, "Database", "This is an database success alert")
    addAlert(AlertType.INFO, "API", "This is an api info alert")
    addAlert(AlertType.ERROR, "API", "This is an api error alert")
    addAlert(AlertType.WARNING, "API", "This is an api warning alert")
    addAlert(AlertType.SUCCESS, "API", "This is an api success alert")
    addAlert(AlertType.INFO, "User", "This is an user info alert")
    addAlert(AlertType.ERROR, "User", "This is an user error alert")
    addAlert(AlertType.WARNING, "User", "This is an user warning alert")
    addAlert(AlertType.SUCCESS, "User", "This is an user success alert")
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
    clearDontShowAgainList()
  }

  const addDontShowAgainAlert = () => {
    addAlert(
      AlertType.INFO,
      "Alert One",
      "Click the checkbox to prevent alert from popping once closed",
    )
    addAlert(
      AlertType.ERROR,
      "Alert Two",
      "Click the checkbox to prevent alert from popping once closed",
    )
    addAlert(
      AlertType.WARNING,
      "Alert Three",
      "Click the checkbox to prevent alert from popping once closed",
    )
    addAlert(
      AlertType.SUCCESS,
      "Alert Four",
      "Click the checkbox to prevent alert from popping once closed",
    )
    addAlert(
      AlertType.INFO,
      "Alert Five",
      "Click the checkbox to prevent alert from popping once closed",
    )
    addAlert(
      AlertType.ERROR,
      "Alert Six",
      "Click the checkbox to prevent alert from popping once closed",
    )
    addAlert(
      AlertType.WARNING,
      "Alert Seven",
      "Click the checkbox to prevent alert from popping once closed",
      47,
      0,
      true,
    )
    addAlert(
      AlertType.SUCCESS,
      "Alert Eight",
      "Click the checkbox to prevent alert from popping once closed",
      48,
      0,
      true,
    )
  }

  const addLengthErrorAlert = () => {
    const length = 5000
    const randomString = Array.from({ length }, () =>
      String.fromCharCode(Math.floor(Math.random() * (126 - 32 + 1)) + 32),
    ).join("")

    addAlert(AlertType.ERROR, "LengthError", randomString)
  }

  return (
    <SimpleGrid columns={isLandscape ? 3 : 1} gap={4}>
      <VStack
        bg="white"
        boxShadow="md"
        borderRadius="0.5em"
        padding="1em"
        justifyContent="space-between"
        height={isLandscape ? "full" : "auto"}
        overflowY={isLandscape ? "auto" : "hidden"}
      >
        <VStack width="100%">
          <HStack justifyContent="space-between" width="100%">
            <Text>Add Info Alert</Text>
            <Button onClick={addInfoAlert}>
              <AddIcon />
            </Button>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Add Error Alert</Text>
            <Button onClick={addErrorAlert}>
              <AddIcon />
            </Button>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Add Warning Alert</Text>
            <Button onClick={addWarningAlert}>
              <AddIcon />
            </Button>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Add Success Alert</Text>
            <Button onClick={addSuccessAlert}>
              <AddIcon />
            </Button>
          </HStack>
          <Divider borderWidth="2px" borderColor="black" borderRadius="full" />
          <HStack justifyContent="space-between" width="100%">
            <Text>Add One of Each Alert</Text>
            <Button onClick={addOneOfEachAlert}>
              <AddIcon />
            </Button>
          </HStack>
        </VStack>
        <VStack width="100%">
          <HStack justifyContent="space-between" width="100%">
            <Text>Clear All Alerts</Text>
            <Button onClick={clearAllAlerts}>
              <CloseIcon />
            </Button>
          </HStack>
        </VStack>
      </VStack>
      <VStack
        bg="white"
        boxShadow="md"
        borderRadius="0.5em"
        width="100%"
        padding="1em"
        justifyContent="space-between"
      >
        <VStack width="100%">
          <HStack justifyContent="space-between" width="100%">
            <Text>Add Alerts w/ 4 sources</Text>
            <HStack>
              <Button
                onClick={addAlertsWith4Sources}
              >
                <AddIcon />
              </Button>
            </HStack>
          </HStack>
          <Divider borderWidth="2px" borderColor="black" borderRadius="full" />
          <HStack justifyContent="space-between" width="100%">
            <Text>Add Timed Alerts</Text>
            <Button onClick={addTimedAlerts}>
              <AddIcon />
            </Button>
          </HStack>
          <Divider borderWidth="2px" borderColor="black" borderRadius="full" />
          <HStack justifyContent="space-between" width="100%">
            <Text>Add Length Error Alert</Text>
            <Button
              onClick={addLengthErrorAlert}
            >
              <AddIcon />
            </Button>
          </HStack>
          <Textarea
            bg="white"
            boxShadow="md"
            flex={1}
            minHeight="10em"
            padding="0.5em"
            textAlign="left"
            alignItems="flex-start"
            overflowY="auto"
            whiteSpace="pre-wrap"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(0,0,0,0.2)",
                borderRadius: "24px",
              },
            }}
          />
        </VStack>
        <VStack width="100%">
          <HStack justifyContent="space-between" width="100%">
            <Text>Clear File Alerts</Text>
            <Button onClick={clearFileAlerts}>
              <CloseIcon />
            </Button>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Clear Database Alerts</Text>
            <Button
              onClick={clearDatabaseAlerts}
            >
              <CloseIcon />
            </Button>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Clear API Alerts</Text>
            <Button onClick={clearApiAlerts}>
              <CloseIcon />
            </Button>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text>Clear User Alerts</Text>
            <Button onClick={clearUserAlerts}>
              <CloseIcon />
            </Button>
          </HStack>
          <Divider borderWidth="2px" borderColor="black" borderRadius="full" />
          <HStack justifyContent="space-between" width="100%">
            <Text>Clear All Alerts</Text>
            <Button onClick={clearAllAlerts}>
              <CloseIcon />
            </Button>
          </HStack>
        </VStack>
      </VStack>
      <VStack
        bg="white"
        boxShadow="md"
        borderRadius="0.5em"
        width="100%"
        padding="1em"
        justifyContent="space-between"
      >
        <VStack width="100%">
          <HStack justifyContent="space-between" width="100%">
            <Text>Add Dont Show Again Alerts</Text>
            <Button
              onClick={addDontShowAgainAlert}
            >
              <AddIcon />
            </Button>
          </HStack>
        </VStack>
        <VStack width="100%">
          <HStack justifyContent="space-between" width="100%">
            <Text>Clear Don{"'"}t Show Again State</Text>
            <Button
              onClick={clearDontShowAgainState}
            >
              <CloseIcon />
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </SimpleGrid>
  )
}
