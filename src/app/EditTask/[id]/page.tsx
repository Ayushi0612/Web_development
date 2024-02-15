"use client";
import React from 'react';
import { useRouter } from 'next/navigation'
import Nav from "@/components/Navbar";
import Form from "@/components/TaskForm";
import { taskDef } from "@/components/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import axios from "@/components/api";

export default function EditTask() {
  const [task, setTask] = useState<taskDef>({ title: "", detail: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  let { id } = useParams();

  let fetchData = async () => {
    setLoading(true);
    let res = await axios.get(`/tasks/${id}`);
    setTask(res.data);
    setLoading(false);
  };


  let save = async(task: taskDef)=>{
    setLoading(true);
     await axios.put(`/tasks/${id}`, task);
     setLoading(false);
     router.push("/");
  };
 
  useEffect(()=>{
    fetchData();
  },[id]);

  return (
    <main>
      <Nav title="Edit Task" backbtn={true} />
      {!loading && <Form submitBtnLabel="UPDATE" onSave={save} task={task} />}
      {loading && <Spinner/>}
    </main>
  );
}
