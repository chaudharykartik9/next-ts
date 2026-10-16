import Admin from "@/components/Admin";
import User from "@/components/User";

export default function Home() {
  return <section>
    <User name="kartik"  age={20} email="kartik@gmail.com"  location={["Up" , "ghaziabad"]} />
    <Admin  name="gaurav"  age={25} email="gaurav@gmail.com"  location={["Up" , "noida"]}/>
  </section>;
}
