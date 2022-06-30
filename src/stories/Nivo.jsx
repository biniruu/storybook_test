import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
import './nivo.css'
import { ResponsiveBump } from '@nivo/bump'

const MyResponsiveBar = () => {
  const data = [
    {
      country: 'AD',
      'hot dog': 106,
      'hot dogColor': 'hsl(177, 70%, 50%)',
      burger: 140,
      burgerColor: 'hsl(66, 70%, 50%)',
      sandwich: 144,
      sandwichColor: 'hsl(218, 70%, 50%)',
      kebab: 190,
      kebabColor: 'hsl(326, 70%, 50%)',
      fries: 141,
      friesColor: 'hsl(158, 70%, 50%)',
      donut: 173,
      donutColor: 'hsl(223, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 73,
      'hot dogColor': 'hsl(87, 70%, 50%)',
      burger: 62,
      burgerColor: 'hsl(229, 70%, 50%)',
      sandwich: 26,
      sandwichColor: 'hsl(113, 70%, 50%)',
      kebab: 137,
      kebabColor: 'hsl(295, 70%, 50%)',
      fries: 165,
      friesColor: 'hsl(231, 70%, 50%)',
      donut: 18,
      donutColor: 'hsl(168, 70%, 50%)',
    },
    {
      country: 'AF',
      'hot dog': 4,
      'hot dogColor': 'hsl(129, 70%, 50%)',
      burger: 169,
      burgerColor: 'hsl(68, 70%, 50%)',
      sandwich: 182,
      sandwichColor: 'hsl(327, 70%, 50%)',
      kebab: 174,
      kebabColor: 'hsl(78, 70%, 50%)',
      fries: 83,
      friesColor: 'hsl(61, 70%, 50%)',
      donut: 169,
      donutColor: 'hsl(100, 70%, 50%)',
    },
    {
      country: 'AG',
      'hot dog': 104,
      'hot dogColor': 'hsl(2, 70%, 50%)',
      burger: 24,
      burgerColor: 'hsl(193, 70%, 50%)',
      sandwich: 25,
      sandwichColor: 'hsl(234, 70%, 50%)',
      kebab: 47,
      kebabColor: 'hsl(142, 70%, 50%)',
      fries: 59,
      friesColor: 'hsl(205, 70%, 50%)',
      donut: 163,
      donutColor: 'hsl(98, 70%, 50%)',
    },
    {
      country: 'AI',
      'hot dog': 161,
      'hot dogColor': 'hsl(16, 70%, 50%)',
      burger: 124,
      burgerColor: 'hsl(223, 70%, 50%)',
      sandwich: 44,
      sandwichColor: 'hsl(126, 70%, 50%)',
      kebab: 94,
      kebabColor: 'hsl(240, 70%, 50%)',
      fries: 68,
      friesColor: 'hsl(90, 70%, 50%)',
      donut: 35,
      donutColor: 'hsl(323, 70%, 50%)',
    },
    {
      country: 'AL',
      'hot dog': 89,
      'hot dogColor': 'hsl(107, 70%, 50%)',
      burger: 171,
      burgerColor: 'hsl(217, 70%, 50%)',
      sandwich: 38,
      sandwichColor: 'hsl(7, 70%, 50%)',
      kebab: 18,
      kebabColor: 'hsl(138, 70%, 50%)',
      fries: 133,
      friesColor: 'hsl(241, 70%, 50%)',
      donut: 51,
      donutColor: 'hsl(341, 70%, 50%)',
    },
    {
      country: 'AM',
      'hot dog': 26,
      'hot dogColor': 'hsl(51, 70%, 50%)',
      burger: 170,
      burgerColor: 'hsl(3, 70%, 50%)',
      sandwich: 37,
      sandwichColor: 'hsl(92, 70%, 50%)',
      kebab: 123,
      kebabColor: 'hsl(349, 70%, 50%)',
      fries: 24,
      friesColor: 'hsl(113, 70%, 50%)',
      donut: 137,
      donutColor: 'hsl(38, 70%, 50%)',
    },
  ]

  return (
    <div className="wrapper">
      <ResponsiveBar
        data={data}
        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        height={500}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'fries',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'sandwich',
            },
            id: 'lines',
          },
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
        }}
      />
    </div>
  )
}

