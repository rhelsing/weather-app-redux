import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

//function component, no state
export default (props) => {
  return (
    <div>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
    </div>
  )

}
