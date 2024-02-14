"use client";
import Nav from "@/components/Navbar";
import Form from "@/components/TaskForm";
import { taskDef } from "@/components/types";
import { getTasksFromLocal, saveTasksToLocal } from "@/components";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EditTask() {
  const [task, setTask] = useState<taskDef>({ title: "", detail: "" });
  const [tasks, setTasks] = useState<taskDef[]>([]);

  let { id } = useParams();
  

  let save = (task: taskDef) => {
    // tasks[id].title = task.title;
    // tasks[id].detail = task.detail;
    // saveTasksToLocal(tasks);
  };

  useEffect(() => {
    // if (localStorage.tasks) {
    //   let tasks2 = getTasksFromLocal();
    //   setTasks(tasks2);
    //   setTask(tasks2[id]);
    // }
  }, [id]);

  return (
    <main>
      <Nav title="Edit Task" backbtn={true} />
      <Form submitBtnLabel="UPDATE" onSave={save} task={task} />
    </main>
  );
}
