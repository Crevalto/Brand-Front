import React from 'react'
import './css/login.css'



function reg1() {
    return (
        <div>
                <form>

                <div>
        <div className="form-group">
          <input type="password" className="form-control" id="pswrd" placeholder="Account Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="cpswrd" placeholder="Confirm Password" required />
        </div>
        <div className="form-group">
          <b><p className="form-control">UPLOAD BRAND LOGO (PNG) </p></b>
        </div>
        <center><input type="file" id="myFile" name="filename" /></center>
        <button type="submit" className="btn btn-primary" onclick="return Validate()">SIGN UP</button>
      </div>

                </form>
</div>
    )
}

export default reg1
