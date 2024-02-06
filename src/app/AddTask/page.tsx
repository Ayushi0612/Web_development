"use client";
import React, { useState } from "react";
import Nav from "@/component/Navbar";
import Form from "@/component/TaskForm";


export default function AddTask() {
  
  return (
    <main>
      <Nav title="Add Task" backbtn={true} />
      <Form submitBtnLabel="ADD"/>
    </main>
  );
}
