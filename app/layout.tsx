import MainHeader from '@/components/mainHeader'
import './globals.css'
import { Inter } from 'next/font/google'
import MainFooter from '@/components/mainFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-cyan-800 md:h-screen  text-white'}>
        <div className='bg-black opacity-70 md:h-full'>
          <section className='mx-[5%] md:h-[9%]'>
            <MainHeader />
          </section>
          <section className='mx-[5%] md:h-[80%]'>
            {children}
          </section>
          <section className='md:h-[9%]  py-5 md:py-0'>
            <MainFooter />
          </section >
        </div>
      </body>
    </html>
  )
}
