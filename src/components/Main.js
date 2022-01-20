import Article from "./Article"

const Main = () => {
    return (
       <main>
           <Article 
           titulo="Titulo 1"
           subtitulo="Esto es un subtitulo"
           imagen="http://placekitten.com/g/200/300"/>
           <Article 
           titulo="Titulo 2"
           subtitulo="Esto es otro subtitulo"
           imagen="http://placekitten.com/g/200/300"/>

       </main>
    );
};

export default Main