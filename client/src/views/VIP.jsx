import React, { useState } from 'react';

const VIP = (props) => {
	const [color,setColor] = useState('#1569a8');
       const [myColorCombinations, setMyColorCombinations] = useState(
			[
				{id:1, name:"Floor",color:'0x00ff00'},
				{id:2, name:"Sofa",color:'0xff0000'},
				{id:3, name:"Wall",color:'0x0000ff'},
				{id:4, name:"Ceiling",color:'0xffff00'}
			]);
       const updateColor = (element) => {
			let myNewColorCombo = [...myColorCombinations];
			/**
			for (let ix=0; ix<myNewColorCombo.length; ++ix) {
				if (myNewColorCombo[ix].id === element.id) 
					myNewColorCombo[ix].color = color;
			}
			**/
			let foundElt = myNewColorCombo.find(({id})=>id==element.id);
                        foundElt.color=color;
			setMyColorCombinations(myNewColorCombo);
	}

       return (
                <div className='VIP'>
      <label className="color-selector">
        <span>Click on Circle to choose color-></span>
        <span className="circle" style={{ background: color }} />
        <span>{color}</span>
        <input
          type="color"
          value={color}
          onChange={(evt)=>setColor(evt.target.value)}
          className="hidden"
         />
      </label>
      {
	/* alert("isArray"+Array.isArray(myColorCombinations)) */
	myColorCombinations.map((elt,ix) => {
			return <ColoredElement key={elt.id} element={elt} updateColor={updateColor}/>})
      } 
                </div>
        )
}

const ColoredElement = ({element, updateColor}) => {
   return (
	<div onClick={e=>updateColor(element)} style={{width: 300, height: 100, 
			backgroundColor:element.color}}>
		<h1>{element.name}</h1>
	</div>
	);
}

export default VIP
