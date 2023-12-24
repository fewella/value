import Link from "next/link"

import { Pacifico } from 'next/font/google'

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })

export default function Header() {
    return (
        <div className="align-text-center w-full py-10 px-14 flex">
            <div className="w-1/3">
                <Link href="/" className={pacifico.className}>This is where my logo would go<br />IF I HAD ONE</Link>
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