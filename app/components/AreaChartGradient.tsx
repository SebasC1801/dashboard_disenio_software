"use client";

import { scaleTime, scaleLinear, line as d3line, max, area as d3area, curveMonotoneX } from "d3";

const sales = [
  { date: "2023-04-30", value: 4 },
  { date: "2023-05-01", value: 6 },
  { date: "2023-05-02", value: 8 },
  { date: "2023-05-03", value: 7 },
  { date: "2023-05-04", value: 10 },
  { date: "2023-05-05", value: 12 },
  { date: "2023-05-06", value: 10.5 },
  { date: "2023-05-07", value: 6 },
  { date: "2023-05-08", value: 8 },
  { date: "2023-05-09", value: 7.5 },
  { date: "2023-05-10", value: 6 },
  { date: "2023-05-11", value: 8 },
  { date: "2023-05-12", value: 9 },
  { date: "2023-05-13", value: 10 },
  { date: "2023-05-14", value: 17 },
  { date: "2023-05-15", value: 14 },
  { date: "2023-05-16", value: 15 },
  { date: "2023-05-17", value: 20 },
  { date: "2023-05-18", value: 18 },
  { date: "2023-05-19", value: 16 },
  { date: "2023-05-20", value: 15 },
  { date: "2023-05-21", value: 16 },
  { date: "2023-05-22", value: 13 },
  { date: "2023-05-23", value: 11 },
  { date: "2023-05-24", value: 11 },
  { date: "2023-05-25", value: 13 },
  { date: "2023-05-26", value: 12 },
  { date: "2023-05-27", value: 9 },
  { date: "2023-05-28", value: 8 },
  { date: "2023-05-29", value: 10 },
  { date: "2023-05-30", value: 11 },
  { date: "2023-05-31", value: 8 },
  { date: "2023-06-01", value: 9 },
  { date: "2023-06-02", value: 10 },
  { date: "2023-06-03", value: 12 },
  { date: "2023-06-04", value: 13 },
  { date: "2023-06-05", value: 15 },
  { date: "2023-06-06", value: 13.5 },
  { date: "2023-06-07", value: 13 },
  { date: "2023-06-08", value: 13 },
  { date: "2023-06-09", value: 14 },
  { date: "2023-06-10", value: 13 },
  { date: "2023-06-11", value: 12.5 },
];

let data = sales.map((d) => ({ ...d, date: new Date(d.date) }));

export function AreaChartGradient() {
  let xScale = scaleTime()
    .domain([data[0].date, data[data.length - 1].date])
    .range([0, 100]);

  let yScale = scaleLinear()
    .domain([0, max(data.map((d) => d.value)) ?? 0])
    .range([100, 0]);

  let line = d3line<(typeof data)[number]>()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value))
    .curve(curveMonotoneX);

  let area = d3area<(typeof data)[number]>()
    .x((d) => xScale(d.date))
    .y0(yScale(0))
    .y1((d) => yScale(d.value))
    .curve(curveMonotoneX);

  let areaPath = area(data) ?? undefined;

  let d = line(data);

  if (!d) {
    return null;
  }

  const gridLines = [0, 20, 40, 60, 80, 100];

  return (
    <div className="relative h-24 w-full">
      <div
        className="absolute inset-0
        h-full
        w-full
        overflow-visible"
      >
        {/* Chart area */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {gridLines.map((y, index) => (
            <line
              key={index}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="#e5e7eb"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Area */}
          <path d={areaPath} className="text-blue-200" fill="url(#areaGradient)" />
          <defs>
            {/* Gradient definition */}
            <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0%"
                stopColor="#108653"
                stopOpacity="0.3"
              />
              <stop
                offset="90%"
                stopColor="#108653"
                stopOpacity="0.05"
              />
            </linearGradient>
          </defs>

          {/* Line */}
          <path
            d={d}
            fill="none"
            stroke="#108653"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
}
