import Link from 'next/link'

export default function Home() {
    return (
        <>
            <h1>Examples</h1>
            <Link href="/basic-demo">Basic demo</Link>
            <Link href="/postprocessing-demo">Postprocessing demo</Link>
            <Link href="/postprocessing-demo">Drei &quot;Selection&quot; demo</Link>
        </>
    )
}