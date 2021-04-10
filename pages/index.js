import Head from 'next/head'
import { useState } from 'react'

export default function CookieStandAdmin() {
  const [cookieStands, setCookieStands] = useState([])

  function onCreate(event){
    event.preventDefault();
    const newCookieStand = {
      location: event.target.location.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      id: cookieStands.length
    }
    setCookieStands([...cookieStands, newCookieStand]);
  }
  
  return (
    <div className="box-border min-h-screen bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍪</text></svg>"/>
        {/* from https://css-tricks.com/emojis-as-favicons/ */}
      </Head>
      
      <Header title="Cookie Stand Admin"/>
      <main className="h-full text-sm text-center">
        <CreateForm />
      </main>
      <Footer locations="PLACEHOLDER"/>
    </div>
  )
  
  function Header(props){
    return(
      <header className="p-2 text-2xl bg-green-500">
        <h1 className="">{props.title}</h1>
      </header> 
    )
  }
  
  function CreateForm(props){
    return(
      <form onSubmit={onCreate} name="formData" className="flex-row p-4 mx-48 my-5 bg-green-300 rounded-md min-w-min">
      <h1 className="mb-4 text-lg">Create Cookie Stand</h1>
      <div className="flex">
        <label htmlFor="location" className="pr-2">Location</label>
        <input name="location" className="flex-1 bg-blue-50"></input>
      </div>
      <div className="flex items-end justify-between pt-6 gap-x-4">
        <div className="flex-1">
          <label htmlFor="minCustomers" className="">Maximum Customers Per Hour</label>
          <input name="minCustomers" className="w-full"></input>
        </div>
        <div className="flex-1">
          <label htmlFor="maxCustomers" className="">Minimum Customers Per Hour</label>
          <input name="maxCustomers" className="w-full"></input>
        </div>
        <div className="flex-1">
          <label htmlFor="avgCookies" className="">Average Cookies Per Sale</label>
          <input name="avgCookies" className="w-full"></input>
        </div>
        <div className="self-stretch flex-1">
          <input type="submit" value="Create" className="w-full h-full bg-green-500"></input>
        </div>
      </div>
    </form>
    )
  }
  
  function Footer(props){
    return(
      <footer className="p-3 text-xs bg-green-500">
        <p>{props.locations} Locations World Wide</p>
      </footer>
    )
  }

}