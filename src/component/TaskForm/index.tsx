"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { taskDef } from "@/component/types";
import { getTasksFromLocal, saveTasksToLocal } from "@/component";

interface props{
    submitBtnLabel: string;
}


export default function Form({submitBtnLabel}:props) {
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");

  const save = (event: React.SyntheticEvent) => {
    let task:taskDef = { detail, title };
    event.preventDefault();
    let tasks = [];
    if (localStorage.tasks) {
      tasks = getTasksFromLocal();
      //  console.log(tasks)
    }
    tasks.push(task);
    saveTasksToLocal(tasks);
    console.log(task);
  };

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
