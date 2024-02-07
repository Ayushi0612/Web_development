"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./page.module.css";
import Nav from "@/component/Navbar";
import { taskDef } from "@/component/types"
import {saveTasksToLocal,getTasksFromLocal} from "@/component"

export default function Home() {
  const [tasks, setTasks] = useState<taskDef[]>([])

  const deleteTask=(i:number)=>{
    if (tasks[i].scheduled) return alert("You cannot delete this task");
    let tasks2= Object.assign([], tasks);
    tasks2.splice(i,1);
    setTasks(tasks2);
    saveTasksToLocal(tasks2);
  }

  const scheduledTask = (i: number) => {
    let tasks2: taskDef[] = Object.assign([], tasks);
    tasks2[i].scheduled = !tasks2[i].scheduled;
    setTasks(tasks2);
    saveTasksToLocal(tasks2);
  };


  useEffect(()=>{
    if(localStorage.tasks){
      setTasks(getTasksFromLocal());

    }
  },[])
  return (
    <main>
      <Nav title="TODO List" rightIcon="calender" />
      <div className="todo-center-container" >
        <div className="todo-list-container" id="todo-list"></div>
        {tasks.map((task,i)=>(<div className="todo-bar" key={task.title}>
             <div className="todo-bar-left-section">
               <div className="title">{task.title}</div>
               <div className="sub-title">{task.detail}</div>
             </div>
             <div className="todo-bar-right-section">
                <Link href={`/EditTask/${i}`}><img src="./icons/pencil.svg"  /></Link>
               <img src="./icons/trash2.svg" onClick={()=>deleteTask(i)} />
               <img src="./icons/checkCircle.svg"  onClick={() => scheduledTask(i)}
                  className={task.scheduled ? "scheduled" : ""} />
             </div>
           </div>))}
           </div>
           <div>
        <div className="add-todo-button">
          {/* <Link href="/AddTask" className="button">+</Link> */}
          <Link href="/AddTask" className="button"><img src="/icons/plus.svg" alt="add" /></Link>
        </div>
      </div>

      <div className="AppBar" id="footer">
            <div className="left-AppBar-section">
                <img src="./icons/playlist.svg" alt="playlist"/>
                <p>All</p>
            </div>
            <div className="right-AppBar-section">
                <img className="add" src="./icons/tick.svg" alt="tick"/>
                <p>Completed</p>
            </div>
        </div>  
    </main>
  );
}