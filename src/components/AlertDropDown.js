import React from "react"
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Text,
  Checkbox,
} from "@chakra-ui/react"
import { Alerts, DontShowAgainList } from "../lib/store"
import { removeAlertById, clearAlerts } from "../lib/alerts"
import { ChevronLeftIcon, ChevronRightIcon, CopyIcon } from "@chakra-ui/icons"

const AlertDropDown = () => {
  const [alerts] = Alerts.useState()
  const [dontShowAgainList, setDontShowAgainList] = DontShowAgainList.useState()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [copyLabel, setCopyLabel] = React.useState("Copy to clipboard")
  const [isChecked, setIsChecked] = React.useState(false)

  // Reset currentIndex if it becomes invalid
  React.useEffect(() => {
    if (currentIndex >= alerts.length && alerts.length > 0) {
      setCurrentIndex(alerts.length - 1)
    }
  }, [alerts.length, currentIndex])

  if (!alerts.length) {
    return null
  }

  const currentAlert = alerts[currentIndex]
  const totalAlerts = alerts.length

  const navigateNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalAlerts)
  }

  const navigatePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalAlerts) % totalAlerts)
  }

  const handleRemoveAlert = () => {
    setIsChecked(false)
    if (isChecked) {
      handleDontShowAgain(currentAlert.id)
    }
    removeAlertById(
      currentAlert.id,
      dontShowAgainList.includes(currentAlert.id),
    )
    if (currentIndex >= alerts.length - 1) {
      setCurrentIndex(Math.max(0, currentIndex - 1))
    }
  }

  const handleCopy = async () => {
    try {
      const textToCopy = `${currentAlert.source}\n${currentAlert.content}`
      await navigator.clipboard.writeText(textToCopy)
      setCopyLabel("Copied!")
      setTimeout(() => setCopyLabel("Copy to clipboard"), 2000)
    } catch (err) {
      console.error("Failed to copy text:", err)
    }
  }

  const handleDontShowAgain = (id) => {
    const newList = [...(dontShowAgainList || []), id]
    setDontShowAgainList(newList)
    localStorage.setItem("dontShowAgainList", JSON.stringify(newList))
  }

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  const alertStatusMap = {
    error: "error",
    warning: "warning",
    info: "info",
    success: "success",
  }

  const defaultAlertStatus = "error"

  const alertStatus = alertStatusMap[currentAlert.type] || defaultAlertStatus

  const alertBorderColorMap = {
    error: "red",
    warning: "yellow",
    info: "blue",
    success: "green",
  }

  const defaultAlertBorderColor = "red"

  const alertBorderColor =
    alertBorderColorMap[currentAlert.type] || defaultAlertBorderColor

  return (
    <Alert
      status={alertStatus}
      position="fixed"
      left="50%"
      transform="translateX(-50%)"
      width={{ base: "100vw", md: "30em" }}
      top="0"
      maxHeight={{
        base: "calc(25vh + 1em)",
        md: "calc(20vh + 1.5em)",
        lg: "calc(25vh + 1.5em)",
      }}
      borderRadius="0 0 0.5em 0.5em"
      padding="0.5em"
      zIndex="9999"
      boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.5)"
    >
      <AlertIcon position="absolute" left={2} top={2} />
      <Flex direction="column" width="100%" pl="2em" pr="2em">
        <Box position="relative">
          <Text
            fontWeight="bold"
            margin={{ base: "0 0.5em 0.5em 0", md: "0 0.75em 0.75em 0" }}
          >
            {currentAlert.source}
          </Text>
          <Box
            overflowY="auto"
            maxHeight="calc(20vh - 4em)"
            borderRadius="0.5em"
            bg={currentAlert.type === "error" ? "#EF9A9A" : "transparent"}
            padding=" 0.25em 0.5em 0.25em 0.5em"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#E57373",
                borderRadius: "24px",
              },
            }}
          >
            {currentAlert.type === "error" && (
              <Button
                size="xs"
                variant="ghost"
                position="absolute"
                right={0.5}
                top="3em"
                onClick={handleCopy}
                aria-label={copyLabel}
                opacity={0.7}
                _hover={{ opacity: 0.9 }}
                padding={1}
                height="auto"
                minWidth="auto"
              >
                <CopyIcon />
              </Button>
            )}
            <Text>{currentAlert.content}</Text>
          </Box>
        </Box>
        <Flex mt={2} minHeight="2em" position="relative">
          <Flex align="center" gap={2} margin="0 auto">
            <Button
              size="xs"
              variant="ghost"
              onClick={navigatePrev}
              isDisabled={totalAlerts <= 1}
            >
              <ChevronLeftIcon />
            </Button>
            <Text fontSize="sm">
              {currentIndex + 1}/{totalAlerts}
            </Text>
            <Button
              size="xs"
              variant="ghost"
              onClick={navigateNext}
              isDisabled={totalAlerts <= 1}
            >
              <ChevronRightIcon />
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Button
        size="xs"
        variant="ghost"
        position="absolute"
        right={1}
        top={1}
        onClick={handleRemoveAlert}
      >
        ✕
      </Button>
      <Text
        fontSize="xs"
        opacity={0.75}
        cursor="pointer"
        _hover={{ textDecoration: "underline" }}
        onClick={clearAlerts}
        position="absolute"
        left={3}
        bottom={1.5}
      >
        clear all
      </Text>
      <Checkbox
        variant="alertDropDown"
        size="sm"
        fontSize="xs"
        borderColor={alertBorderColor + ".500"}
        colorScheme={alertBorderColor}
        onChange={handleCheck}
        isChecked={isChecked}
        color="black"
        position="absolute"
        right={3}
        bottom={1.5}
      >
        <Text>don{"'"}t show again</Text>
      </Checkbox>
    </Alert>
  )
}

export default AlertDropDown
