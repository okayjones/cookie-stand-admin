import Head from 'next/head'

import { useState } from 'react'
import { hours } from '../assets/data'
import Footer from '../components/footer'
import Header from '../components/header'

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
    <div className="box-border min-h-screen bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍪</text></svg>"/>
        {/* from https://css-tricks.com/emojis-as-favicons/ */}
      </Head>
      
      <Header title="Cookie Stand Admin"/>
      <main className="h-full text-sm text-center">
        <CreateForm />
        <ReportTable cookieStandsArray={cookieStands}/>
      </main>
      <Footer qty={cookieStands.length} />
    </div>
  )
  
  function CreateForm(){
    return(
      <form onSubmit={onCreate} name="formData" className="flex-row w-2/3 p-4 mx-auto my-5 text-xs bg-green-300 rounded-md">
      <h1 className="mb-4 text-lg">Create Cookie Stand</h1>
      <div className="flex">
        <label htmlFor="location" className="pr-2">Location</label>
        <input name="location" className="flex-1"></input>
      </div>
      <div className="flex items-stretch justify-between pt-6 gap-x-2">
        <div className="flex-1 p-2 bg-green-200 rounded-sm">
          <label htmlFor="minCustomers" className="">Maximum Customers Per Hour</label>
          <input name="minCustomers" className="w-full"></input>
        </div>
        <div className="flex-1 p-2 bg-green-200 rounded-sm">
          <label htmlFor="maxCustomers" className="">Minimum Customers Per Hour</label>
          <input name="maxCustomers" className="w-full"></input>
        </div>
        <div className="flex-1 p-2 bg-green-200 rounded-sm">
          <label htmlFor="avgCookies" className="">Average Cookies Per Sale</label>
          <input name="avgCookies" className="w-full"></input>
        </div>
        <div className="flex-1 bg-green-200 rounded-sm">
          <input type="submit" value="Create" className="w-full h-full bg-green-500 rounded-sm"></input>
        </div>
      </div>
    </form>
    )
  }
  
  function ReportTable(props){
    
    if(cookieStands.length === 0){
      return(
        <div className="my-6 text-lg text-gray-700">No Cookie Stands Avaliable</div>
      )
    }

    const total_row = hours.map((hour, index) => (
      props.cookieStandsArray.reduce((sum, stand) => sum + stand.hourly_sales[index], 0))
    )
    
    return(
      <table className="w-2/3 mx-auto my-6 mb-14">
        <thead>
          <tr className="bg-green-500">
            <th>Location</th>
            {hours.map(hour => (<th>{hour}</th>))}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
          {props.cookieStandsArray.map(stand => (
            <tr className="border border-gray-500 odd:bg-green-400 even:bg-green-300">
              <td className="px-2 text-left border border-gray-500">{stand.location}</td>
              {stand.hourly_sales.map(hour_total => (
                <td className="border border-gray-500">{hour_total}</td>
              ))}
              <td>{stand.hourly_sales.reduce((a, b) => a + b, 0)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-green-500">
            <th className="border border-gray-500">Totals</th>
            {total_row.map(total => (<th className="border border-gray-500">{total}</th>))} 
            <th className="border border-gray-500">{total_row.reduce((a,b ) => a + b, 0)}</th>
          </tr>
        </tfoot>
      </table>
    ) 
  }
}