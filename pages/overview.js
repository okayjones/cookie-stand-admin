import Head from 'next/head'
import Link from 'next/Link'
import Header from '../components/cookie-stand-header'



export default function Overview() {
    return(
        <div className="box-border min-h-screen bg-green-50">
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍪</text></svg>"/>
                {/* from https://css-tricks.com/emojis-as-favicons/ */}
            </Head>
            <Header title="Cookie Stand Admin"/>
            <main className="h-full text-sm text-center">
            <button className="px-4 py-2 mt-16 bg-blue-300 rounded">
                <Link href="/">
                <a className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6 mr-4" fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                    Return to Main page
                </a></Link>
            </button>
            </main>
        </div>        
    )
}