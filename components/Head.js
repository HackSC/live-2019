import { Component } from 'react'

import Head from 'next/head'

class CustomHead extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props

    return (
      <Head>
        <title>{props.title}</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127488741-1"></script>
        <script dangerouslySetInnerHTML={
          {__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-127488741-1');
          `}} />

        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
      </Head>
    )
  }
}

export default CustomHead
