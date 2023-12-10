import './App.css';
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";
export function App() {
    //React es declarativo(se define desde un principio que se desea), imperativo es que instrucciones debe serguir para llegar a un resultado
    //Podemos pasar como propiedad de un componente, variables, funciones, ejecución de funciones, elementos, children
    /*Cual es la diferencia entre componente y elemento?
     R: El componente es la factoria de elementos, el elemento es el resultado es generado por un componente, como su resultado,
     react solo se encarga de renderizar los elementos generados en el componente
     */
    //const formatUserName = (userName) =>`@${userName}`
    //Las props deben ser inmutables, no se deben modificar o asignar un nuevo valor a una propiedad, lo correcto es crear una constante y a ella setearle el nuevo valor
    //Children es todo aquello que es envuelto por las etiquetas del componente <componente>[children]</componente>, lo que esta adentro se reccupera con el property children

    return (
        <div className='cont-cards'>
            {/*
              <TwitterFollowCard formatName={formatUserName} userName="MickeChi" name="Miguel Angel Chi" isFollowing/>
            */}
            <TwitterFollowCard userName="MickeChi" name="Miguel Angel Chi">
                <span>children</span>
            </TwitterFollowCard>
            <TwitterFollowCard userName="mdo" name="Mauricio Dominguez"/>
        </div>
    )
}