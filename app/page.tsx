import Card from "@/components/card";
import Image from "next/image";

export default function Home() {
  const products = [
    {
        id: 1,
        name: "Airpods Max",
        description: "Flagship Over the Ear Headphones by Apple.",
        price: 499,
        imageUrl: ""
    },
    {
        id: 2,
        name: "Tumi GolfBag",
        description: "The designer golf bag by the fashion powerhouse Tumi.",
        price: 2999,
        imageUrl: ""
    },

]
  return (
    <main className="min-h-screen mx-auto max-w-[100rem]">
      {products.map((product)=>(
    <Card key={`${product.name}-${product.id}`} {...product}/>
   ))}
    </main>
  );
}
