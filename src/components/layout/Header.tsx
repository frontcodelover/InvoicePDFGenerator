import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import styled from '@emotion/styled';

const ImageLogo = styled.img`
  height: 1.5rem;
  margin-right: 0.75rem;
  @media (min-width: 640px) {
    height: 2.25rem;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [visible, setVisible] = useState('hidden');

  const toggle = () => {
    setIsOpen(!isOpen);
    setVisible(isOpen ? 'block' : 'hidden');
  };

  return (
    <div className='z-10'>
      <nav className='z-10 relative top-0 border-bottom-gray-200 px-2 py-2.5 rounded'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <Link to='/' className='flex items-center'>
            <ImageLogo src={Logo} alt='Invoice Logo' />
            <span className='self-center text-xl font-semibold whitespace-nowrap '>My Invoice</span>
          </Link>
          <button
            onClick={toggle}
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
          <div className={`${visible} absolute top-10 md:static w-full -ml-3 md:block md:w-auto`} id='navbar-default'>
            <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white '>
              <li>
                <Link to='/' className='block py-2 pl-3 pr-4 bg-blue-400 text-slate-900 hover:text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 ' aria-current='page'>
                  Home
                </Link>
              </li>

              <li>
                <Link to='/mentions-legales' className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '>
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
