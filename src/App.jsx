import { useAuthState } from 'react-firebase-hooks/auth'

import Navbar from './components/Navbar'
import { auth } from './firebase'
import Chat from './components/Chat'

function App() {
  const style = {
    appContainer: `max-w-[720px] mx-auto text-center`,
  }

  const [user] = useAuthState(auth)

  return (
    <div className={style.appContainer}>
      <section className="flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative">
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  )
}

export default App
