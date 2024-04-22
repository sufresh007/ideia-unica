import { AnnotationIcon, Button, Link } from "evergreen-ui"


function Home(){
    return (<div>
            <h1>Home</h1>

            <Button iconBefore = {AnnotationIcon} >botao</Button>
            <Link href="/sobre">
                <a>Acessar pagina Sobre</a>   
            </Link>    
        </div>)
}



export default Home