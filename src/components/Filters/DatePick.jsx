'use client'
import { DatePicker, } from 'antd';
import React, { useState } from 'react';
import dayjs from 'dayjs';


//TODO: Me Falta traer los datos y hacer el filtro de la fecha

const DatePick= () => {


    const {RangePicker} = DatePicker

    const [dates, setDates] = useState([])
    

    const handleDateChange = (values)=>{

        values && setDates(values?.map((item)=>{
            return (item).format('DD-MM-YYYY')
        }))
        }

    const disabledDate = (current) => {
        if (!current) {
            return false
        }
        const currentDatePlusOne = dayjs().add(1,"day").startOf('day')
        return current.isBefore(currentDatePlusOne);
    }


      return (
        <div style={{margin:20}}>
            <RangePicker  format={'DD/MM/YYYY'}
            onChange={handleDateChange}
            disabledDate={disabledDate}
            />
        </div>
    )
}

export default DatePick