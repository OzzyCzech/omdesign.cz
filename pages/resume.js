import Layout from "../components/layout"
import Head from 'next/head'
import resume from './resume.css';

export default () => (
  <Layout active="resume" css={resume}>
    <Head>
      <title>Resume</title>
    </Head>
    <div>Resume</div>
  </Layout>
)