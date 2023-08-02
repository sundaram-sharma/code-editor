import React, { useState } from 'react'
import {v4 as uuidV4} from 'uuid';

const HomePage = () => {

    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');

    const createNewRoom = (e) =>{

        e.preventDefault(); //prevent page from re-loading as this is in anchor tag

        const id = uuidV4;
        setRoomId(id);
        console.log(id);

    }

  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img className='homePageLogo' src="/code-sync.png" alt="code-sync-logo"></img>
            <h4 className='mainLabel'> Paste invitation ROOM ID</h4>
            <div className='inputGroup'>
                <input 
                    type='text'
                    className='inputBox'
                    placeholder='ROOM ID'
                    onChange={(e) => setRoomId(e.target.value)}
                    value={roomId}
                />
                <input 
                    type='text'
                    className='inputBox'
                    placeholder='USERNAME'
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                />
                <button className='btn joinBtn'>Join</button>
                <span className="createInfo">
                    If you don't have an invite then create &nbsp; 
                    <a onClick={createNewRoom} href="" className='createNewBtn'>
                        new room
                    </a>
                </span>
            </div>
        </div>
        <footer>
            <h4>
                Build with 💛&nbsp;by&nbsp;<a href="https://github.com/sundaram-sharma">Sundaram Sharma</a>
            </h4>
        </footer>
    </div>
  )
}

export default HomePage