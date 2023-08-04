import ClientSide from "./ClientSide";
import { trpc } from "./trpc"

export default async function Home() {

  const response = await trpc.hello.query({
  });

  return (
    <main>
      <p>Server side - {response}</p>
      <ClientSide />
    </main>
  )
}
