import {Layout} from "./common"
import {wrapper} from '../redux/store.ts'
import App from "next/app"
import Head from "next/head"
import "../public/fonts/font.css"
// import './user/style/UserLayout.scss'
// import "./user/style/UserRegister.scss"

const MyApp = ({ Component, pageProps }) => { // props
  return (<>
    <Head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <title>Pet Diary App</title>
    </Head>
    <Layout className="main">
      <Component {...pageProps} />
    </Layout>
  </>)
  App.propTypes = {
    Component : propTypes.elementType.isRequired, // JSX
    pageProps : PropTypes.any.isRequired // {}, []
  }
}

export default wrapper.withRedux(MyApp)