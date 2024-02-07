"use client";
import Nav from "@/component/Navbar";
import Form from "@/component/TaskForm";
import { taskDef } from "@/component/types";

export default function EditTask() {
  
  let save=(task:taskDef)=>{

  }
  return (
    <main>
      <Nav title="Edit Task" backbtn={true} />
      <Form submitBtnLabel="UPDATE" onSave={save}/>
    </main>
  );
}