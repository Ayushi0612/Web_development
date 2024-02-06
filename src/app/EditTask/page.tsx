import Nav from "@/component/Navbar";
import Form from "@/component/TaskForm";

export default function EditTask() {
  return (
    <main>
      <Nav title="Edit Task" backbtn={true} />
      <Form submitBtnLabel="UPDATE"/>
    </main>
  );
}