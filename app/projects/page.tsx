import Link from "next/link"

export default function Projects() {
    return (
        <div>
            <Link href="/projects/mortgage" className="border-b-4">
                <p>Mortgage Interest Rate, Loan Principal vs Monthly Payment</p>
                <p>Should you stress more about millenials actually buying homes or the fed giving out free money?</p>
            </Link>
        </div>
    )
}
