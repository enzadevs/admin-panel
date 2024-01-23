'use client'

import AsyncSelect from 'react-select/async'

export default function SelectTable({selectData,placeholder,className}) {  
    const filterItems = inputValue => {
        return selectData.filter(i =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        )
    }

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterItems(inputValue))
        }, 1000)
    }

    return <AsyncSelect
        cacheOptions 
        loadOptions={loadOptions} 
        defaultOptions
        className={className}
        placeholder={placeholder}
    />
}