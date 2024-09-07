
// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;


export default function TestPage( ) {
  return (
    <div>
      <h1>ISR Page</h1>
      <pre>Page Rendered at {new Date().toISOString()}</pre>
    </div>
  );
}

