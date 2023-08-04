import React, {useState} from 'react'
import Client from '../components/Client';
import Editor from '../components/Editor';

const EditorPage = () => {

  const  [clients, setClients] = useState([ //temp hardcoded values
    {socketId: 1, username: 'Rakesh K'},
    {socketId: 2, username: 'John Cena'}
  ]);

  return (
    <div className='mainWrap'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'>
            <img 
              className='logo-image' 
              src='/code-sync.png' 
              alt='logo'
            />
          </div>
          <h3>Connected</h3>
          <div className='clientsList'>
           {clients.map((client) => (
            <Client key={client.socketId} username={client.username}/>
           ))}
          </div>
        </div>

            <button className='btn copyBtn'>Copy ROOM ID</button>
            <button className='btn leaveBtn'>Leave</button>
      </div>
      <div className='editorWrap'>
        <Editor/>
      </div>
    </div>
  )
}

export default EditorPage