import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  
  export default function KPIs(props) {
      let tasks = props.tasks;

      return(
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
            <Card className='flex flex-col justify-center p-0'>
                <CardHeader className='p-4 space-y-1'>
                    <CardTitle className="text-3xl font-bold">{tasks.length} tasks</CardTitle>
                    <CardDescription className="text-sm text-gray-500">today</CardDescription>
                </CardHeader>
            </Card>

            <Card className='flex flex-col items-center justify-center p-0'>
                <CardContent className='p-4 space-y-1'>
                    <h2 className="text-3xl font-bold whitespace-nowrap">{props.sumHours} hours</h2>
                    <p className="text-sm text-gray-500 whitespace-nowrap">remaining to finish tasks</p>
                </CardContent>
            </Card>

            <Card className='flex flex-col items-center justify-center p-0 '>
                <CardContent className='p-4 space-y-2'>
                    <h2 className="text-3xl font-bold">{props.donePercentage}%</h2>
                    <p className="text-sm text-gray-500">Completion rate</p>
                </CardContent>
            </Card>
        </div>

    )
}