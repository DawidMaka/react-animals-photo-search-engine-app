import SearchForm from 'components/SearchForm'

const Home = ({ history }) => (
  <main>
    <h1>Unsplash - Animals</h1>
    <p>The internet&apos;s source of freely-usable animals images.</p>
    <p>Powered by creators everywhere.</p>
    <SearchForm history={history} />
  </main>
)

export default Home
