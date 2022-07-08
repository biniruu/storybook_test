import './react-vis.css'
import '../../node_modules/react-vis/dist/style.css'

import { Button, Slider } from 'antd'
import { HorizontalGridLines, VerticalGridLines, VerticalRectSeries, XAxis, XYPlot, YAxis } from 'react-vis'
import React, { memo, useRef, useState } from 'react'

import Factory from './assets/factory.png'

// eslint-disable-next-line react/display-name
export const ReactVis = memo(() => {
  const [warnChart1, setWarnChart1] = useState('')
  const [warnChart2, setWarnChart2] = useState('')
  const [warnChart3, setWarnChart3] = useState('')
  const [warnChart4, setWarnChart4] = useState('')

  const sliderValue = useRef(0)

  const updateSliderValue = value => {
    if (value <= 8977 && value >= 0) {
      sliderValue.current = value
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

  const btnClick = () => {
    handleEvent(sliderValue.current + 1)
  }
  const prevBtnClick = () => {
    handleEvent(sliderValue.current - 1)
  }

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

  const timestamp = new Date('May 23 2017').getTime()
  const ONE_DAY = 86400000

  const DATA = [
    { x0: ONE_DAY * 2, x: ONE_DAY * 3, y: 1 },
    { x0: ONE_DAY * 7, x: ONE_DAY * 8, y: 1 },
    { x0: ONE_DAY * 8, x: ONE_DAY * 9, y: 1 },
    { x0: ONE_DAY * 9, x: ONE_DAY * 10, y: 2 },
    { x0: ONE_DAY * 10, x: ONE_DAY * 11, y: 2.2 },
    { x0: ONE_DAY * 19, x: ONE_DAY * 20, y: 1 },
    { x0: ONE_DAY * 20, x: ONE_DAY * 21, y: 2.5 },
    { x0: ONE_DAY * 21, x: ONE_DAY * 24, y: 1 },
  ].map(el => ({ x0: el.x0 + timestamp, x: el.x + timestamp, y: el.y }))

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
            <XYPlot
              xDomain={[timestamp - 2 * ONE_DAY, timestamp + 30 * ONE_DAY]}
              yDomain={[0.1, 2.1]}
              xType="time"
              width={300}
              height={300}
              style={{ width: '100vw' }}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <VerticalRectSeries data={DATA} style={{ stroke: '#fff' }} />
            </XYPlot>
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
