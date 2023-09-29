import './styles/index.scss';
import { Header } from 'app/sections/header';
import { Hero } from 'app/sections/hero';
import { Stack } from 'app/sections/stack';
import { Projects } from 'app/sections/projects';
import { Footer } from 'app/sections/footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <Hero />
            <Stack />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
