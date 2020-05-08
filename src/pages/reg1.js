import React from 'react'
import './css/login.css'
import { Link } from 'react-router-dom'


function reg1() {
    return (
        
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Organisation Address" required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="cin" placeholder="Organisation E-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                  </div>
           <Link to='/register2'>       <button type="submit" className="btn btn-primary" onclick="location.href='si2.html'">NEXT  →</button>
           </Link> </form>
    )
}

export default reg1
