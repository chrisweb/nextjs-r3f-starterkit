import Link from 'next/link'

export default function Home() {
    return (
        <>
            <h1>Examples</h1>
            <ul>
                <li><Link href="/basic-demo">Basic R3F demo</Link> (works)</li>
                <li><Link href="/postprocessing-demo">Postprocessing demo</Link> (works)</li>
                <li><Link href="/drei-selection-demo">Drei &quot;Selection&quot; demo</Link> (fails)</li>
                <li><Link href="/leva-demo">Leva demo</Link> (works)</li>
                <li><Link href="/xr-demo">XR demo</Link> (fails)</li>
            </ul>
        </>
    )
}