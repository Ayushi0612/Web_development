"use client";
import Nav from "@/component/Navbar";
import Form from "@/component/TaskForm";
import { taskDef } from "@/component/types";
import {getTasksFromLocal,saveTasksToLocal} from "@/component";

export default function EditTask() {
  let task={title:"Hii",detail:"World"};
  let save=(task:taskDef)=>{
    let tasks = [];
    if (localStorage.tasks) {
      tasks = getTasksFromLocal();
    }
    let i=1; 
    tasks[i].title=task.title;
    tasks[i].detail=task.detail;
    saveTasksToLocal(tasks);
    
  }
  return (
    <main>
      <Nav title="Edit Task" backbtn={true} />
      <Form submitBtnLabel="UPDATE" onSave={save} task={task}/>
    </main>
  );
}