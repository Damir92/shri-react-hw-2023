import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { StoreProvider } from '@/redux/StoreProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.scss'

const roboto = Roboto({ weight: [ '400', '500', '700' ] })

export const metadata: Metadata = {
  title: 'Билетопоиск',
  description: 'Ресурс покупки билетов в кинотеатры',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <StoreProvider>
          <>
            <Header/>
            <main>{children}</main>
          </>
        </StoreProvider>
        <Footer/>
        <div id="modal"/>
      </body>
    </html>
  )
}
