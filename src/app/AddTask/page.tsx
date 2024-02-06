"use client";
import Image from "next/image";
import React, { useState } from "react";
import Nav from "@/component/Navbar/index";
import Form from "../FormSubmit/Form";
import Link from "next/link";

export default function AddTask() {
  
  return (
    <main>
      <Nav title="Add Task" backbtn={true} />
      <Form name={true}/>
    </main>
  );
}
