import './recharts.css'

import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Button, Slider } from 'antd'
import React, { memo, useMemo, useRef, useState } from 'react'

import Factory from './assets/factory.png'
import { faker } from '@faker-js/faker'

console.log('labels fired')

const _lables = Array(9000)
  .fill(0)
  .reduce((acc, curr, idx) => {
    const obj = {
      name: `D+${idx + 1}`,
      uv: faker.datatype.number({ min: 0, max: 1800 }),
      pv: faker.datatype.number({ min: 0, max: 1800 }),
      amt: faker.datatype.number({ min: 0, max: 1800 }),
      warning: false,
    }
    acc.push(obj)
    // acc.push(index + 1)
    return acc
  }, [])
// return _lables

const division = (배열, n개씩) => {
  console.log('labels fired')

  const length = 배열.length
  const divide = Math.floor(length / n개씩) + (Math.floor(length % n개씩) > 0 ? 1 : 0)
  const newArray = []

  for (let i = 0; i <= divide; i++) {
    newArray.push(배열.splice(0, n개씩))
  }

  return newArray
}

const labels = division(_lables, 24)

const marks = {}

console.log('labels:', labels)
labels[130][0].warning = true
labels[180][0].warning = true
labels[230][0].warning = true
labels[280][0].warning = true

labels.forEach((arr, idx) => {
  const _idx = idx + 1
  const hasWarning = arr.some(item => item.warning)
  if (hasWarning && !marks[_idx]) {
    marks[_idx] = `warning${_idx}`
  }
})

const RenderLineChart = memo(({ current }) => {
  console.log('current', current)
  // const labels = useMemo(() => {
  //   console.log('labels fired')
  //   const _lables = Array(90)
  //     .fill(0)
  //     .reduce((acc, curr, idx) => {
  //       const obj = {
  //         name: `D+${idx + 1}`,
  //         uv: faker.datatype.number({ min: 0, max: 1800 }),
  //         pv: faker.datatype.number({ min: 0, max: 1800 }),
  //         amt: faker.datatype.number({ min: 0, max: 1800 }),
  //       }
  //       acc.push(obj)
  //       // acc.push(index + 1)
  //       return acc
  //     }, [])
  //   // return _lables

  //   const division = (배열, n개씩) => {
  //     const length = 배열.length
  //     const divide = Math.floor(length / n개씩) + (Math.floor(length % n개씩) > 0 ? 1 : 0)
  //     const newArray = []

  //     for (let i = 0; i <= divide; i++) {
  //       // 배열 0부터 n개씩 잘라 새 배열에 넣기
  //       newArray.push(배열.splice(0, n개씩))
  //     }

  //     return newArray
  //   }

  //   const result = division(_lables, 24)

  //   return result
  // }, [])

  console.log('labels:', labels)

  // const fakeData = useMemo(() => {
  //   const numbers = labels.map(() => faker.datatype.number({ min: 0, max: 1800 }))
  //   return numbers
  // }, [])

  // const data = labels.map((item, i) => ({
  //   name: labels[i],
  //   uv: faker.datatype.number({ min: 0, max: 1800 }),
  //   pv: faker.datatype.number({ min: 0, max: 1800 }),
  //   amt: faker.datatype.number({ min: 0, max: 1800 }),
  // }))
  const data = labels[current]

  console.log('data:', data)

  return (
    <ResponsiveContainer width="100%" height="100%" debounce={300}>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amt" barSize={20} fill="#008000" />
        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="pv" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  )
})

// eslint-disable-next-line react/display-name
export const Recharts = memo(() => {
  const [warnChart1, setWarnChart1] = useState('')
  const [warnChart2, setWarnChart2] = useState('')
  const [warnChart3, setWarnChart3] = useState('')
  const [warnChart4, setWarnChart4] = useState('')
  const [value, setValue] = useState(0)

  const updateSliderValue = value => {
    if (value <= 8977 && value >= 0) {
      setValue(value)
    }
  }

  const handleEvent = val => {
    console.log('handleEvent:', val)
    updateSliderValue(val)
    setWarnChart1('')
    setWarnChart2('')
    setWarnChart3('')
    setWarnChart4('')
    console.log('handleEvent:', val)
    if (val > 100 && val <= 150) {
      setWarnChart1('active')
      console.log('setWarnChart1 fired')
      return false
    }
    if (val > 150 && val <= 200) {
      setWarnChart2('active')
      console.log('setWarnChart2 fired')
      return false
    }
    if (val > 200 && val <= 250) {
      setWarnChart3('active')
      console.log('setWarnChart3 fired')
      return false
    }
    if (val > 250 && val <= 300) {
      setWarnChart4('active')
      console.log('setWarnChart4 fired')
      return false
    }
    console.log('switch fired')
  }

  const btnClick = () => {
    handleEvent(value + 1)
  }
  const prevBtnClick = () => {
    handleEvent(value - 1)
  }

  // const marks = {
  //   300: 'warning1',
  //   1800: {
  //     style: {
  //       top: '0px',
  //     },
  //     label: 'warning2',
  //   },
  //   2200: 'warning3',
  //   3400: 'warning4',
  // }
  const tooltip = value => `position ${value + 1}`

  return (
    <>
      <div className="contents">
        <div className="contents-wrapper">
          <div className={['zone', 'zone1', warnChart1].join(' ')}></div>
          <div className={['zone', 'zone2', warnChart2].join(' ')}></div>
          <div className={['zone', 'zone3', warnChart3].join(' ')}></div>
          <div className={['zone', 'zone4', warnChart4].join(' ')}></div>
          <img src={Factory} alt="" className={'img'} />
        </div>
        <div className={'container'}>
          <div className="chart-container">
            <RenderLineChart current={value}></RenderLineChart>
          </div>
          <div className="slider-container">
            <Slider
              marks={marks}
              defaultValue={0}
              min={0}
              max={labels.length - 2}
              onAfterChange={handleEvent}
              tipFormatter={tooltip}
            />
          </div>
          <div className="button-container">
            <Button type="primary" onClick={prevBtnClick}>
              prev
            </Button>
            <Button type="primary" onClick={btnClick}>
              next
            </Button>
          </div>
        </div>
      </div>
    </>
  )
})
