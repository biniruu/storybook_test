import './chartjs.css'

import { Button, Slider } from 'antd'
import { Chart as ChartJS, registerables } from 'chart.js'
import React, { useEffect, useRef, useState } from 'react'

import { Chart } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(...registerables)

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

  const handleEvent = val => {
    console.log('handleEvent:', val)
    updatePosition(val)
  }

  const labels = Array(9000)
    .fill(0)
    // .map(() => faker.datatype.number({ min: 100, max: 10000 }))
    .reduce((acc, curr, index) => {
      acc.push(`D+${index + 1}`)
      return acc
    }, [])

  const scatter = ['undefined', 'undefined', 'undefined', 30, 50]

  const data = {
    labels,
    datasets: [
      {
        type: 'line',
        label: '회전익동',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      },
      {
        type: 'bar',
        label: '설비동',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: '봉천동',
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      },
      {
        type: 'scatter',
        label: '규동',
        backgroundColor: 'rgb(250, 173, 20)',
        data: scatter,
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

  const maxScale = 23

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 0,
        max: maxScale,
        ticks: {
          // maxTicksLimit: maxScale,
          callback(val, idx) {
            // console.log('ticks', val, idx)
            return this.getLabelForValue(val)
          },
          z: 9,
        },
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
      const dataset = ref.current.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false)
      const label = data.datasets[dataset[0].datasetIndex].label
      console.log(label)
    },
  }

  const ref = useRef()

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
