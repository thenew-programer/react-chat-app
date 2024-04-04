import { React, useState } from 'react';
import './styles/sidebar.css';
import Contacts from './Contacts';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import IconButton from '@mui/material/IconButton';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Sidebar() {

  const [contactData, SetContactData] = useState([
    {
      name: "Youssef",
      profileImg: null,
      lastMsg: "Good night",
      time: "22:40",
    },
    {
      name: "Khadija",
      profileImg: null,
      lastMsg: "Sbah lkhir",
      time: "10:26",
    },
    {
      name: "Mama",
      profileImg: null,
      lastMsg: "Ghadi nji had simana",
      time: "18:06",
    },
  ]);
  return (
    <div className="Sidebar">
      <div className="sb-header">
        <div className="sb-header-first">
          <IconButton>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </div>
        <div className="sb-header-second">
          <IconButton>
            <PersonAddAltOutlinedIcon />
          </IconButton>
          <IconButton>
            <GroupAddOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton>
            <ModeNightOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <input type="text" placeholder="search" />
      </div>
      <div className="sb-contacts">
        {contactData.map(contact =>
          <Contacts data={contact} />
        )}
      </div>
    </div>
  )
}
