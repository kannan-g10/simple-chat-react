import { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import SendMessage from './SendMessage'

const Chat = () => {
  const [messages, setMessages] = useState([])
  const scroll = useRef()

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id })
      })

      setMessages(messages)
    })

    return () => unsubscribe()
  }, [])

  return (
    <>
      <main className="flex flex-col p-2.5 relative">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </>
  )
}

export default Chat
