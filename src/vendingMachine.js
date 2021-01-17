import react from 'react'
import {Link, Route} from 'react-router-dom'
import Chips from './chips'
import Sardines from './sardines'
import Soda from './soda'

const VendingMachine = () => {
    return (
        <div style={{textAlign:"center"}}>
            <h1>Hello! I am a vending machine. What would you like to eat?</h1>
            <ul>
                <li><Link to='/Chips'>Chips</Link></li>
                <li><Link to='/Soda'>Soda</Link></li>
                <li><Link to='/Sardines'>Sardines</Link></li>
            </ul>
        </div>
        
    )
}


export default VendingMachine;