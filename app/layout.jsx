import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "AGRIFARM",
    description: "Rent Farming tools"
}

const RootLayout = ({ children }) => {

    
  return (
    <html lang='en'>
        <body>
            <Provider>
                <main className="app">
                    <Nav/>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout