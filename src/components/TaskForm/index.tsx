"use client";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import { taskDef } from "@/components/types";

interface props{
    submitBtnLabel: string;
    task?:taskDef;
    onSave: (task:taskDef)=>void;
}

export default function Form({submitBtnLabel, onSave,task}:props) {
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
 
  const save = (event: React.SyntheticEvent) => {
    let task:taskDef = { detail, title };
    event.preventDefault();
    onSave(task);
  };

  useEffect(()=>{
      if(task){
        setTitle(task.title);
        setDetail(task.detail);
      }
  },[task])

  return (
    <main>
      <form onSubmit={save}>
        <div className="add-page-main-container">
          <div className="add-main-container-text">Title</div>
          <div>
            <input
              type="text"
              name="title"
              className="input"
              required
              onChange={(event) => setTitle(event.currentTarget.value)}
              value={title}
            />
          </div>
          <div className="add-main-container-text-detail">Detail</div>
          <div>
            <input
              type="text"
              name="detail"
              className="input"
              required
              onChange={(event) => setDetail(event.currentTarget.value)}
              value={detail}
            />
          </div>
          <div id="add-btn-container" className="button-container">
           <button className="btn">{submitBtnLabel}</button>
            <Link href="/" className="btn">
              CANCEL
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}
