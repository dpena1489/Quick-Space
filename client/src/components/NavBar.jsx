import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../images/logo2.jpg'
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const navigation = [
  { linkText: 'Profile', linkRoute: '/profile' },
  { linkText: 'Listings', linkRoute: '/' }
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='border-3 border-transparent border-b-sky-600'>
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <Link to='/' className={"-m-1.5 p-1.5"}>
          <img
            className="h-14 lg:h-16 w-auto"
            src={logo}
            alt="QuickSpace Logo"
            style={{ opacity: '0.5', borderRadius: '50px' }}
          />
        </Link>

        {/* For smaller screens display the hamburger icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>

        {/* For larger screens display the the full menu options */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.linkText} to={item.linkRoute} className={"text-xl font-semibold leading-6"}>{item.linkText}</Link>
          ))}

          {
            Auth.loggedIn() ?
              (
              <Link onClick={Auth.logout} className={"text-xl font-semibold leading-6"}>Logout</Link>) :
              (<Link to="/login" className={"text-xl font-semibold leading-6"}>Login</Link>)
          }
        </div>
      </nav>

      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className='divide-y-2 divide-sky-600'>
            {/* Top part of side Menu */}
            <div className="flex items-center justify-between">
              <button onClick={() => setMobileMenuOpen(false)}>
                <Link to='/' className={"-m-1.5 p-1.5"}>
                  <img
                    className="h-14 w-auto"
                    src={logo}
                    alt="QuickSpace Logo"
                    style={{ opacity: '0.5', borderRadius: '50px' }}
                  />
                </Link>
              </button>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Bottom part of side Menu */}
            <div className="flex flex-col space-y-2 py-6">
              {navigation.map((item) => (
                <button
                  key={item.linkText}
                  className={"-mx-3 block rounded-lg px-3 py-2 text-base text-right font-semibold leading-7 text-gray-900 hover:bg-gray-50"}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link key={item.linkText} to={item.linkRoute}>{item.linkText}</Link>
                </button>
              ))}
              {
                Auth.loggedIn() ?
                  (
                    <button className={"-mx-3 block rounded-lg px-3 py-2 text-base text-right font-semibold leading-7 text-gray-900 hover:bg-gray-50"}>
                      <Link onClick={Auth.logout}>Logout</Link>
                    </button>
                  ) :
                  (
                    <button className={"-mx-3 block rounded-lg px-3 py-2 text-base text-right font-semibold leading-7 text-gray-900 hover:bg-gray-50"}>
                      <Link to="/login">Login</Link>
                    </button>
                  )
              }
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
