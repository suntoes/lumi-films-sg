
import Hero from '../components/hero'
import Aim from '../components/aim'
import RecentWorks from '../components/recent-works'
import Process from '../components/process'
import Clients from '../components/clients'

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
