import React, { useState } from 'react'
import { useEffect } from 'react'

export const useInput = (init) => {

    useEffect(() => {
       setValue(init) 
    },[init])

    const [value, setValue] = useState(init)
    const reset = () => {
        setValue('')
    }
    const binding = {
        value: value,
        onChange: e => setValue(e.target.value)
    }

    return [value, binding, reset]
}
