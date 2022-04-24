import styled from "styled-components";

const MyStyle = styled.div`
  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: " (" attr(href) ")";
    }

    abbr[title]:after {
      content: " (" attr(title) ")";
    }

    a[href^="#"]:after,
    a[href^="javascript:"]:after {
      content: "";
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  html {
    font-size: 12px;
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 48rem) {
    html {
      font-size: 16px;
    }
  }

  body {
    line-height: 1.85;
  }

  p,
  .air-p {
    font-size: 1.2rem;
    margin-bottom: 1.3rem;
  }

  h1,
  .air-h1,
  h2,
  .air-h2,
  h3,
  .air-h3,
  h4,
  .air-h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1,
  .air-h1 {
    margin-top: 0;
    font-size: 3rem;
    font-weight: 600;
  }

  h2,
  .air-h2 {
    font-weight: 600;
    font-size: 2.3rem;
  }

  h3,
  .air-h3 {
    font-weight: 600;
    font-size: 1.999rem;
  }

  h4,
  .air-h4 {
    font-weight: 600;
    font-size: 1.414rem;
  }

  h5,
  .air-h5 {
    font-weight: 600;
    font-size: 1.121rem;
  }

  h6,
  .air-h6 {
    font-weight: 600;
    font-size: 0.88rem;
  }

  small,
  .air-small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  @import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,300);

  body {
    color: #444;
    font-family: "Open Sans", Helvetica, sans-serif;
    font-weight: 300;
    margin: 6rem auto 1rem;
    max-width: 48rem;
    text-align: center;
  }

  img {
    border-radius: 5px;
    height: auto;
    margin: 0 auto;
    width: auto;
  }

  a,
  a:visited {
    color: #3498db;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2980b9;
  }

  iframe {
    width: 100%;
  }

  pre {
    border-radius: 3px;
    margin-bottom: 5px;
    text-align: left;
    overflow-x: auto;
  }

  blockquote {
    margin-bottom: 0.7em;
    border-left: 5px solid #7a7a7a;
    font-style: italic;
    padding: 1em;
    text-align: left;
    p {
      margin: 0 auto;
    }
  }

  ul,
  ol {
    padding-left: 40px;
    margin-bottom: 1em;
  }

  ul,
  ol,
  li {
    font-size: 1.2rem;
    text-align: left;
  }

  @media only screen and (max-width: 768px) {
    h1,
    .air-h1,
    h2,
    .air-h2,
    h3,
    .air-h3,
    h4,
    .air-h4 {
      margin: 1.414rem 0 0.5rem;
      font-weight: inherit;
      line-height: 1.42;
    }

    h1,
    .air-h1 {
      margin-top: 0;
      font-size: 2rem;
      font-weight: 600;
    }

    h2,
    .air-h2 {
      font-weight: 600;
      font-size: 1.7rem;
    }

    h3,
    .air-h3 {
      font-weight: 600;
      font-size: 1.6rem;
    }

    h4,
    .air-h4 {
      font-weight: 600;
      font-size: 1.2rem;
    }

    h5,
    .air-h5 {
      font-weight: 600;
      font-size: 1rem;
    }

    h6,
    .air-h6 {
      font-weight: 600;
      font-size: 0.88rem;
    }
  }
`;

export default MyStyle;
