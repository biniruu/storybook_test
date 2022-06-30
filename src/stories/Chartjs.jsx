import React, { useRef, useState, useEffect } from 'react'
import './chartjs.css'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
ChartJS.register(...registerables)

import { Slider } from 'antd'

export const Chartjs = () => {
  const onChangeSlider = position => {
    console.log('position:', position)
  }
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  console.log(arr)
  const data = {
    labels,
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      },
    ],
  }
  return (
    <div className={'container'}>
      <Chart className={'chart'} type="bar" data={data}></Chart>
      <div className="chart-container">
        <Slider defaultValue={5} onChange={onChangeSlider} />
      </div>
    </div>
  )
}
