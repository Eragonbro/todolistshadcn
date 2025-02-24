import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Button } from "./ui/button"
import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"

export default function AddTaskFeature(props) {

    return (
        <Dialog open={props.open} onOpenChange={props.setOpen}>
        <DialogTrigger asChild><Button className='p-4 w-fit inlin'>Add task</Button></DialogTrigger>
            
            <DialogContent aria-describedby={undefined}>
                <DialogTitle className='text-center'>New task</DialogTitle>
            
                <form className="space-y-6" onSubmit={props.onSubmit}>
                    <div className="">
                        <Label htmlFor="taskName">Task name</Label>
                        <Input name='taskName' id='taskName' className="mt-2" placeholder="e.g. Close €44k MRR"></Input>
                    </div>
                    
                    <div>
                        <Label htmlFor="taskTime">Time it takes</Label>
                        <Input type='number' step="0.01" name='taskTime' id='taskTime' className="mt-2" placeholder="2 hours (everyday for 1 year)"></Input>
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
    )
}