import Link from 'next/link'

export default function Home() {
    return (
        <>
            <h1>Examples</h1>
            <ul>
                <li><Link href="/basic-demo">Basic demo</Link></li>
                <li><Link href="/postprocessing-demo">Postprocessing demo</Link></li>
                <li><Link href="/drei-selection-demo">Drei &quot;Selection&quot; demo</Link></li>
            </ul>
        </>
    )
}