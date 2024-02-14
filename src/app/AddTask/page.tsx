"use client";
import React, { useState } from "react";
import axios from "@/components/api";
import Nav from "@/components/Navbar";
import Form from "@/components/TaskForm";
import { taskDef } from "@/components/types";
import Spinner from "@/components/Spinner";

export default function AddTask() {
  const [loading, setLoading] = useState(false);
  const save = async(task: taskDef) => {
    setLoading(true)
      const res = await axios.post("/tasks",task);
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
