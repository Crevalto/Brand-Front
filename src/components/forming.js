import React, { Component } from 'react'


export default class forming extends Component {

  render() {

        return (
            <div>
  <form>          
          <div className="form-group">
                    <input type="text"
                     className="form-control" 
                     name="org"
                     onChange={this.handleChange} 
                     
                      placeholder="Your Organisation Name" required />
                  </div>

                  <div className="form-group">
                    <input type="text"
                     className="form-control" 
                     onChange={this.handleChange} 
                      value={this.state.crpid}  
                      name="crpid"  
                      placeholder="cid" required />
                  </div>

                  
                  <button onClick={this.validate} className="btn btn-primary" > NEXT  →</button>
                        </form>
            </div>
        )
    }
}
