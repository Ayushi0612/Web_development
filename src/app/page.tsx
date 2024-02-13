"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import "./page.module.css";
import Nav from "@/component/Navbar";
import { taskDef } from "@/component/types";
import { saveTasksToLocal, getTasksFromLocal } from "@/component";
import Spinner from "@/component/Spinner";

export default function Home() {
  const [tasks, setTasks] = useState<taskDef[]>([]);
  const [loading, setLoading] = useState(false);
  const deleteTask = (i: string) => {
    // if (tasks[i].scheduled) return alert("You cannot delete this task");
    // let tasks2 = Object.assign([], tasks);
    // tasks2.splice(i, 1);
    // setTasks(tasks2);
    // saveTasksToLocal(tasks2);
    
  };

  const scheduledTask = (i: string) => {
    // let tasks2: taskDef[] = Object.assign([], tasks);
    // tasks2[i].scheduled = !tasks2[i].scheduled;
    // setTasks(tasks2);
    // saveTasksToLocal(tasks2);
  };

  useEffect(() => {
    (async () => {
      setLoading(true)
      const res = await axios.get(
        "https://crudcrud.com/api/f139f1b6df09441887793beeb85fb775/task"
      );
      setTasks(res.data);
      setLoading(false)
      // console.log(res.data)
    })();
  }, []);

  return (
    <main>
      <Nav title="TODO List" rightIcon="calender" />
      {loading && <Spinner/>}
      {!loading && <div className="todo-center-container">
        <div className="todo-list-container" id="todo-list"></div>
        {tasks.map((task) => (
          <div className="todo-bar" key={task.title}>
            <div className="todo-bar-left-section">
              <div className="title">{task.title}</div>
              <div className="sub-title">{task.detail}</div>
            </div>
            <div className="todo-bar-right-section">
              <Link href={`/EditTask/${task._id}`}>
                <img src="./icons/pencil.svg" />
              </Link>
              <img src="./icons/trash2.svg" onClick={() => deleteTask(task._id)} />
              <img
                src="./icons/checkCircle.svg"
                onClick={() => scheduledTask(task._id)}
                className={task.scheduled ? "scheduled" : ""}
              />
            </div>
          </div>
        ))}
      </div>}
      <div>
        <div className="add-todo-button">
          {/* <Link href="/AddTask" className="button">+</Link> */}
          <Link href="/AddTask" className="button">
            <img src="/icons/plus.svg" alt="add" />
          </Link>
        </div>
      </div>

      <div className="AppBar" id="footer">
        <div className="left-AppBar-section">
          <img src="./icons/playlist.svg" alt="playlist" />
          <p>All</p>
        </div>
        <div className="right-AppBar-section">
          <img className="add" src="./icons/tick.svg" alt="tick" />
          <p>Completed</p>
        </div>
      </div>
    </main>
  );
}
