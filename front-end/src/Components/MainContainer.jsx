import React from 'react';
import './styles/main.css';
import Sidebar from './Sidebar.jsx';
import WorkArea from './WorkArea.jsx';

export default function MainContainer() {
  return (
    <div className="MainContainer">
      <Sidebar />
      <WorkArea />
    </div>
  )
}
