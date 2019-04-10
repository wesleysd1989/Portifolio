import React from 'react'
import Barba from '../../assets/barba.jpg'
import Twitch from '../../assets/twitch.png'

const Session = () => (
  <div>
  <header class="main-header">
        <h1 class="main-logo">Marco Bruno</h1>

        <nav class="main-menu">
            <a class="item" href="#/">Sobre</a>
            <a class="item" href="#/">Portfolio</a>
            <button class="main-btn">Download CV</button>
        </nav>
    </header>
    <section class="wrap-featured">
        <figure class="avatar-profile">
            <img class="photo" src={Barba} alt="Foto de rosto do Barba"/>
        </figure>

        <h1 class="title-featured">
            Meus <strong class="featured">Trabalhos</strong>
        </h1>
        <h2 class="subtitle-featured">Desenvolvedor FrontEnd/UX</h2>

        <a href="#/" class="play-video">
            Começar o vídeo
        </a>

        <aside class="wrap-social">
            <h1 class="title-rotate">Me segue ae:</h1>

            <ul class="social-media">
                <li class="item">
                    <a class="action -facebook" rel="noopener noreferrer" href="http://facebook.com/marco.bruno.br">
                        Facebook
                    </a>
                </li>
                <li class="item">
                    <a class="action -twitter" rel="noopener noreferrer" href="http://twitter.com/marcobrunobr">
                        Twitter
                    </a>
                </li>
                <li class="item">
                    <a class="action -linkedin" rel="noopener noreferrer" href="http://linkedin.com/in/marcobrunobr">
                        Linkedin
                    </a>
                </li>
            </ul>
        </aside>
    </section>

    <section class="wrap-channel">
        <dl class="card-channel">
            <dd class="logo">
                <img src={Twitch} alt="Logo da twitch.tv"/>
            </dd>
            <dt class="title">Aulas ao vivo - Twitch</dt>
            <dd class="description">As aulas são ao vivo e de graça focadas em troca de conhecimento entre todos</dd>
            <dd class="main-btn -card btn">
                <a href="#/">Twitch.tv</a>
            </dd>
        </dl>

        <dl class="card-channel">
            <dd class="logo">
                <img src={Twitch} alt="Logo da twitch.tv"/>
            </dd>
            <dt class="title">Video aulas - YouTube</dt>
            <dd class="description">As aulas são ao vivo e de graça focadas em troca de conhecimento entre todos</dd>
            <dd class="main-btn -card btn">
                <a href="#/">Twitch.tv</a>
            </dd>
        </dl>

        <dl class="card-channel">
            <dd class="logo">
                <img src={Twitch} alt="Logo da twitch.tv"/>
            </dd>
            <dt class="title">Posts - Medium</dt>
            <dd class="description">As aulas são ao vivo e de graça focadas em troca de conhecimento entre todos</dd>
            <dd class="main-btn -card btn">
                <a href="#/">Twitch.tv</a>
            </dd>
        </dl>
    </section>

    <section class="wrap-projects">
        <h1 class="main-title">Projetos pessoais</h1>
        <h2 class="main-subtitle">FrontEnd e UX</h2>

        <img class="main-figure" src="img/first.jpg" alt="Exemplo"/>
        <img class="main-figure" src="img/second.jpg" alt="Exemplo"/>
        <img class="main-figure" src="img/third.jpg" alt="Exemplo"/>

        <article class="main-card">
            <div class="content">
                <h1 class="title">Projeto</h1>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nemo. Temporibus,
                    molestias voluptatibus! Placeat similique reiciendis alias quas! Amet culpa veritatis placeat eligendi
                    cumque voluptates maiores ad libero repudiandae facilis?</p>
            </div>

            <figure class="main-expand">
                <figcaption class="subtitle">Ver grande</figcaption>
                <img class="picture" src="img/expand.svg" alt="Icone para ver a imagem full"/>
            </figure>
        </article>

        <img class="main-figure" src="img/fourth.jpg" alt="Exemplo"/>
        <div>
            <img class="main-figure" src="img/fifth.jpg" alt="Exemplo"/>
            <img class="main-figure" src="img/sixth.jpg" alt="Exemplo"/>
            <img class="main-figure" src="img/seventh.jpg" alt="Exemplo"/>
        </div>
    </section>

    <section>
        <h1 class="main-title">Depoimentos</h1>
        <h2 class="main-subtitle">Pessoas felizes</h2>

        <div class="main-carousel">
            <ol class="cards">
                <li id="first" class="card -left">
                    <figure>
                        <div class="wrapPicture">
                            <img class="picture" src="img/avatar.jpg" alt="Foto do Marco"/>
                        </div>
                        <figcaption class="name">Marco Bruno, SP</figcaption>
                    </figure>
                    <p class="testimony">
                        Writing paragraphs takes practice, but what should students write about? Good paragraph writing prompts allow students to
                        write about what they know and like, so their focus can be on the writing process and using the four
                        essential elements.
                    </p>
                </li>
                <li id="second" class="card -isActive">
                    <figure>
                        <div class="wrapPicture">
                            <img class="picture" src="img/avatar.jpg" alt="Foto do Marco"/>
                        </div>
                        <figcaption class="name">Marco Bruno, SP</figcaption>
                    </figure>
                    <p class="testimony">
                        Writing paragraphs takes practice, but what should students write about? Good paragraph writing prompts allow students to
                        write about what they know and like, so their focus can be on the writing process and using the four
                        essential elements.
                    </p>
                </li>
                <li id="third" class="card -right">
                    <figure>
                        <div class="wrapPicture">
                            <img class="picture" src="img/avatar.jpg" alt="Foto do Marco"/>
                        </div>
                        <figcaption class="name">Marco Bruno, SP</figcaption>
                    </figure>
                    <p class="testimony">
                        Writing paragraphs takes practice, but what should students write about? Good paragraph writing prompts allow students to
                        write about what they know and like, so their focus can be on the writing process and using the four
                        essential elements.
                    </p>
                </li>
            </ol>

            <ol class="bullets">
                <li class="bullet">
                    <a href="#first">Primeiro</a>
                </li>
                <li class="bullet -isActive">
                    <a href="#second">Segundo</a>
                </li>
                <li class="bullet">
                    <a href="#third">Terceiro</a>
                </li>
            </ol>
        </div>
    </section>

    <section>
        <h1 class="main-title">Você quer me contratar?</h1>
        <h2 class="main-subtitle">Se você gostou do meu trabalho</h2>

        <form action="" class="main-form">
            <input type="text" class="input" placeholder="Coloque seu email"/>
            <input type="submit" value="Enviar" class="main-btn -card btn"/>
        </form>
    </section>

    <footer class="main-footer">
        <h1 class="main-logo">Marco Bruno</h1>

        <nav class="navigation">
            <a href="#/" class="action">Sobre</a>
            <a href="#/" class="action">Portfolio</a>
            <a href="#/" class="action">Download CV</a>
        </nav>

        <ul class="social">
            <li class="item">
                <a class="link" href="http://facebook.com/marco.bruno.br">Facebook do Marco Bruno</a>
            </li>
            <li class="item">
                <a class="link" href="http://twitter.com/marcobrunobr">Twitter do Marco Bruno</a>
            </li>
            <li class="item">
                <a class="link" href="http://linkedin.com/in/marcobrunobr">Linkedin do Marco Bruno</a>
            </li>
        </ul>
    </footer>
    </div>
)
export default Session