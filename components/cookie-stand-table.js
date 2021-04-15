import { hours } from '../data'

export default function CookieStandTable({ stands, onDelete }) {

    return (
        <Table>
            <thead>
                <tr className="text-left bg-green-400">
                    <TH>Location</TH>
                    {hours.map(slot => (
                        <TH key={slot}>{slot}</TH>
                    ))}
                    <TH>Totals</TH>
                </tr>
            </thead>
            <tbody>
                {stands.map((stand, i) => {
                    return (
                        <tr key={stand.id} className="text-right border border-green-500 odd:bg-green-200 even:bg-green-300">
                            <TH>
                                <div>
                                    <p className="float-left pl-4">{stand.location}</p>
                                    <span className="float-right pr-2" onClick={() => onDelete(stand)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    </span>
                                </div>
                            </TH>
                            {stand.cookiesEachHour.map((amt, i) => (
                                <TD key={i}>
                                    {amt}
                                </TD>
                            ))}
                            <TD>{stand.totalDailyCookies}</TD>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr className="text-right bg-green-400">
                    <TH>Totals</TH>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0);
                        return <TD key={'amt' + i}>{amt}</TD>
                    })}
                    <TD>{stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</TD>
                </tr>
            </tfoot>
        </Table>

    );
}

function Table({ children }) {
    return (
        <table className="w-full m-2 mx-auto text-sm border border-green-500">
            {children}
        </table>
    );
}
function TH({ children }) {
    return (
        <th className="p-1 text-left border border-green-500 ">{children}</th>
    )
}

function TD({ children }) {
    return (
        <td className="p-1.5 border border-green-500">{children}</td>
    )
}
