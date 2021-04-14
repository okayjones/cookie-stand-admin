import { hours } from '../assets/data'

export default function ReportTable(props){
    
    if(props.cookieStandsArray.length === 0){
      return(
        <div className="w-full my-6 text-lg text-gray-700">No Cookie Stands Avaliable</div>
      )
    }

    const total_row = hours.map((hour, index) => (
      props.cookieStandsArray.reduce((sum, stand) => sum + stand.hourly_sales[index], 0))
    )
    
    return(
      <table className="w-full my-6 border border-green-500 mb-14">
        <thead className="text-left">
          <tr className="bg-green-400">
            <th className="pl-1 pr-12 py-1.5">Location</th>
            {hours.map(hour => (
                <th className="pl-1 border border-green-500">
                  {hour}
                </th>
              ))}
            <th className="pl-1">Totals</th>
          </tr>
        </thead>
        <tbody>
          {props.cookieStandsArray.map(stand => (
            <tr className="border border-green-500 odd:bg-green-200 even:bg-green-300">
              <td className="px-4 py-1.5 font-bold text-left">
                <span className="float-left">{stand.location}</span>
                <span className="float-right">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </span>
              </td>
              {stand.hourly_sales.map(hour_total => (
                <td className="px-2 text-right border border-green-500">{hour_total}</td>
              ))}
              <td className="px-2 text-right">{stand.hourly_sales.reduce((a, b) => a + b, 0)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="text-left bg-green-400 border-green-500">
            <th className="px-2  py-1.5 border border-green-500">Totals</th>
            {total_row.map(total => (<th className="px-2 font-normal text-right border border-green-500">{total}</th>))} 
            <th className="px-2 font-normal text-right border border-green-500">{total_row.reduce((a,b ) => a + b, 0)}</th>
          </tr>
        </tfoot>
      </table>
    ) 
  }