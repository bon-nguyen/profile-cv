import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Sidebar from '../components/sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(value => !value);
    }
    return (
        <>  
            <Header toggle={toggle} isOpen={isOpen}>
                <Sidebar isOpen={isOpen}  toggle={toggle} />
            </Header>
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    );
};

export default Home;