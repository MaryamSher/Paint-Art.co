import 'antd/dist/antd.css';
import './App.css';
import Appheader from './components/common/Appheader';
import Home from './components/content/Home'
import About from './components/content/About'
import Art from './components/content/Art'
import Artist from './components/content/Artist';
import Gallery from './components/content/Gallery';
import FeaturedArt from './components/content/FeaturedArt';
import Faq from './components/content/Faq';
import Contact from './components/content/Contact';
import AppFooter from '../src/components/common/AppFooter'
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout className="layout">

        <Header>
          <Appheader />

        </Header>
        <Content>

          <Home />
          <About />
          <Art />
          <Artist />
          <Gallery />
          <FeaturedArt />
          <Faq />
          <Contact />

        </Content>
        <Footer>
          <AppFooter />

        </Footer>
      </Layout>
    </>
  );
}

export default App;
