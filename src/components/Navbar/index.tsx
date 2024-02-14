import React from "react";
import "./style.css";
interface props {
  title: string;
  backbtn?: boolean;
  rightIcon?: "calender" | "battery";
}

function Nav({ title, backbtn, rightIcon }: props) {
  return (
    <div className="app-bar">
      <div className="status-bar">
        <div className="left-section">9:41</div>
        <div className="right-section">
          <img src="/icons/network-signal.svg" />
          <img src="/icons/wifi-signal.svg" />
          <img src="/icons/battery.svg" />
        </div>
      </div>
      <div className="todo-page-title-bar">
        <div className="title-left-section">
          {backbtn && <img src="/icons/turnback.svg" />}
          <div className="app-name">{title}</div>
        </div>
        <div className="title-right-section">
          {rightIcon === "calender" && (<img src="/icons/calender.svg" className="calender" />)}
        </div>
      </div>
    </div>
  );
}

export default Nav;