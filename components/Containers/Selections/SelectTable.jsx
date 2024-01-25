'use client'

import dynamic from 'next/dynamic'
const AsyncSelect = dynamic(() => import('react-select/async'), { ssr: false })

export default function SelectTable({selectData,placeholder,className}){
    const filterItems = inputValue => {
        return selectData.filter(i =>
            i.title.toLowerCase().includes(inputValue.toLowerCase())
        )
    }

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterItems(inputValue))
        }, 1000)
    }

    return(
        <AsyncSelect
            cacheOptions 
            loadOptions={loadOptions} 
            defaultOptions
            className={className}
            placeholder={placeholder}
            getOptionLabel={(option) => `${option.title}`}
            getOptionValue={(option) => option.brandId}
            // defaultValue={selectData[0]}
        />
    )
}