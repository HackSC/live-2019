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

        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
      </Head>
    )
  }
}

export default CustomHead
