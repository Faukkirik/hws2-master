import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 150,
                height: 5,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    height: 20,
                    width: 20,
                    border: '2px solid #00CC22',
                    backgroundColor: '#ffffff',
                    }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
