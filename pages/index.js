import Link from 'next/link';

function Home(){
    return (<div>
            <h1>Home</h1>

            <Link href="/sobre">
                <a>Acessar pagina sobre</a>
            </Link>    
        </div>
    )
}

export default Home