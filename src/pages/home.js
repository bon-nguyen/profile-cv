import React, { useState, Suspense } from 'react';
import About from '../components/about';
import BackToTop from '../components/backToTop';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Loading from '../components/loading';
import Project from '../components/project';
import Sidebar from '../components/sidebar';
import Skill from '../components/skill';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(value => !value);
    }
    return (
        <> 
        <Suspense fallback={<Loading/>}>
            <Header toggle={toggle} isOpen={isOpen}>
                <Sidebar isOpen={isOpen}  toggle={toggle} />
            </Header>
            <main>
                <Hero />
                <About />
                <Skill />
                <Project />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </Suspense>
        </>
    );
};

export default Home;