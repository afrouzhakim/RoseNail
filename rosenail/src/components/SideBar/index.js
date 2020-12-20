import React from 'react'
import {SidebarContainer, Icon, CloseIcon} from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinke to = "about">About</SidebarLinke>
                    <SidebarLinke to = "discover">Discover</SidebarLinke>
                    <SidebarLinke to = "services">Services</SidebarLinke>
                    <SidebarLinke to = "signup">Sign Up</SidebarLinke>                    
                </SidebarMenu>
                <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In
                </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
