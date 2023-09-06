import React, { useState } from 'react'
import {Link} from "react-router-dom"
import './SendRecieve.css'
export default function SendRecieve({onButtonClick}) {

    const [flag,setFlag] = useState(0);
    const [flagg,setFlagg] = useState(0);
    const onClick = ()=>{
        setFlag(!flag);
        fetch('/getServerURL') // Replace with your endpoint to retrieve the server's URL
        .then(response => response.json())
        .then(data => {
          // Check if the data contains the server's URL
          if (data.serverURL) {
            // Set the window location to the retrieved server's URL
            window.location.href = data.serverURL;
          } else {
            console.error('Server URL not found in the response');
          }
        })
        .catch(error => console.error('Error fetching server URL:', error));
    }
    const onClickk = ()=>{
        setFlagg(!flagg);
    }
    

  return (
    <div>
        <div className="initialButton">
            <div className="popUp">
                <div className="circularButton" onClick={onClick}><Link to='input-file' className='link'>Send</Link></div>
                {/* <div className={`element`}>
                    <div className={`viaWhat left ${flag?'open':'close'} `} onClick={onButtonClick}><Link to = 'input-file'>via LAN</Link></div>
                    <div className={`viaWhat ${flag?'open':'close'} `}>via drive</div>
                    <div className={`viaWhat right ${flag?'open':'close'} `}>via hotspot</div>
                </div> */}
            </div>
            <div className='popUp'>
                <div className="circularButton" onClick={onClickk}><Link to='recieve-file' className='link'>Recieve</Link></div>
                {/* <div className={`element`}>
                    <div className={`viaWhat left ${flagg?'open':'close'} `}><Link to = 'input-file'>via LAN</Link></div>
                    <div className={`viaWhat ${flagg?'open':'close'} `}>via drive</div>
                    <div className={`viaWhat right ${flagg?'open':'close'} `}>via hotspot</div>
                </div> */}
            </div>
        </div>
    </div>
  )
}
