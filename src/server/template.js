/* eslint-disable prefer-template, max-len */
import Helmet from 'react-helmet';

export default vo => {

  const helmet = Helmet.rewind();

  return `
  <!DOCTYPE html>
  <html lang="en" ${helmet.htmlAttributes.toString()}>
    <head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${helmet.meta.toString()}
      <link id="favicon" rel="shortcut icon" href="/kyt-favicon.png" sizes="16x16 32x32" type="image/png" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css">
      ${vo.cssBundle ? '<link rel="stylesheet" type="text/css" href="' + vo.cssBundle + '">' : ''}
      ${helmet.title.toString()}
      ${helmet.link.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root"><div>${vo.root}</div></div>
      <script src="${vo.jsBundle}"></script>
    </body>
  </html>
  `
}
