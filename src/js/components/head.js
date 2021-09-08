const head = () => {
  return (
    <div className={"head"}>
      <div className="container">
        <div className="about">
          <h4 className="text-white">About</h4>
          <p className="text-muted">
            Esta aplicación está dirigida a que usted conozca algo más de sus
            cantantes favoritos, puede buscar por artista o grupo musical
            introduciendo su nombre correcto en el campo de búsqueda. La misma
            está desarrollada a partir de un examen técnico propuesto por Cura
            Deuda
            <a href="http://www.curadeuda.com" className="text-white">
              www.curadeuda.com
            </a>
            . Saludos !...
          </p>
        </div>

        <div className="contact">
          <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li>
              <ion-icon name="logo-twitter"></ion-icon>
              <a href="https://twitter.com/" className="text-white">
                Follow on Twitter
              </a>
            </li>
            <li>
              <ion-icon name="logo-facebook"></ion-icon>

              <a
                href="https://www.facebook.com/rafaelleonides.perezgonzalez"
                className="text-white"
              >
                Like on Facebook
              </a>
            </li>
            <li>
              <ion-icon name="logo-instagram"></ion-icon>
              <a
                href="https://www.instagram.com/rafaleonides/"
                className="text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default head;
