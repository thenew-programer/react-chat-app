import React from 'react';
import './styles/contact.css';

export default function Contacts({ data }) {
  return (
  <div className="contact">
      <p className="contact-profile-img">{data.name[0]}</p>
      <p className="contact-name">{data.name}</p>
      <p className="contact-lastmsg">{data.lastMsg}</p>
      <p className="contact-msgtime">{data.time}</p>
    </div>
  )
}
