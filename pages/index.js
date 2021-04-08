import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  
  const [NewCookieStand, setNewCookieStand] = useState('')

  function createCookieStandHandler(event){
    event.preventDefault();
    const formData = new FormData(event.target)
    const newCookieStand = JSON.stringify(Object.fromEntries(formData)) 
    setNewCookieStand(newCookieStand);
  }
  
  return (
    <div className="bg-green-50 min-h-screen box-border">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍪</text></svg>"/>
        {/* from https://css-tricks.com/emojis-as-favicons/ */}
      </Head>

      <header className="bg-green-500 p-2 text-2xl">
        <h1 className="">Cookie Stand Admin</h1>
      </header>
      
      <main className="h-full text-sm text-center">

        <form onSubmit={createCookieStandHandler} name="formData" className="flex-row mx-48 min-w-min p-4 my-5 rounded-md bg-green-300">
          <h1 className="text-lg mb-4">Create Cookie Stand</h1>
          <div className="flex">
            <label for="location" className="pr-2">Location</label>
            <input name="location" className="flex-1 bg-blue-50"></input>
          </div>
          <div className="flex justify-between items-end gap-x-4 pt-6">
            <div className="flex-1">
              <label for="minCustomers" className="">Maximum Customers Per Hour</label>
              <input name="minCustomers" className="w-full"></input>
            </div>
            <div className="flex-1">
              <label for="maxCustomers" className="">Minimum Customers Per Hour</label>
              <input name="maxCustomers" className="w-full"></input>
            </div>
            <div className="flex-1">
              <label for="avgCookies" className="">Average Cookies Per Sale</label>
              <input name="avgCookies" className="w-full"></input>
            </div>
            <div className="flex-1 self-stretch">
              <input type="submit" value="Create" className="bg-green-500 w-full h-full"></input>
            </div>
          </div>
        </form>
        <div className="text-gray-500 my-8">
          <p>Report Table Coming Soon...</p>
          <p className="my-8">{NewCookieStand}</p>
        </div>
        </main>
      <footer className="bg-green-500 p-3 text-xs">
        <p>©2021</p>
      </footer>
    </div>
  )
}
