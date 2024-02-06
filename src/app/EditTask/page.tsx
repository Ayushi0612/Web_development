import Image from "next/image";
import Nav from "@/component/Navbar";
import Form from "../FormSubmit/Form";

export default function EditTask() {
  return (
    <main>
      <Nav title="Edit Task" backbtn={true} />
      <Form name={false}/>
    </main>
  );
}