import './recharts.css'

import { Button, Slider } from 'antd'
import React, { memo, useRef, useState } from 'react'

import Factory from './assets/factory.png'

// eslint-disable-next-line react/display-name
export const Recharts = memo(() => {
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
