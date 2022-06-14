import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import segan from '../public/Sagan.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="gif">
        <img src={andromeda}>

        </img>
      </div>
      <Head>
        <title>React Prueba</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

      </Head>
      <main className={styles.main}>

        <h1>
          Carl Sagan
        </h1>
        <img className={Sagan} src={Sagan} alt='Sagan' />
        <nav>
          <ul>
            <li>
              <a href='/'>Inicio</a>
            </li>
          </ul>
        </nav>

        <h2>
          Biografia

        </h2>
        <p>
          Carl Edward Sagan (Nueva York, 9 de noviembre de 1934 - Seattle, 20 de diciembre de 1996) fue un astrónomo, astrofísico, cosmólogo, astrobiólogo, escritor y divulgador científico estadounidense. Inicialmente fue profesor asociado de la Universidad de Harvard y posteriormente profesor principal de la Universidad de Cornell. En esta última, fue el primer científico en ocupar la Cátedra David Duncan de Astronomía y Ciencias del Espacio, creada en 1976, y además director del Laboratorio de Estudios Planetarios.

          Fue un defensor del pensamiento escéptico científico y del método científico, pionero de la exobiología, promotor de la búsqueda de inteligencia extraterrestre a través del proyecto SETI. Impulsó el envío de mensajes a bordo de sondas espaciales, destinados a informar a posibles civilizaciones extraterrestres acerca de la cultura humana. Mediante sus observaciones de la atmósfera de Venus, fue de los primeros científicos en estudiar el efecto invernadero a escala planetaria.

          Carl Sagan ganó gran popularidad gracias a la galardonada serie documental de TV Cosmos: Un viaje personal, producida en 1980, de la que fue narrador y coautor. También publicó numerosos artículos científicos,1​ y fue autor, coautor o editor de más de una veintena de libros de divulgación científica, siendo los más populares sus libros Cosmos, publicados como complemento de la serie, y Contacto, en el que se basa la película homónima de 1997. En 1978 ganó el Premio Pulitzer de Literatura General de No Ficción por su libro Los dragones del Edén.

          A lo largo de su vida, Sagan recibió numerosos premios y condecoraciones por su labor como comunicador de la ciencia y la cultura. Hoy es considerado uno de los divulgadores de la ciencia más carismáticos e influyentes, gracias a su capacidad de transmitir las ideas científicas y los aspectos culturales al público no especializado con sencillez no exenta de rigor.
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://folcademy.folclass.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered For Folcademy{' '}
          <span className={styles.logo}>

          </span>
        </a>
      </footer>
    </div>
  )
}
