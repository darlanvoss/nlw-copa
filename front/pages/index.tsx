interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <h1>Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://0.0.0.0:3333/pools/count')
  const data = await response.json()

  return {
    props: { count: data.count }
  }
}