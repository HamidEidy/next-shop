'use client'
import { PieChart } from '@mui/x-charts/PieChart';
const Chart = () =>{
    return(
        <PieChart
        series={[
            {
                data: [
                    { id: 0, value: 30, label: 'tailwind' },
                    { id: 1, value: 35, label: 'Typescript' },
                    { id: 2, value: 35, label: 'Next' },
                ],
                highlightScope: { faded: 'global', highlighted: 'item' },
                innerRadius: 48,
                outerRadius: 80,
                paddingAngle: 3,
                cornerRadius: 5,
                startAngle: 0,
                endAngle: 360,
                cx: 158,
                cy: 95,
                
                  
            },
        ]}
        width={450}
        height={200}
    />
    )
}
export default Chart;