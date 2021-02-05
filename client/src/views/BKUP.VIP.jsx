import { React, useState} from 'react'
//import vipImage from '../vip.jpg'

const VIP = (props) => {
        const [color, setColor] = useState('#1569a8');
	return (
		<div className='VIP'>
			<h1>Welcome to the VIP!</h1>

      <h1 className="title">React html5 Color Input</h1>

      <label className="color-selector">
        <span className="circle" style={{ background: color }} />
        <span>{color}</span>
        <input
          type="color"
          value={color}
          onChange={(evt)=>setColor(evt.target.value)}
         />
      </label>
		</div>
	)
}

/*
const MyColoredItem = (props) => {

}
*/

export default VIP
