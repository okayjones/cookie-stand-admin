import Head from 'next/head'

import { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import ReportTable from '../components/report_table'

export default function CookieStandAdmin() {
  const [cookieStands, setCookieStands] = useState([])
  const sales_placeholder = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

  function onCreate(event){
    event.preventDefault();
    const newCookieStand = {
      location: event.target.location.value,
      hourly_sales: sales_placeholder,
      id: cookieStands.length,
    }
    setCookieStands([...cookieStands, newCookieStand]);
  }
  
  return (
    <div className="box-border flex flex-col justify-between h-screen min-h-screen bg-green-50">
      <Head>
            <title>Cookie Stand Admin</title>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍪</text></svg>"/>
            {/* from https://css-tricks.com/emojis-as-favicons/ */}
      </Head>
      
      <Header title="Cookie Stand Admin"/>
      <main className="h-full mx-auto text-sm text-center w-min lg:w-5/6">
        <CreateForm />
        <ReportTable cookieStandsArray={cookieStands}/>
      </main>
      <Footer qty={cookieStands.length} />
    </div>
  )
  
  function CreateForm(){
    return(
      <form onSubmit={onCreate} name="formData" className="w-full my-4 text-xs font-bold uppercase bg-green-200 border border-green-400 rounded-md p-7">
        <div className="flex items-stretch justify-between mb-5 gap-x-4">
          <div className="flex-1 w-2/3">
            <label htmlFor="location" className="h-5">Add Location</label>
            <input name="location" placeholder="Cookie Stand Location" className="w-full p-2 mt-2 h-7"></input>
          </div>
          <div className="flex w-1/3 rounded-sm g-green-200">
            <input type="submit" value="Create stand" className="w-full ml-4 uppercase bg-green-500 rounded-sm"></input>
          </div>
        </div>
        <div className="flex items-end justify-between gap-x-12">
          <div className="flex-1 rounded-sm">
            <label htmlFor="minCustomers" className="">Maximum Customers Per Hour</label>
            <input name="minCustomers" className="w-full p-2 mt-2 h-7" value="0"></input>
          </div>
          <div className="flex-1 rounded-sm">
            <label htmlFor="maxCustomers" className="">Minimum Customers Per Hour</label>
            <input name="maxCustomers" className="w-full p-2 mt-2 h-7" value="0"></input>
          </div>
          <div className="flex-1 rounded-sm">
            <label htmlFor="avgCookies" className="">Average Cookies Per Sale</label>
            <input name="avgCookies" className="w-full p-2 mt-2 h-7" value="0"></input>
          </div>
        </div>
      </form>
    )
  }
}