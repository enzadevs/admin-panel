'use client'

import { useState } from 'react'
import { SelectPicker } from 'rsuite'
import 'rsuite/dist/rsuite-no-reset.min.css'

export default function SelectionContainer({selectLabel,selectOptions,selectPlaceholder}){
    const [items,setItems] = useState([])
    const updateItems = () => {
        if(items.length === 0) {
            setItems(selectOptions)
        }
    }

    const renderMenu = menu => {
        if (items.length === 0) {
          return (
            <p style={{ padding: '16px 0', color: '#999', textAlign: 'center' }}>
                Загрузка...
            </p>
          )
        }
        return menu
    }

    return(
        <div className='w-full'>
            <SelectPicker
                label={selectLabel} 
                data={selectOptions} 
                locale={'Здесь ничего нет.'}
                placeholder={selectPlaceholder}
                renderMenu={renderMenu}
                style={{width: '100%'}}
                virtualized
            />
        </div>
    )
}