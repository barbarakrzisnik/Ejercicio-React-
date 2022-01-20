import "../styles/Article.scss";


const Article = (props) => {
    return (
        <article>
            <h1>{props.titulo}</h1>
            <h1>{props.subtitulo}</h1>
            <img src={props.imagen} />
        </article>
    )
}

export default Article