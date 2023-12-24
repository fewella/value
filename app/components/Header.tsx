import Link from "next/link"

export default function Header() {
    return (
        <div className="align-text-center w-full py-10 px-14 flex">
            <div className="w-1/3 bg-red-100">
                <p className="font-Pacifico">This is where my logo would go<br />if I had one</p>
            </div>

            <div className="w-1/3 text-center justify-around">
    
                <Link href="/projects" className="hover:underline px-5">Method</Link>
                <Link href="/projects" className="hover:underline px-5">Picks</Link>
                <Link href="/projects" className="hover:underline px-5">Metrics</Link>
                <Link href="/projects" className="hover:underline px-5">Little Things :&gt;</Link>
                        
            </div>

            <div className="w-1/3 text-right">
                <button className="border rounded px-5">Contact</button>
            </div>
            
        </div>
    )
}