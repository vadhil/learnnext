import Link from 'next/link'

const PageNotFound = () => {

    return <div>
        <h1>404 page not found</h1>
        <Link href="/"><h3>go back to home</h3></Link>
    </div>
}

export default PageNotFound;