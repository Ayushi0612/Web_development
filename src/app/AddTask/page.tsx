"use client";
import React, { useState } from "react";
import Nav from "@/component/Navbar";
import Form from "@/component/TaskForm";
import { taskDef } from "@/component/types";
import {getTasksFromLocal,saveTasksToLocal} from "@/component";
import Spinner from "@/component/Spinner";


export default function AddTask() {

  const save = (task: taskDef) => {
    let tasks = [];
    if (localStorage.tasks) {
      tasks = getTasksFromLocal();
    }
    tasks.push(task);
    saveTasksToLocal(tasks);
  };

  return (
    <main>
      <Nav title="Add Task" backbtn={true} />
      <Form submitBtnLabel="ADD" onSave={save}/>
      <Spinner/>
    </main>
  );
}
