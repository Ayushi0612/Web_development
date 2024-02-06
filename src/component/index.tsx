import { taskDef } from "@/component/types"

export let saveTasksToLocal=(tasks:taskDef[])=>{
    localStorage.tasks = JSON.stringify(tasks);
}

export let getTasksFromLocal=()=>{
    return JSON.parse(localStorage.tasks);
}


 