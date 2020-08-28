import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

export default function Navbar() {
    useEffect (() => {
        document.getElementById("home").style.color = "#fac800"
        document.getElementById("about").style.color = "#10c840"
        document.getElementById("portfolio").style.color = "#00a0c8"
    })

    return (
        <div>
            <Head>
                <title>ERK Portfolio</title>
            </Head>
            <navbar id="nav">
                <ul>
                    <li>
                        <Link href="/">
                            <a id="home">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a id="about">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio">
                            <a id="portfolio">Portfolio</a>
                        </Link>
                    </li>
                </ul>
            </navbar>
        </div>
    )
}