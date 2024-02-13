"use client";
import React, { useState } from "react";
import axios from "axios";
import Nav from "@/component/Navbar";
import Form from "@/component/TaskForm";
import { taskDef } from "@/component/types";
import {getTasksFromLocal,saveTasksToLocal} from "@/component";
import Spinner from "@/component/Spinner";


export default function AddTask() {
  const [loading, setLoading] = useState(false);

  const save = async(task: taskDef) => {
    setLoading(true)
      const res = await axios.post(
        "https://crudcrud.com/api/f139f1b6df09441887793beeb85fb775/task",task
      );
      setLoading(false)
  };

  return (
    <main>
      <Nav title="Add Task" backbtn={true} />
      <Form submitBtnLabel="ADD" onSave={save}/>
      {loading && <Spinner/>}
    </main>
  );
}
