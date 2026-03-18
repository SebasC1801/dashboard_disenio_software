"use client";

export function BarChart() {
  const data = [
    { month: "JAN", value: 2000, percentage: null },
    { month: "FEB", value: 4200, percentage: null },
    { month: "MAR", value: 3000, percentage: null },
    { month: "APR", value: 5000, percentage: "+17.8%" },
    { month: "MAY", value: 3600, percentage: null },
    { month: "JUN", value: 4500, percentage: null },
  ];

  const maxValue = 5000;

  return (
    <div className="w-full h-full relative px-12 py-8">
      {/* Y-axis labels */}
      <div className="absolute left-2 top-8 bottom-16 flex flex-col justify-between text-xs text-gray-400">
        <span>5k</span>
        <span>4k</span>
        <span>3k</span>
        <span>2k</span>
        <span>1k</span>
        <span>0</span>
      </div>

      {/* Bars container */}
      <div className="flex items-end justify-around gap-6 h-full pb-8">
        {data.map((item, index) => {
          const heightPercentage = (item.value / maxValue) * 100;
          const isHighlighted = item.percentage !== null;

          return (
            <div key={index} className="flex flex-col items-center justify-end flex-1 h-full relative">
              {/* Percentage badge */}
              {item.percentage && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="px-3 py-1.5 rounded-full text-xs text-white font-semibold mb-2" style={{backgroundColor: '#108653'}}>
                    {item.percentage}
                  </div>
                  <div className="w-3 h-3 rounded-full mb-1" style={{backgroundColor: '#108653'}}></div>
                </div>
              )}

              {/* Bar with pattern */}
              <div 
                className="w-full rounded-full relative overflow-hidden mb-2"
                style={{ 
                  height: `${heightPercentage}%`,
                  backgroundColor: isHighlighted ? '#108653' : '#86EFAC',
                  minHeight: '20px'
                }}
              >
                {/* Diagonal stripes pattern */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 4px,
                      ${isHighlighted ? 'rgba(6, 95, 70, 0.3)' : 'rgba(5, 150, 105, 0.3)'} 4px,
                      ${isHighlighted ? 'rgba(6, 95, 70, 0.3)' : 'rgba(5, 150, 105, 0.3)'} 8px
                    )`
                  }}
                />
              </div>

              {/* Month label */}
              <span className="text-xs text-gray-400 font-medium">{item.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
