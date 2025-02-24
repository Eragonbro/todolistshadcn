import React from 'react'
import TasksData from './TasksData'
import TaskTable from './TaskTable';
import AddTaskFeature from './AddTaskFeature';
import KPIs from './KPIs';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  
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
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { 
    useReactTable, 
    getCoreRowModel, 
    getSortedRowModel, 
    flexRender 
  } from "@tanstack/react-table";



export default function Dashboard() {

    let [tasks, setTasks] = React.useState(TasksData);
    const columns = [
        {   accessorKey: 'done',
            header: 'Done',
            cell: ({row}) =>  <Checkbox
                                    checked={row.getValue()}
                                    onCheckedChange={() => console.log('onCheckedChange')}
                              />
        },
        {
            accessorKey: 'name',
            header: 'Task'},
        {    
            accessorKey: 'time',
            header: 'Duration'},
        {
            accessorKey: 'dueDate',
            header: 'Due Date',
            cell: ({row}) => {
                const date = new Date(row.getValue('dueDate'));
                return date;
            }
        }
    ];
    
    const table = useReactTable ({
        TasksData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    
    
    const toggleChecked = (index) => {
        setTasks((prevTasks) =>
          prevTasks.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
          )
        );
      };
    

    let [sumHours, setSumHours] = React.useState(0)

    React.useEffect(()=>{
        setSumHours(tasks.reduce((sum, item) => sum + Number(item.time), 0))
    }, [tasks]);

    const donePercentage = (100 * (tasks.filter(item => item.done).length)/tasks.length).toFixed(1);

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
        <div className="w-full md:w-3xl">
            <KPIs tasks={tasks} sumHours={sumHours} donePercentage={donePercentage}/> 
            
            <div className="mt-4 p-0">
                <Card className='text-left'>

                    <CardHeader className='w-full flex flex-row items-center justify-between pt-3 pb-2 px-2'>
                        <CardTitle className='w-fit px-0'>Here is your list of tasks for the day!</CardTitle>
                        <AddTaskFeature open={open} setOpen={setOpen} onSubmit={handleNewTask} />
                    </CardHeader>
                    
                    <CardContent className=' w-full p-0'>
                        <TaskTable taskRows = {taskRows} />
                    </CardContent>
                
                </Card>
            </div>

           
        </div>
    )
}