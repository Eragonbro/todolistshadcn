import React from 'react'
import TasksData from './TasksData'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
  import { Checkbox } from "@/components/ui/checkbox";
  import { Button } from "@/components/ui/button"
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input"


export default function Dashboard() {

    const toggleChecked = (index) => {
        setTasks((prevTasks) =>
          prevTasks.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
          )
        );
      };
    
    let [tasks, setTasks] = React.useState(TasksData);

    let taskRows = tasks.map((item,index)=>{
            return    <TableRow key={index} className='text-left py-6 '>
                                        <TableCell className='px-2.5 flex items-center'>
                                        <Checkbox
                                            checked={item.done}
                                            onCheckedChange={() => toggleChecked(index)} // ✅ Pass index
                                        />
                                        </TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell className='text-right pr-6'>{item.time} hours</TableCell>
                                        <TableCell className='text-right'>{item.dueDate}</TableCell>
                     </TableRow>
            })

    const [formData, setFormData] = React.useState({
        taskName: "",
        taskTime: "",
        taskDate: "",
        });

    const [open, setOpen] = React.useState(false);

    
        // Handle form submit
        const handleNewTask = (event) => {
            event.preventDefault(); // Prevent page reload

            // Get the form data
            const formData = new FormData(event.currentTarget);
            
            const newTask = {
              name: formData.get("taskName"),
              time: formData.get("taskTime"),
              dueDate: formData.get("taskDate"),
              done: false, // Default unchecked
            };
          
            console.log("New Task:", newTask);
            
            // Add the new task to the list
            setTasks((prevTasks) => [...prevTasks, newTask]);
          
            // Clear the form
            event.currentTarget.reset();
            setOpen(false);
        };
    
    
    
    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">

            <Card className='flex flex-col justify-center p-0'>
                <CardHeader className='p-4 space-y-1'>
                    <CardTitle className="text-3xl font-bold">{tasks.length} tasks</CardTitle>
                    <CardDescription className="text-sm text-gray-500">today</CardDescription>
                </CardHeader>
            </Card>

            <Card className='flex flex-col items-center justify-center p-0'>
                <CardContent className='p-4 space-y-1'>
                    <h2 className="text-3xl font-bold whitespace-nowrap">4,5 hours</h2>
                    <p className="text-sm text-gray-500 whitespace-nowrap">remaining to finish tasks</p>
                </CardContent>
            </Card>

            <Card className='flex flex-col items-center justify-center p-0 '>
                <CardContent className='p-4 space-y-2'>
                    <h2 className="text-3xl font-bold">12,5%</h2>
                    <p className="text-sm text-gray-500">Completion rate</p>
                </CardContent>
            </Card>

            </div>


            <div className="mt-4 w-[850px] ">
                <Card>
                    <CardHeader className='w-full  px-8 flex flex-row items-center justify-between pt-3 pb-2'>
                        <CardTitle className='w-fit'>Here is your list of tasks for the day!</CardTitle>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild><Button className='p-4 w-fit inlin'>Add task</Button></DialogTrigger>
                            
                            <DialogContent aria-describedby={undefined}>
                                <DialogTitle className='text-center'>New task</DialogTitle>
                            
                                <form className="space-y-6" onSubmit={handleNewTask}>
                                    
                                    <div className="">
                                        <Label htmlFor="taskName">Task name</Label>
                                        <Input name='taskName' id='taskName' className="mt-2" placeholder="e.g. Close €44k MRR"></Input>
                                    </div>
                                    
                                    <div>
                                        <Label htmlFor="taskTime">Time it takes</Label>
                                        <Input name='taskTime' id='taskTime' className="mt-2" placeholder="2 hours (everyday for 1 year)"></Input>
                                    </div>
                                    
                                    <div>
                                        <Label htmlFor="taskDate">Due Date</Label>
                                        <Input name='taskDate' id='taskDate' className="mt-2" placeholder="01/09/2025"></Input>
                                    </div>
                                    
                                    <div className="text-center">
                                        <Button className='px-7' type='submit' variant='secondary'>Add</Button>
                                    </div>

                                </form>
                            </DialogContent>
                        
                        </Dialog>
                    </CardHeader>
                    <CardContent>
                        <Table className=''>
                        
                        <TableHeader className='text-left'>
                            <TableRow>
                            <TableHead>Done</TableHead>
                            <TableHead>Task</TableHead>
                            <TableHead className='text-right pr-6'>Time</TableHead>
                            <TableHead className='text-right'>Due Date</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {taskRows}                       
                        </TableBody>
                        
                        </Table>
                    </CardContent>
                </Card>
            </div>

           
        </div>
    )
}