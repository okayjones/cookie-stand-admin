import { hours } from '../assets/data'

export default function ReportTable(props){
    
    if(props.cookieStandsArray.length === 0){
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