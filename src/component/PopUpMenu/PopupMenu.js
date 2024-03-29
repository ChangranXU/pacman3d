import { Modal } from "bootstrap";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './PopupMenu.css';
import { Button } from '@arco-design/web-react';

export default function PopupMenu(){
    
    const navigate = useNavigate();
    return(
        <Popup trigger={<Button type='text' shape='round'>Trigger</Button>} modal nested>
            {close=>(
                <div>
                <div className="home-page" >
                    <button className="home-page-btn" onClick={() => { close(); navigate("/home-page");}}>Home Page</button>
                </div>
                <div className="sound-control">
                    <button className="sound-control-btn">Sound</button>
                </div>
                <div className="about">
                    <button className="about-btn">About</button>
                </div>
                <div className="popup-quit">
                    <button className="popup-quit-btn" onClick={() => { close(); navigate("/");}}>Quit</button>
                </div>
                <div className="goback">
                    <button className="goback-btn" onClick={() => { close(); navigate(-1);}}>Go Back</button>
                </div>
                </div>
            )}
        </Popup>


    );



};

