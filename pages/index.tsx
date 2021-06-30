import ProtectedPage from '../components/ProtectedPage'

const IndexPage = () => {
  return (
    <ProtectedPage>
      <p>サインインしてないとみれません</p>
    </ProtectedPage>
  )
}

export default IndexPage