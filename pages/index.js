import Head from 'next/head'
import Footer from '../components/Footer'
import { useState } from 'react'

const Home = () => {
  const [username, setUserName] = useState('')
  const [programmer, setProgrammer] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username)
    setUserName('')
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>GitHub Inspirations</title>
        <link rel="icon" href="/surfing.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          My GitHub Inspirations
        </h1>
        <h2 className="mt-3 text-xl capitalize md:text-3xl">
          programmers whose work I admire
        </h2>

        <section className="mt-6">
          <p className="mt-3 text-xl">
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              // enter a github username below
            </code>
          </p>

          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                className="my-3 outline"
                onChange={(e) => setUserName(e.target.value)}
                value={username}
              />
            </div>
            <button
              type="submit"
              className="px-3 py-2 text-white bg-blue-400 rounded-md"
            >
              Send UserName
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
