import * as React from 'react';

export const Footer = (props) => (
  <footer className="row footer custom-bg-yellow pv3">
    <div className="copyright col-12 f6 tc">
      Copyright © 2018 Gabriel Eletro. Todos os direitos reservados.
    </div>
    <style>
      {`
        .custom-bg-yellow {
          background: #ffd300;
        }
      `};
    </style>
  </footer>
);

export default Footer;
