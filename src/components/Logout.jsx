import { auth } from '../firebase'

const Logout = () => {
  const signOut = () => {
    signOut(auth)
  }

  return (
    <button
      className="bg-gray-200 px-4 py-2 hover:bg-gray-100"
      onClick={() => auth.signOut()}
    >
      Logout
    </button>
  )
}

export default Logout
