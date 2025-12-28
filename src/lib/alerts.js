import { Alerts, DontShowAgain } from "./store"
import React from "react"
import sha256 from "crypto-js/sha256"
import encHex from "crypto-js/enc-hex"

/**
 * Alert types
 *
 * @type {{ ERROR: string; WARNING: string; INFO: string; SUCCESS: string; }}
 */
export const AlertType = {
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
}

/**
 * Add an alert to the list of alerts.
 *
 * @export
 * @param {AlertType} type // import AlertType from this file
 * @param {string} source // source of the alert (e.g. "API", "UI", "Database", etc.)
 * @param {string | React.ReactElement} content // content of the alert (string or React element)
 * @param {number} [duration=0] // OPTIONAL: duration of the alert (0 = no duration)
 * @param {boolean} [dontShowAgain=false] // OPTIONAL: whether to show the alert again
 */
export function addAlert(
  type,
  source,
  content,
  duration = 0,
  dontShowAgain = false,
) {
  if (!Object.values(AlertType).includes(type)) {
    console.warn(`Invalid alert type: ${type}`)
    type = AlertType.ERROR
  }
  let contentString
  if (typeof content === "string") {
    contentString = content
  } else if (React.isValidElement(content)) {
    contentString = String(content)
  } else {
    console.warn("Content must be either a string or a valid React element")
    return null
  }

  const id = sha256(type + source + contentString).toString(encHex)

  const currentAlerts = Alerts.getValue() || []

  if (
    (DontShowAgain.getValue() || []).includes(id) ||
    (currentAlerts || []).some((alert) => alert.id === id)
  ) {
    return
  }

  if (currentAlerts.some((alert) => alert.id === id)) {
    const newAlerts = currentAlerts.map((alert) =>
      alert.id === id
        ? {
            ...alert,
            type,
            source,
            content,
            timestamp: new Date().toISOString(),
          }
        : alert,
    )
    Alerts.setValue(newAlerts)
    if (dontShowAgain === true) {
      DontShowAgain.setValue([...DontShowAgain.getValue(), id])
    }
  }

  const alert = {
    id,
    type,
    source,
    content,
    timestamp: new Date().toISOString(),
    duration,
    dontShowAgain,
  }

  const newAlerts = [alert, ...currentAlerts]
  Alerts.setValue(newAlerts)

  if (duration > 0) {
    setTimeout(() => {
      removeAlertById(id)
    }, duration * 1000)
  }

  return id
}

/**
 * Remove an alert by ID
 *
 * @export
 * @param {*} id
 */
export function removeAlertById(id) {
  const currentAlerts = Alerts.getValue() || []
  const newAlerts = currentAlerts.filter((alert) => alert.id !== id)
  Alerts.setValue(newAlerts)
}

/**
 * Remove an alert by source
 *
 * @export
 * @param {*} source
 */
export function removeAlertBySource(source) {
  if (typeof source !== "string") {
    console.warn(`Invalid alert source: ${source}`)
    return
  }

  const currentAlerts = Alerts.getValue() || []
  const newAlerts = currentAlerts.filter((alert) => alert.source !== source)
  Alerts.setValue(newAlerts)
}

/**
 * Remove an alert by type
 *
 * @export
 * @param {*} type
 */
export function removeAlertByType(type) {
  const currentAlerts = Alerts.getValue() || []
  const newAlerts = currentAlerts.filter((alert) => alert.type !== type)
  Alerts.setValue(newAlerts)
}

/**
 * Clear all alerts
 *
 * @export
 */
export function clearAlerts() {
  Alerts.setValue([])
}

/**
 * Clear the list of alerts that should not be shown again
 *
 * @export
 */
export function clearDontShowAgain() {
  DontShowAgain.setValue([])
}
