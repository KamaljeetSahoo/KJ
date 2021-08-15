import React from 'react'

const Footer = () => {
    var social_networks = [
        {
            "name": "github",
            "class": "fab fa-github",
            "url": "https://github.com/KamaljeetSahoo"
        },
        {
            "name": "linkedin",
            "class": "fab fa-linkedin",
            "url": "https://www.linkedin.com/in/kamaljeet-sahoo-347705134/"
        },
        {
            "name": "instagram",
            "class": "fab fa-instagram",
            "url": "https://www.instagram.com/kamaljeet_kjs/"
        },
        {
            "name": "facebook",
            "class": "fab fa-facebook",
            "url": "https://www.facebook.com/kamaljeetsahoo1606"
        },
        {
            "name": "twitter",
            "class": "fab fa-twitter",
            "url": "https://twitter.com/kamaljeet_sahoo"
        }

    ]
    const networks = social_networks.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    return (
        <footer>
            <div className="col-md-12">
            <div className="social-links">{networks}</div>

            <div className="copyright py-4 text-center">
            <div className="container">
                <small>
                Copyright &copy;{" "}Kamaljeet
                </small>
            </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer
