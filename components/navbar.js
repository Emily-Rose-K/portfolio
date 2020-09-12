import Head from 'next/head'
import Link from 'next/link'

export default function Navbar() {

    return (
        <div>
            <Head>
                <title>ERK Portfolio</title>
            </Head>
            <navbar id="nav">
                <ul>
                    <li>
                        <Link href="#home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about_me">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#portfolio">
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </navbar>
        </div>
    )
}