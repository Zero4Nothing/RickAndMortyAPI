/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Footer() {
  return (
        <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted text-center">Desarrollado por jose.zambrano556@misena.edu.co</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a className="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
          <li class="ms-3"><a className="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
          <li class="ms-3"><a className="text-muted" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
