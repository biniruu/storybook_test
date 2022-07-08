import './chartjs.css'

import { Button, Slider } from 'antd'
import { Chart as ChartJS, registerables } from 'chart.js'
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Chart } from 'react-chartjs-2'
import Factory from './assets/factory.png'
import { faker } from '@faker-js/faker'

ChartJS.register(...registerables)

// eslint-disable-next-line react/display-name
export const Chartjs = memo(() => {
  const [warnChart1, setWarnChart1] = useState('')
  const [warnChart2, setWarnChart2] = useState('')
  const [warnChart3, setWarnChart3] = useState('')
  const [warnChart4, setWarnChart4] = useState('')

  const maxScale = 23
  const sliderValue = useRef(0)

  const updateSliderValue = value => {
    if (value <= 8977 && value >= 0) {
      sliderValue.current = value
      ref.current.config.options.scales.x.min = sliderValue.current
      ref.current.config.options.scales.x.max = sliderValue.current + maxScale
      ref.current.update()
    }
  }

  // const onChangeSlider = val => {
  //   console.log('position:', val)
  //   updateSliderValue(val)
  // }

  const handleEvent = val => {
    console.log('handleEvent:', val)
    updateSliderValue(val)
    setWarnChart1('')
    setWarnChart2('')
    setWarnChart3('')
    setWarnChart4('')
    console.log('handleEvent:', val)
    if (val > 100 && val <= 1000) {
      setWarnChart1('active')
      console.log('setWarnChart1 fired')
      return false
    }
    if (val > 1000 && val <= 2000) {
      setWarnChart2('active')
      console.log('setWarnChart2 fired')
      return false
    }
    if (val > 2000 && val <= 3000) {
      setWarnChart3('active')
      console.log('setWarnChart3 fired')
      return false
    }
    if (val > 3000 && val <= 4000) {
      setWarnChart4('active')
      console.log('setWarnChart4 fired')
      return false
    }
    console.log('switch fired')
  }

  const labels = useMemo(() => {
    console.log('labels fired')
    const _lables = Array(9000)
      .fill(0)
      .reduce((acc, curr, index) => {
        acc.push(`D+${index + 1}`)
        // acc.push(index + 1)
        return acc
      }, [])
    return _lables
  }, [])

  // TODO: remove
  // const labels = Array(9000)
  //   .fill(0)
  //   .reduce((acc, curr, index) => {
  //     acc.push(`D+${index + 1}`)
  //     // acc.push(index + 1)
  //     return acc
  //   }, [])

  const scatter = ['undefined', 'undefined', 'undefined', 30, 50]

  const fakeData = useMemo(() => {
    const numbers = labels.map(() => faker.datatype.number({ min: 0, max: 100 }))
    return numbers
  }, [])

  // const fakeData = labels.map(() => faker.datatype.number({ min: 0, max: 100 }))

  const data = {
    labels,
    datasets: [
      {
        type: 'scatter',
        label: '규동',
        backgroundColor: 'rgb(250, 173, 20)',
        data: scatter,
      },
      {
        type: 'line',
        label: '회전익동',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: fakeData,
      },
      {
        type: 'bar',
        label: '설비동',
        backgroundColor: 'rgb(75, 192, 192)',
        data: fakeData,
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: '봉천동',
        backgroundColor: 'rgb(53, 162, 235)',
        data: fakeData,
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
    handleEvent(sliderValue.current + 1)
  }
  const prevBtnClick = () => {
    handleEvent(sliderValue.current - 1)
  }

  // const setPickup = evt => {
  //   const dataset = ref.current.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, false)
  //   const idx = dataset[0] && dataset[0].datasetIndex
  //   const _data = data?.datasets[idx]
  //   // return _data
  //   console.log(_data)
  // }

  const marks = {
    300: 'warning1',
    1800: {
      style: {
        top: '0px',
      },
      label: 'warning2',
    },
    2200: 'warning3',
    3400: 'warning4',
  }

  // const callback = useCallback(function (val) {
  //   // console.log('callback:', this)
  //   // if (val >= sliderValue.current && val <= sliderValue.current + maxScale) {
  //   //   console.log('ticks', val)
  //   //   return val
  //   // }
  //   // console.log('out of range', val)
  //   // // return sliderValue.current + val
  //   // return val
  //   if (val >= sliderValue.current && val <= sliderValue.current + maxScale) {
  //     console.log('ticks', val)
  //     return this.getLabelForValue(val)
  //   }
  //   console.log('out of range', val)
  //   return this.getLabelForValue(sliderValue.current + val)
  // }, [])

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // dataset label 노출 여부
      },
    },
    scales: {
      x: {
        min: 0,
        max: maxScale,
        ticks: {
          // maxTicksLimit: maxScale,
          callback(val, idx) {
            if (val >= sliderValue.current && val <= sliderValue.current + maxScale) {
              console.log('ticks', val)
              return this.getLabelForValue(val)
            }
            console.log('out of range', val)
            return this.getLabelForValue(sliderValue.current + val)
          },
          // callback(val) {
          //   useEffect(function (val) {
          //     const self = this
          //     ticksCallback(val, self)
          //   })
          // },
          // callback,
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
      // setPickup(evt)
      console.log('onClick', evt)
    },
  }

  const ref = useRef(null)

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
            <Chart
              id="chart"
              className={'chart'}
              type="bar"
              ref={ref}
              data={data}
              // plugins={[moveChart]}
              options={options}
            ></Chart>
          </div>
          <div className="slider-container">
            <Slider marks={marks} defaultValue={0} min={0} max={8635} onAfterChange={handleEvent} />
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
