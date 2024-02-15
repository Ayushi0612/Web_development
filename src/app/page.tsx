"use client";
import { useState, useEffect } from "react";
import axios from "@/components/api";
import Link from "next/link";
import "./page.module.css";
import Nav from "@/components/Navbar";
import { taskDef } from "@/components/types";
import Spinner from "@/components/Spinner";

export default function Home() {
  const [tasks, setTasks] = useState<taskDef[]>([]);
  const [loading, setLoading] = useState(false);

  const getTasks=async()=>{
    setLoading(true);
    let res= await axios.get("/tasks");
    setTasks(res.data.items);
    setLoading(false);
  }

  const deleteTask = async (task: taskDef) => {
    if(task.scheduled){
      alert(`This task ${task.title} cannot be deleted`);
      return
    }
    try {
      setLoading(true)
      await axios.delete(`/tasks/${task._uuid}`);
      setLoading(false);
      getTasks();
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  const scheduledTask = async (task: taskDef) => {
    setLoading(true);
    await axios.put(`/tasks/${task._uuid}`,{scheduled:!task.scheduled});
    setLoading(false);
    getTasks();
  };

  useEffect(() => {
      getTasks();
  }, []);

  return (
    <main>
      <Nav title="TODO List" rightIcon="calender" />
      {loading && <Spinner />}
      {!loading && (
        <div className="todo-center-container">
          <div className="todo-list-container" id="todo-list"></div>
          {tasks.map((task) => (
            <div className="todo-bar" key={task.title}>
              <div className="todo-bar-left-section">
                <div className="title">{task.title}</div>
                <div className="sub-title">{task.detail}</div>
              </div>
              <div className="todo-bar-right-section">
                <Link href={`/EditTask/${task._uuid}`}>
                  <img src="./icons/pencil.svg" />
                </Link>
                <img
                  src="./icons/trash2.svg"
                  onClick={() => deleteTask(task)}
                />
                <img
                  src="./icons/checkCircle.svg"
                  onClick={() => scheduledTask(task)}
                  className={task.scheduled ? "scheduled" : ""}
                />
              </div>
            </div>
          ))}
        </div>
      )}
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
