import {useState} from "react";
export function TwitterFollowCard({children, userName, name, initialIsFollowing}){
    //Estado con useState, el estado esta separado del exterior, es un estado interno contenido en el componente
    //Cuando se actualiza el estado se hace una renderización, también cuando el componente padre cambia de estado
    const [isFollowing, setIsFollowing] = useState(false);
    //NOTA: Un estado también se puede inicializar con el valor de una propiedad, pero hay que tomar en cuenta que:
        //El estado inicial solo se realiza una vez, si mas adelante el valor de la propiedad cambia en el prop padre,
        //esto no quiere decir que el componente hijo reinicialice el estado y por ende renderice de nuevo para ver los cambios

    //const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    //Renderizado condicional
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassFollow = isFollowing ? 'mc-tw-follow-button is-following' : 'mc-tw-follow-button'
    const imgAvatar = `https://unavatar.io/github/${userName}`
    return (
        <article className='mc-tw-follow'>
            <header className='mc-tw-follow-header'>
                <img className='mc-tw-follow-avatar' alt="avatar" src={imgAvatar}/>
                <div className='mc-tw-follow-div'>
                    <strong>{name}</strong>
                    <span className='mc-tw-follow-span'>@{userName}</span>
                    {children}
                </div>
            </header>
            <aside>
                <button className={buttonClassFollow} onClick={handleClick}>
                    <span className='mc-tw-follow-txt'>{text}</span>
                    <span className="mc-tw-follow-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}