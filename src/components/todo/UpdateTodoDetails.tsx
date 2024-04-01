import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../ui/dialog";
  import { Button } from "../ui/button";
  import { Label } from "@radix-ui/react-dropdown-menu";
  import { Input } from "../ui/input";
  import { FormEvent, useState } from "react";
  import { useAppDispatch } from "@/redux/hooks";
  import { addTodo } from "@/redux/feature/todoSlice";
  import { todo } from "node:test";
  
  const UpdateTodoDetails = () => {
    const [tast, setTask] = useState("");
  
    const [descroption, setDescroption] = useState("");
    const [priority, setPriority] = useState("Medium");
  
    const dispatch = useAppDispatch();
  
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      const randomString = Math.random().toString(36).substring(2, 9);
      const todoDetails = {
        title: tast,
        id: randomString,
        description: descroption,
        priority,
      };
      // console.log(todoDetails);
  
      dispatch(addTodo(todoDetails));
    };
    return (
      <Dialog>
        <DialogTrigger asChild>
        <Button className="bg-[#5c53fe]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle> Update your tast that You want to Complete</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className='grid gap-4 py-4"'>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tast" className="text-right">
                  Task
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="task"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="descroption" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescroption(e.target.value)}
                  id="description"
                  defaultValue=""
                  className="col-span-3"
                />
              </div>
          
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Priority" className="text-right">
                  Priority
                </Label>
                <select
                  onBlur={(e) => setPriority(e.target.value)}
                  id="priority"
                  defaultValue="Medium"
                  className="col-span-3"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-3">
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default UpdateTodoDetails;
