import React, { useRef, useState, useEffect } from 'react'
import './chartjs.css'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Chart, getElementAtEvent } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
ChartJS.register(...registerables)

import { Slider, Button } from 'antd'

export const Chartjs = () => {
  const [position, setPosition] = useState(0)
  const updatePosition = value => {
    if (value > 792 || value < 0) {
      return false
    }
    setPosition(value)
    // ref.current.update()
  }
  const onChangeSlider = val => {
    console.log('position:', val)
    updatePosition(val)
  }

  const labels = Array(9000)
    .fill(0)
    .map(() => faker.datatype.number({ min: 100, max: 10000 }))

  // const arr = Array(1)
  //   .fill(0)
  //   .reduce(acc => {
  //     const arrData = [
  //       {
  //         type: 'line',
  //         label: 'Dataset 1',
  //         borderColor: 'rgb(255, 99, 132)',
  //         borderWidth: 2,
  //         fill: false,
  //         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       },
  //       {
  //         type: 'bar',
  //         label: 'Dataset 2',
  //         backgroundColor: 'rgb(75, 192, 192)',
  //         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //         borderColor: 'white',
  //         borderWidth: 2,
  //       },
  //       {
  //         type: 'bar',
  //         label: 'Dataset 3',
  //         backgroundColor: 'rgb(53, 162, 235)',
  //         data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       },
  //     ]
  //     return [...acc, ...arrData]
  //   }, [])

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
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      },
    ],
  }

  // const moveChart = {
  //   id: 'moveChart',
  //   afterDraw(chart, args, pluginOptions) {
  //     const {
  //       ctx,
  //       chartArea: { left, right, top, bottom, width, height },
  //     } = chart
  //     // console.log(chart)
  //   },
  // }

  const options = {
    scales: {
      x: {
        min: 0,
        max: 365,
      },
      y: {
        beginAtZero: true,
      },
    },
    onClick(evt) {
      const { ctx, canvas } = ref.current
      const x = evt.x
      const y = evt.y
      console.log('x:', x)
      console.log('y:', y)
    },
  }

  const ref = useRef()

  const btnClick = () => {
    updatePosition(position + 1)
    console.log(options.scales.x)
  }

  useEffect(() => {
    ref.current.update()
  }, [])

  useEffect(() => {
    if (options.scales.x.min < position) {
      options.scales.x.max = options.scales.x.max + position
    } else {
      options.scales.x.max = options.scales.x.max - position
    }
    options.scales.x.min = position
    ref.current.update()
  }, [position])

  return (
    <div className={'container'}>
      <div className="chart-container">
        <Chart
          id="chart"
          className={'chart'}
          type="bar"
          ref={ref}
          data={data}
          // plugins={[moveChart]}
          options={options}
        ></Chart>
        <div className="chart-container">
          <Slider defaultValue={position} value={position} min={0} max={792} onChange={onChangeSlider} />
        </div>
        <div className="button-container">
          <Button type="primary" onClick={btnClick}>
            next
          </Button>
        </div>
      </div>
    </div>
  )
}
