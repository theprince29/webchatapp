import React from 'react'

import {ChannenlList,useChatContest } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { Channelsearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';

const SideBar = () => (
<> 
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HospitalIcon} alt="Hospital"  width= "30" />
      </div>
    </div>
    
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="Logoout"  width= "30" />
      </div>
    </div>
  </div>
</>
  
);

const ComanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Medical Pager</p>
  </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
    </>
  );
}

export default ChannelListContainer