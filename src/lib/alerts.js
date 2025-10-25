import { Alerts, DontShowAgainList } from './store'
import React from 'react'
import sha256 from 'crypto-js/sha256'
import encHex from 'crypto-js/enc-hex'

/**
 * Alert types
 * 
 * @type {{Error: string, Warning: string, Info: string, Success: string}}
 */

export const AlertType = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
}

/**
 * Add an alert to the alerts list
 * @param {AlertType} type - import { AlertType } from '@/lib/alerts'
 * @param {string} source - The source of the alert (e.g. 'File', 'Database', 'API', 'User')
 * @param {string | React.ReactElement} content - The content of the alert
 * @param {number} [duration] - The duration of the alert in seconds
 * @param {boolean} [dontShowAgain] - Whether to show the alert again
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
      (DontShowAgainList.getValue() || []).includes(id) ||
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
        DontShowAgainList.setValue([...DontShowAgainList.getValue(), id])
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
     * Remove alert by ID
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
     * Remove alert by type
     * 
     * @exports
     * @param {*} type
     */
    export function removeAlertByType(type) {
        const currentAlerts = Alerts.getValue() || []
        const newAlerts = currentAlerts.filter((alert) => alert.type !== type)
        Alerts.setValue(newAlerts)
    }

    /**
     * Remove alert by source
     * 
     * @exports
     * @param {*} source
     */
    export function removeAlertBySource(source) {
      if (typeof source !== 'string') {
        console.warn('Source must be a string')
        return
      }
      
      const currentAlerts = Alerts.getValue() || []
      const newAlerts = currentAlerts.filter((alert) => alert.source !== source)
      Alerts.setValue(newAlerts)
    }

    /**
     * clear all alerts
     * 
     * @exports
     */
    export function clearAlerts() {
        Alerts.setValue([])
    }
    
    /**
     * clear all dont show again list
     * 
     * @exports
     */
    export function clearDontShowAgainList() {
        DontShowAgainList.setValue([])
    }
    
    
    