const MyResponsiveBump = () => {
  const data = [
    {
      id: 'Serie 1',
      data: [
        {
          x: 2000,
          y: 5,
        },
        {
          x: 2001,
          y: 10,
        },
        {
          x: 2002,
          y: 8,
        },
        {
          x: 2003,
          y: 6,
        },
        {
          x: 2004,
          y: 7,
        },
      ],
    },
    {
      id: 'Serie 2',
      data: [
        {
          x: 2000,
          y: 1,
        },
        {
          x: 2001,
          y: 8,
        },
        {
          x: 2002,
          y: 12,
        },
        {
          x: 2003,
          y: 2,
        },
        {
          x: 2004,
          y: 10,
        },
      ],
    },
    {
      id: 'Serie 3',
      data: [
        {
          x: 2000,
          y: 3,
        },
        {
          x: 2001,
          y: 6,
        },
        {
          x: 2002,
          y: 5,
        },
        {
          x: 2003,
          y: 10,
        },
        {
          x: 2004,
          y: 3,
        },
      ],
    },
    {
      id: 'Serie 4',
      data: [
        {
          x: 2000,
          y: 8,
        },
        {
          x: 2001,
          y: 3,
        },
        {
          x: 2002,
          y: 9,
        },
        {
          x: 2003,
          y: 12,
        },
        {
          x: 2004,
          y: 4,
        },
      ],
    },
    {
      id: 'Serie 5',
      data: [
        {
          x: 2000,
          y: 6,
        },
        {
          x: 2001,
          y: 11,
        },
        {
          x: 2002,
          y: 6,
        },
        {
          x: 2003,
          y: 5,
        },
        {
          x: 2004,
          y: 2,
        },
      ],
    },
    {
      id: 'Serie 6',
      data: [
        {
          x: 2000,
          y: 2,
        },
        {
          x: 2001,
          y: 5,
        },
        {
          x: 2002,
          y: 1,
        },
        {
          x: 2003,
          y: 9,
        },
        {
          x: 2004,
          y: 6,
        },
      ],
    },
    {
      id: 'Serie 7',
      data: [
        {
          x: 2000,
          y: 4,
        },
        {
          x: 2001,
          y: 4,
        },
        {
          x: 2002,
          y: 4,
        },
        {
          x: 2003,
          y: 4,
        },
        {
          x: 2004,
          y: 8,
        },
      ],
    },
    {
      id: 'Serie 8',
      data: [
        {
          x: 2000,
          y: 7,
        },
        {
          x: 2001,
          y: 1,
        },
        {
          x: 2002,
          y: 3,
        },
        {
          x: 2003,
          y: 8,
        },
        {
          x: 2004,
          y: 12,
        },
      ],
    },
    {
      id: 'Serie 9',
      data: [
        {
          x: 2000,
          y: 10,
        },
        {
          x: 2001,
          y: 9,
        },
        {
          x: 2002,
          y: 2,
        },
        {
          x: 2003,
          y: 7,
        },
        {
          x: 2004,
          y: 9,
        },
      ],
    },
    {
      id: 'Serie 10',
      data: [
        {
          x: 2000,
          y: 11,
        },
        {
          x: 2001,
          y: 7,
        },
        {
          x: 2002,
          y: 10,
        },
        {
          x: 2003,
          y: 1,
        },
        {
          x: 2004,
          y: 5,
        },
      ],
    },
    {
      id: 'Serie 11',
      data: [
        {
          x: 2000,
          y: 9,
        },
        {
          x: 2001,
          y: 2,
        },
        {
          x: 2002,
          y: 7,
        },
        {
          x: 2003,
          y: 11,
        },
        {
          x: 2004,
          y: 1,
        },
      ],
    },
    {
      id: 'Serie 12',
      data: [
        {
          x: 2000,
          y: 12,
        },
        {
          x: 2001,
          y: 12,
        },
        {
          x: 2002,
          y: 11,
        },
        {
          x: 2003,
          y: 3,
        },
        {
          x: 2004,
          y: 11,
        },
      ],
    },
  ]

  return (
    <div className={['wrapper', 'wrapper2'].join(' ')}>
      <ResponsiveBump
        data={data}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ranking',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
      />
    </div>
  )
}

export const Nivo = () => {
  return (
    <>
      {/* <section className="container"> */}
      <h1 className="heading">Nivo</h1>
      <MyResponsiveBar />
      <MyResponsiveBump />
      {/* </section> */}
    </>
  )
}
