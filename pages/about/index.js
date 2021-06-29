import Link from "next/link";
import AboutTemplate from "../../components/templates/about";

const About = () => (
  <AboutTemplate>
    <Link href="/">back</Link>
    <a href="/">back2</a>
    <p>this is about</p>
  </AboutTemplate>
);

export default About;
