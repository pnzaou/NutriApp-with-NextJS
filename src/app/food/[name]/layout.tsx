import { Metadata } from "next";

export function generateMetadata({ params }: { params: { name: string } }) : Metadata  {
  const title = `Info sur ${params.name}`
  const description = `Tout savoir sur les valeurs nutritives page ${params.name} sur NutriApp`

  return {
    title,
    description
  }
};

export default function FoodLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
