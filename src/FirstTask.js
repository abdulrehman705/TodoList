import { Button } from 'antd'
import './FirstTask.css'
import React, {
    //  useState 
} from 'react'

const Data = [
    {
        header: 'First Page',
        Body: 'Hello I m First',
    },
    {
        header: 'Second Page',
        Body: 'Hello I m Second',
    },
    {
        header: 'Third Page',
        Body: 'Hello I m Third',
    },
    {
        header: 'Forth Page',
        Body: 'Hello I m Forth',
    },
]

const FirstTask = () => {

    return (
        <div className='Container'>
            <div className='btn'>
                <Button type='dashed'>Reset</Button>
                <Button type='dashed'>Prev</Button>
                <Button type='dashed'>Next</Button>
            </div>
            <div className='Card'>
                <h1>{Data[0].header}</h1>
                <p>{Data[0].Body}</p>
            </div>
        </div>
    )
}

export default FirstTask