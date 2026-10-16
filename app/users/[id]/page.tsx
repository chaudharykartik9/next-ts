
import { Suspense } from "react";

type UserPageProps = {
  params: Promise<{ id: string }>;
};

export default function Page({ params }: UserPageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <User params={params} />
    </Suspense>
  );
}

async function User({ params }: UserPageProps) {
  const { id } = await params;

  return <div>{id}</div>;
}
