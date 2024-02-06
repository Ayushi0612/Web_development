"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { taskDef } from "@/component/types";
interface props{
    name?: boolean;
}


export default function Form({name}:props) {
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");

  const save = (event: React.SyntheticEvent) => {
    let task:taskDef = { detail, title };
    event.preventDefault();
    let tasks = [];
    if (localStorage.tasks) {
      tasks = JSON.parse(localStorage.tasks);
      //  console.log(tasks)
    }
    tasks.push(task);
    localStorage.tasks = JSON.stringify(tasks);
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
            {name===true? <button className="btn">ADD</button> : <button className="btn">UPDATE</button>}
            <Link href="/" className="btn">
              CANCEL
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}
