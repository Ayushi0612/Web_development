"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./page.module.css";
import Nav from "@/component/Navbar/index";
import { taskDef } from "@/component/types"
//  let taskData=[
//  {"title":"thermal","detail":"first project"},
//  {"title":"Ayu","detail":"!st number"},
//  {"title":"Dc","detail":"@nd nu"}]
// interface task{
//   title:string;
//   detail:string;
// }

export default function Home() {
  // const [tasks, setTasks] = useState(taskData);
  // const [tasks, setTasks] = useState<task[]>([])
  const [tasks, setTasks] = useState<taskDef[]>([])

  useEffect(()=>{
    if(localStorage.tasks){
      setTasks(JSON.parse(localStorage.tasks));
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
                <Link href="/EditTask"><img src="./icons/pencil.svg"  /></Link>
               <img src="./icons/trash2.svg"  />
               <img src="./icons/checkCircle.svg"   />
             </div>
           </div>))}
           </div>
           <div>
        <div className="add-todo-button">
          {/* <Link href="/AddTask" className="button">+</Link> */}
          <Link href="/AddTask" className="button"><img src="/icons/plus.svg" alt="add" /></Link>
        </div>
      </div>
    </main>
  );
}