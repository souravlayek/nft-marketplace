import { MainBodyContent, TopBar } from 'Components/PageComponents/HomePage';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <div>
    <TopBar />
    <MainBodyContent />
  </div>;
}

export default Home
