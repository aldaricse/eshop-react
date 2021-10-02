import React from 'react';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }){
  return (
		<div className="viewport">
			<Header/>
			<main className="main">{children}</main>
			<Footer/>
		</div>
  );
};

export default Layout;
