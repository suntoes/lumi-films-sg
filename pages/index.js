
import Hero from '../compositions/hero'
import Aim from '../compositions/aim'
import RecentWorks from '../compositions/recent-works'
import Process from '../compositions/process'
import Clients from '../compositions/clients'

import Layout from '../components/layouts/article'

const Home = () => (
  <Layout>
    <Hero />
    <Aim />
    <RecentWorks />
    <Process />
    <Clients />
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
