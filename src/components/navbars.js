import React from 'react'

function navbars() {
    return (
        <div>

<div>
        {/* Options */}
        <div id="nav-colors">
          Navbar
          <button id="pink" className="btn" />
          <button id="red" className="btn" />
          <button id="purple" className="btn" />
          <button id="blue" className="btn" />
          <button id="green" className="btn" />
          <button id="yellow" className="btn" />
          <button id="orange" className="btn" />
        </div>
        <div id="font-colors">
          Font
          <button id="white" className="btn" />
          <button id="black" className="btn" />
        </div>
        <div id="edges">
          Edges
          <button id="rounded" className="btn">Rounded</button>
          <button id="square" className="btn">Square</button>
        </div>
        <h1>Minimal Bootstrap Navbar</h1>
        <nav className="navbar">
          <div className="container-fluid">
            {/* Nav Header */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="/"><span className="fa fa-home" /><span className="link"> Home</span></a>
            </div>
            {/* Nav Collapse */}
            <div className="navbar-collapse collapse" id="collapse-1">
              {/* Nav Left */}
              <ul className="nav navbar-nav">
                {/* Products */}
                <li className="dropdown">
                  <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <span className="fa fa-tags" /><span className="link"> Products</span> <span className="fa fa-caret-down" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="/"><span className="fa fa-tag" /> Catalogue 1</a></li>
                    <li><a href="/"><span className="fa fa-tag" /> Catalogue 2</a></li>
                  </ul>
                </li>
                {/* Services */}
                <li className="dropdown">
                  <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <span className="fa fa-gears" /><span className="link"> Services</span> <span className="fa fa-caret-down" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="/"><span className="fa fa-gear" /> Service 1</a></li>
                    <li><a href="/"><span className="fa fa-gear" /> Service 2</a></li>
                    <li><a href="/"><span className="fa fa-gear" /> Service 3</a></li>
                  </ul>
                </li>
                {/* About */}
                <li><a href="/"><span className="fa fa-info-circle" /><span className="link"> About</span></a></li>
                {/* Contact */}
                <li><a href="/"><span className="fa fa-phone" /><span className="link"> Contact</span></a></li>
              </ul>
              {/* Nav Right */}
              <form className="navbar-form navbar-right">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn"><span className="fa fa-search" /></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
        </div>
    )
}

export default navbars
