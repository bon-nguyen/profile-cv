import React, { useState } from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Sidebar from '../components/sidebar';
import Skill from '../components/skill';

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
                <About />
                <Contact />
                <Skill />
            </main>
            <Footer />
        </>
    );
};

export default Home;