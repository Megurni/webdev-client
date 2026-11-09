export default async function ThreeNumbers({
  params,
}: {
  params: Promise<{ a: string; b: string; c: string }>;
}) {
  const { a, b, c } = await params;
  return (
    <div>
      <h1>Calculator – Three Path Parameters</h1>
      <h2>
        {a} + {b} + {c} = {Number(a) + Number(b) + Number(c)}
      </h2>
    </div>
  );
}
