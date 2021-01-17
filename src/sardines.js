import react from 'react'
import {Link} from 'react-router-dom'

const Sardines = () => {
    return (
        <div style={{textAlign:"center"}}>
            <h1>Here's your Sardines</h1>
            <img src="data:image/jpeg;base64,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"
            alt="sardines"/>
            <p><Link to="/">Go Back</Link></p>
        </div>
    )
}


export default Sardines;