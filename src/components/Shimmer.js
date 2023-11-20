import React from 'react'
import "./Shimmer.css"

export default function Shimmer() {
  return (
     <div className="shimmer-card">
     <div className="shimmer-content">
       <div className="shimmer-line shimmer-line-short"></div>
       <div className="shimmer-line shimmer-line-long"></div>
     </div>
   </div>
  )
}
