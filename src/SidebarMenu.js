import React from "react"
import './Sidebarmenu.css'
const SidebarMenu = ( {title , Icon}  ) =>{
    return (
        <div className = "sidebarmenu">
        <Icon className = "icon"/>
        <h2 className = "title">{title} </h2>
        </div>

    )
}
export default SidebarMenu