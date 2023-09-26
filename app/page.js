import Container from "@/components/Container";

export default function Home() {
  console.log(process.env.DB_URI);
  return (
    <main className="">
      <Container>Home Page</Container>
    </main>
  );
}
