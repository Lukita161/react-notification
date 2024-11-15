import { useState } from "react"

import { NotificationsType, NotificationType } from "../types"

export const useNotification = ()=> {
    const [notification, setNotification] = useState<NotificationsType>([])
    const clearNotificationState = ()=> {
        setTimeout(()=> {
            setNotification([])
        },8000)
    }
    const successNotification = (message: NotificationType['message'])=> {
        if(!message) throw new Error('No puedes crear una notificacion vacia')
        setNotification([
            ...notification,
            {
            type: 'success',
            message,
        }])
        clearNotificationState()
    }
    const errorNotification = (message: NotificationType['message'])=> {
        if(!message) throw new Error('No puedes crear una notificacion vacia')
        setNotification([
            ...notification,
            {
            type: 'error',
            message,
        }])
        clearNotificationState()
    }
    const alertNotification = (message: NotificationType['message'])=> {
        if(!message) throw new Error('No puedes crear una notificacion vacia')
        setNotification([
            ...notification,
            {
            type: 'alert',
            message,
        }])
        clearNotificationState()
    }
    
    return { successNotification, errorNotification, alertNotification, notification }
}