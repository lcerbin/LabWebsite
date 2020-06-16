import React from 'react';
import './stylesheets/outreach.css'
import OutreachCard from './OutreachCard.js'

const Outreach = () => {
    return (
      <div>
        <h1 className = "Header">Outreach</h1>
        <div>
          <OutreachCard/>
          <OutreachCard/>
          <OutreachCard/>
          <OutreachCard/>
        </div>
        
      </div>
    );
}

export default Outreach;
