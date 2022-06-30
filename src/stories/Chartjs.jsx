import React, { useRef, useState, useEffect } from 'react'
import './chartjs.css'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Chart, getElementAtEvent } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
ChartJS.register(...registerables)

import { Slider } from 'antd'

export const Chartjs = () => {
  const onChangeSlider = position => {
    console.log('position:', position)
  }
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    // 'November',
    // 'December',
  ]

  const arr = Array(300)
    .fill(0)
    .reduce(acc => {
      const arrData = [
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
      ]
      return [...acc, ...arrData]
    }, [])
  console.log(arr.length)
  const data = {
    labels,
    // datasets: [
    //   {
    //     type: 'line',
    //     label: 'Dataset 1',
    //     borderColor: 'rgb(255, 99, 132)',
    //     borderWidth: 2,
    //     fill: false,
    //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   },
    //   {
    //     type: 'bar',
    //     label: 'Dataset 2',
    //     backgroundColor: 'rgb(75, 192, 192)',
    //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //     borderColor: 'white',
    //     borderWidth: 2,
    //   },
    //   {
    //     type: 'bar',
    //     label: 'Dataset 3',
    //     backgroundColor: 'rgb(53, 162, 235)',
    //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   },
    // ],
    datasets: arr,
  }

  const moveChart = {
    id: 'moveChart',
    afterDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
      } = chart
      // console.log(chart)
    },
  }

  // const options = {
  //   scales: {
  //     x: {
  //       min: 0,
  //       max: 10,
  //     },
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  //   // onClick() {
  //   //   console.log('click')
  //   // },
  // }

  const ref = useRef()

  const onClick = evt => {
    // console.log('ref fired')
    console.log(getElementAtEvent(ref.current, evt))
  }

  useEffect(() => {
    ref.current.update()
    const moveScroll = () => {
      const { ctx, canvas } = ref.current
      canvas.addEventListener('click', evt => {
        const rect = canvas.getBoundingClientRect()
        const x = (e.clientX = rect.left)
        const y = (e.clientY = rect.top)
        console.log('x:', x)
        console.log('y:', y)
      })
    }
    ref.current.ctx.onclick = moveScroll()
  }, [])

  return (
    <div className={'container'}>
      <div className="chart-container">
        <Chart id="chart" className={'chart'} type="bar" ref={ref} data={data} plugins={[moveChart]}></Chart>
        <div className="chart-container">
          <Slider defaultValue={5} onChange={onChangeSlider} />
        </div>
      </div>
    </div>
  )
}
