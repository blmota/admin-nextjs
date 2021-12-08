import Layout from "../components/template/Layout";
import useAuth from "../data/hook/useAuth";

export default function Profile() {
    const { user } = useAuth()

  return (
    <Layout title="Perfil do usuário" subtitle="">
      <h3>Perfil</h3>
    </Layout>
  )
}
