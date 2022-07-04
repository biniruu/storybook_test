import React, { useRef, useState, useEffect } from 'react'
import './chartjs.css'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
ChartJS.register(...registerables)

import { Slider, Button } from 'antd'

export const Chartjs = () => {
  const [position, setPosition] = useState(0)
  const updatePosition = value => {
    if (value <= 8977 && value >= 0) {
      setPosition(value)
    }
  }
  // const onChangeSlider = val => {
  //   console.log('position:', val)
  //   updatePosition(val)
  // }

  const labels = Array(9000)
    .fill(0)
    // .map(() => faker.datatype.number({ min: 100, max: 10000 }))
    .reduce((acc, curr, index) => {
      acc.push(`D+${index + 1}`)
      return acc
    }, [])

  const handleEvent = val => {
    console.log('handleEvent:', val)
    updatePosition(val)
  }

  const data = {
    labels,
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
      {
        type: 'scatter',
        label: 'Dataset 4',
        backgroundColor: 'rgb(250, 173, 20)',
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

  const maxScale = 23

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 0,
        max: maxScale,
        // ticks: {
        //   // maxTicksLimit: maxScale,
        //   callback(val, idx) {
        //     // console.log('ticks', val, idx)
        //     return this.getLabelForValue(val)
        //     // return idx % 2 === 0 ? this.getLabelForValue(val) : ''
        //   },
        // },
      },
      y: {
        beginAtZero: true,
        ticks: {
          // forces step size to be 50 units
          stepSize: 25,
        },
      },
    },
    onClick(evt) {
      const { ctx, canvas } = ref.current
      const x = evt.x
      const y = evt.y
    },
  }

  const ref = useRef()

  const btnClick = () => {
    console.log('btnClick', ref.current)
    updatePosition(position + 1)
  }

  useEffect(() => {
    ref.current.update()
  }, [])

  useEffect(() => {
    ref.current.config.options.scales.x.min = position
    ref.current.config.options.scales.x.max = position + maxScale
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
        <div className="slider-container">
          <Slider defaultValue={position} min={0} max={8635} onAfterChange={handleEvent} />
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
