import Link from 'next/link'

export default function CookieStandHeader({ username, onLogout }){
    return (
      <header className="flex items-center justify-around p-3 mb-4 text-2xl bg-green-500">
        <h1 className="font-bold text-gray-800">Cookie Stand Admin</h1>
        <div className="flex items-center justify-around gap-x-3">
            <p className="px-2 text-sm bg-green-100 rounded-md">{username}</p>
          <Link href="/">
                <button className="px-2 text-sm text-white bg-green-700 rounded-md">
                  { username  &&  <a onClick={onLogout} >Sign Out</a> }
                </button>
          </Link>
          <Link href="/overview">
            <button className="px-2 text-sm rounded-md bg-green-50">
              <a>Overview</a>
            </button>
          </Link>
        </div>
      </header> 
    )
  }