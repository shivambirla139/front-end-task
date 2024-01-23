// src/Navbar.js
import React from 'react';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import Toolbar from '@mui/material/Toolbar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FaceIcon from '@mui/icons-material/Face';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BuildIcon from '@mui/icons-material/Build';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsOutlinedIcon from '@mui/icons-material/SportsOutlined';
import './navbar.css';
const Navbar = () => {
    const iconStyle = { fontSize: 22, color: 'white' };
    const containerStyle = { display: 'flex', alignItems: 'center', width: '100%' };

    return (
        <nav className="navbar">
            <div className='logo'>
                <DiamondOutlinedIcon style={{fontSize:42, color:'white'}}/>
                <span className='logo-title'>Logo</span>
            </div>
           <Toolbar className='toolbar-list'>
                     <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="home">
                            <HomeOutlinedIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>Home</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 0, color: 'white', width: '100%' }} />
                        </div>
                    </div>
                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="chat">
                            <ChatOutlinedIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>Chat</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white', width: '100%' }} />
                        </div>
                    </div>
                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="activities">
                            <SportsOutlinedIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>Activities</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white', width: '100%' }} />
                        </div>
                    </div>
                    
                    <span className='rec-title'> recruitement</span>
                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="jobs">
                            <WorkOutlineIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>Jobs</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white', width: '100%' }} />
                        </div>
                    </div>

                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="interviews">
                            <ChatOutlinedIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>Interviews</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white', width: '100%' }} />
                        </div>
                    </div>

                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="new-hires">
                            <PersonAddIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>New Hires</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white', width: '100%' }} />
                        </div>
                    </div>

                    <span className='org-title'> organisation</span>
                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="company-profile">
                            <BusinessIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>Company Profile</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white', width: '100%' }} />
                        </div>
                    </div>

                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="community">
                            <PeopleAltIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>Community</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white', width: '100%' }} />
                        </div>
                    </div>

                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="team">
                            <GroupIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>Team</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white', width: '100%' }} />
                        </div>
                    </div>

                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="hr-toolbox">
                            <BuildIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>HR Toolbox</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white', width: '100%' }} />
                        </div>
                    </div>

                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="reports">
                            <AssessmentIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>Reports</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white', width: '100%' }} />
                        </div>
                    </div>
                    <div style={containerStyle}>
                        <IconButton color="inherit" edge="start" aria-label="settings">
                            <SettingsIcon style={iconStyle} />
                        </IconButton>
                        <span className='item-name'>Settings</span>
                        <div style={{ marginLeft: 'auto' }}>
                            <ChevronRightIcon style={{ fontSize: 22, color: 'white' }} />
                        </div>
                    </div>
                </Toolbar>
        </nav>
    );
};

export default Navbar;
