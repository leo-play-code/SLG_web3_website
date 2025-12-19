import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: '首頁', href: '/', current: false },
  {
    name: '遊戲',
    href: '#',
    current: false,
    hasDropdown: true,
    dropdownItems: [
      { name: '英雄聯盟', href: 'lol' },
      { name: '聯盟戰棋', href: '#' },
      { name: '特戰英豪', href: '#' },
      { name: '符文大地傳說', href: '#' },
      { name: '英雄聯盟：激鬥峽谷', href: '#' },
    ]
  },
  { name: '最新消息', href: 'news', current: false },
  {
    name: '管理',
    href: '#',
    current: false,
    hasDropdown: true,
    dropdownItems: [
      { name: '商店', href: '#' },
      { name: '下載', href: '#' },
      { name: '支援', href: '#' },
    ]
  },
]

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 bg-[#111111]">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[70px] items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-start">
            {/* Logo */}
            <div className="flex shrink-0 items-center mr-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-lg tracking-wider hidden md:block">RIOT GAMES</span>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name} className="relative group">
                    <button className="cursor-pointer relative text-white/80 hover:text-white hover:bg-[#c8a776]/20 px-4 py-2 text-base font-bold transition-all duration-200 flex items-center space-x-1 border-b-3 border-transparent hover:border-[#c8a776]">
                      <span>{item.name}</span>
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 z-10 mt-0 w-56 origin-top-left rounded-md bg-[#1a1a1a] py-2 shadow-xl ring-1 ring-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="cursor-pointer block px-4 py-3 text-base font-semibold text-white/80 hover:bg-[#c8a776]/20 hover:text-white transition-colors duration-150"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="cursor-pointer relative text-white/80 hover:text-white hover:bg-[#c8a776]/20 px-4 py-2 text-base font-bold transition-all duration-200 flex items-center space-x-1 border-b-3 border-transparent hover:border-[#c8a776]"
                  >
                    <span>{item.name}</span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            {/* Search Icon */}
            <button
              type="button"
              className="relative rounded-full p-2 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
            >
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon aria-hidden="true" className="size-5" />
            </button>

            {/* Language Selector */}
            <Menu as="div" className="relative">
              <MenuButton className="flex items-center space-x-1 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded transition-colors duration-200">
                <GlobeAltIcon className="size-5" />
                <span className="hidden sm:inline">繁</span>
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[#1a1a1a] py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-white/5">
                    繁體中文
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-white/5">
                    English
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>

            {/* Play Button */}
            <button
              type="button"
              className="hidden sm:flex items-center px-6 py-2 bg-[#0BC6E3] hover:bg-[#0aafca] text-white text-sm font-bold rounded transition-colors duration-200"
            >
              立即暢玩
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="lg:hidden bg-[#1a1a1a]">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="text-white/80 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {item.name}
            </DisclosureButton>
          ))}
          <div className="pt-4 pb-2">
            <button className="w-full px-6 py-2 bg-[#0BC6E3] hover:bg-[#0aafca] text-white text-sm font-bold rounded transition-colors duration-200">
              立即暢玩
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
