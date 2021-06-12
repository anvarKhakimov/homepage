import Head from 'next/head'
import { YandexMetrika } from '../utils/YandexMetrika'
import { GoogleAnalitics } from '../utils/GoogleTag'

const environment = process.env.NODE_ENV
const yandexVerification = "8664febce672d14c"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
            {environment !== "development" ?
                <> 
                <meta name="yandex-verification" content={yandexVerification} />
                <YandexMetrika /> 
                <GoogleAnalitics />
                </>
                : null}
            </Head>

            <div id="main" className="main">
                {children}
            </div>
        </>
    );
}

export default Layout;