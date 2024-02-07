"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { taskDef } from "@/component/types";

interface props{
    submitBtnLabel: string;
    onSave: (task:taskDef)=>void;
}


export default function Form({submitBtnLabel, onSave}:props) {
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();

  const save = (event: React.SyntheticEvent) => {
    let task:taskDef = { detail, title };
    event.preventDefault();
    onSave(task);
    router.push('/')
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
