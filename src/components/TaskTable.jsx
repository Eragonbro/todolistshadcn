import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function TaskTable(props) {
    return (
        <Table className='w-full '>
                        
            <TableHeader className='text-left'>
                <TableRow>
                <TableHead>Done</TableHead>
                <TableHead>Task</TableHead>
                <TableHead className='text-right pr-6'>Time</TableHead>
                <TableHead className='text-right'>Due Date</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {props.taskRows}                       
            </TableBody>
        
        </Table>
    )
}