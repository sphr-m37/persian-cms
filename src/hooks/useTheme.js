import React, { useEffect, useState } from 'react'

export const useTheme = () => {
    const [theme, setTheme] = useState()
    useEffect(() => {
        const theme = localStorage.theme
        setTheme(theme)
    }, [])
    const toggleTheme = () => {
        if (theme === 'light') {
            localStorage.theme = 'dark'
            setTheme('dark')
        } else {
            localStorage.theme = 'light'
            setTheme('light')
        }
    }
    return [theme, toggleTheme]
}
