import { useState, useEffect } from 'react'
import { PrototypePortfolio } from './PrototypePortfolio.jsx';
import { RightSideBar } from './RightSideBar.jsx'

export function EditPortfolio() {
    let [componentData, setComponentData] = useState({
        text: 'Hi, I\'m Loris Crisafo Norte',
        bold: true,
        italic: false,
    });
    let [imgData, setImgData] = useState({
        src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
        border: 1,
        radius: 5,
        color: '#000000'

    });
    /**
     {
  "portfolio": {
    "components": [
      {
        "id": 1,
        "type": "text",
        "font": "Arial",
        "size": "14px",
        "color": "#000000",
        "bold": false,
        "italic": false,
        "position": {
          "x": 0,
          "y": 0
        },
        "size": 1,
      },
      {
        "id": 2,
        "type": "image",
        "src": "image.jpg",
        "border": {
          "width": "1px",
          "radius": "5px",
          "color": "#000000"
        },
        "position": {
          "x": 0,
          "y": 0
        },
        "size": 1,

      }
    ]
  }
}
     */
    return (
        <>
            <PrototypePortfolio componentData={componentData} imgData={imgData} />
            <RightSideBar componentData={componentData} setComponentData={setComponentData} imgData={imgData} setImgData={setImgData} />
        </>
    )
}
export default EditPortfolio