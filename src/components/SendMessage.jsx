import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { useState } from 'react'

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    if (input === '') {
      alert('Enter a valid message')
      return
    }

    const { uid, displayName } = auth.currentUser
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    })
    setInput('')
    scroll.current.scrollIntoView({ behaviour: 'smooth' })
  }

  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full max-w-[720px] flex text-xl absolute bottom-0"
    >
      <input
        type="text"
        placeholder="Type a message.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
      />
      <button
        className="w-[20%] bg-green-500 text-white hover:bg-green-600"
        type="submit"
      >
        Send
      </button>
    </form>
  )
}

export default SendMessage
