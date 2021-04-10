import Head from 'next/head'
import { useState } from 'react'
import { hours } from '../assets/data'

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
  
  function CreateForm(){
    return(
      <form onSubmit={onCreate} name="formData" className="flex-row p-4 mx-48 my-5 text-xs bg-green-300 rounded-md min-w-min">
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
  
  function ReportTable(props){
    
    if(cookieStands.length === 0){
      return(
        <div className="my-4">No Cookie Stands Avaliable</div>
      )
    }

    const total_row = hours.map((hour, index) => (
      props.cookieStandsArray.reduce((sum, stand) => sum + stand.hourly_sales[index], 0))
    )
    
    return(
      <table>
        <thead>
          <tr>
            <th>Location</th>
            {hours.map(hour => (<th>{hour}</th>))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {props.cookieStandsArray.map(stand => (
            <tr>
              <td>{stand.location}</td>
              {stand.hourly_sales.map(hour_total => (<td>{hour_total}</td>))}
              {stand.hourly_sales.reduce((a, b) => a + b, 0)}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            {total_row.map(total => (<th>{total}</th>))} 
            <th>{total_row.reduce((a,b ) => a + b, 0)}</th>
          </tr>
        </tfoot>
      </table>
    ) 
  }
  
  function Footer(){
    return(
      <footer className="p-3 text-sm bg-green-500">
        <p>{cookieStands.length} Locations World Wide</p>
      </footer>
    )
  }

}