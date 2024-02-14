"use client";
import React, { useState } from "react";
import axios from "@/components/api";
import Nav from "@/components/Navbar";
import Form from "@/components/TaskForm";
import { taskDef } from "@/components/types";
import Spinner from "@/components/Spinner";
import { useRouter } from 'next/navigation'

export default function AddTask() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const save = async(task: taskDef) => {
    setLoading(true);
    const res = await axios.post("/tasks",[task]);
    setLoading(false);
    router.push('/')
  };

  return (
    <main>
      <Nav title="Add Task" backbtn={true} />
      <Form submitBtnLabel="ADD" onSave={save}/>
      {loading && <Spinner/>}
    </main>
  );
}
