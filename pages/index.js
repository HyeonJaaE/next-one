import Link from "next/link";

const Index = () => (
  <div class="container">
    <Link href="/about">
      <a>this page!</a>
    </Link>
    <Link href="/photo">this is photo</Link>
  </div>
);

export default Index;
