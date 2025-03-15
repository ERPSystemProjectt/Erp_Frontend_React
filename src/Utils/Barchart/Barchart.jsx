import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Barchart = () => {
    const [state] = React.useState({
        series: [
            {
                data: [21, 22, 10, 28, 16, 21, 13, 30],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                        // Optional: Handle click events here
                        console.log(chart, w, e);
                    },
                },
            },
            colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    distributed: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            xaxis: {
                categories: [
                    ['John', 'Doe'],
                    ['Joe', 'Smith'],
                    ['Jake', 'Williams'],
                    'Amber',
                    ['Peter', 'Brown'],
                    ['Mary', 'Evans'],
                    ['David', 'Wilson'],
                    ['Lily', 'Roberts'],
                ],
                labels: {
                    style: {
                        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
                        fontSize: '12px',
                    },
                },
            },
        },
    });

    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="bar"
                height={350}
            />
        </div>
    );
};

export default Barchart;
