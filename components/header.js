import Link from 'next/Link'

export default function Header(props){
    return(
      <header className="flex items-center justify-between p-3 text-2xl bg-green-500">
        <h1 className="">{props.title}</h1>
        <button className="px-1 text-sm rounded-sm bg-green-50">
        <Link href="/overview">
          <a>Overview</a>
        </Link>
        </button>
      </header> 
    )
  }