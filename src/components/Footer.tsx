import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
           {" "}
      <div className="footer-content">
               {" "}
        <div className="footer-section company">
                    <h3>EAZY PROJECT</h3>         {" "}
          <p>
                        Moda y estilo de alto impacto. Diseños exclusivos para
            gente que no teme destacar.          {" "}
          </p>
                 {" "}
        </div>
               {" "}
        <div className="footer-section links">
                    <h3>INFORMACIÓN</h3>         {" "}
          <ul>
                       {" "}
            <li>
                            <Link to="/about">Sobre Nosotros</Link>           {" "}
            </li>
                       {" "}
            <li>
                            <Link to="/contact">Contacto</Link>           {" "}
            </li>
                       {" "}
            <li>
                            <Link to="/careers">Trabaja con Nosotros</Link>     
                   {" "}
            </li>
                     {" "}
          </ul>
                 {" "}
        </div>
               {" "}
        <div className="footer-section legal">
                    <h3>ASUNTOS LEGALES</h3>         {" "}
          <ul>
                       {" "}
            <li>
                            <Link to="/terms">Términos y Condiciones</Link>     
                   {" "}
            </li>
                       {" "}
            <li>
                            <Link to="/privacy">Política de Privacidad</Link>   
                     {" "}
            </li>
                       {" "}
            <li>
                            <Link to="/cookies">Uso de Cookies</Link>           {" "}
            </li>
                       {" "}
            <li>
                            <Link to="/returns">Política de Devoluciones</Link> 
                       {" "}
            </li>
                     {" "}
          </ul>
                 {" "}
        </div>
               {" "}
        <div className="footer-section social">
                    <h3>SÍGUENOS</h3>         {" "}
          <div className="social-icons">
                        {/* redes */}           {" "}
            <a
              // aqui van las redes, href para la url de la red social, target para abrir en una nueva pestaña, rel para seguridad, noopener es para añadir seguridad, y noreferrer lo mismo, y son para que no se abra en la misma pestaña
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
                            <FaInstagram size={24} />           {" "}
            </a>
                       {" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
                            <FaTwitter size={24} />           {" "}
            </a>
                       {" "}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
                            <FaFacebook size={24} />           {" "}
            </a>
                     {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </div>
           {" "}
      <div className="footer-bottom">
                &copy; {new Date().getFullYear()} EAZY PROJECT. Todos los
        derechos reservados.      {" "}
      </div>
         {" "}
    </footer>
  );
};

export default Footer;
