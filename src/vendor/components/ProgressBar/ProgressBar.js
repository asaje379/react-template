import React from 'react'

export default function ProgressBar({
  percentage = 0,
  showPercentage = true,
  color = 'primary',
}) {

  const css = 'block bg-' + color;
  const values = new Array(100).fill(1);

  return (
    <div className="progressbar">
      {values.map((el, index) => {
        return <div key={index} className={index < percentage ? css : 'block bg-gray'}></div>
      })}
      {showPercentage && <div className="percentage">
        {Math.floor(percentage)} %
      </div>}
    </div>
  )
}
