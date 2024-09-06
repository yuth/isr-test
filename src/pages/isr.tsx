export default function TestPage(props: { data: { t: string } }) {
  return (
    <div>
      <h1>ISR Page</h1>
      <pre>Page Rendered at {props.data.t}</pre>
    </div>
  );
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from an API or other source
  const data = { t: new Date().toISOString() };
  // Revalidate this page every 60 seconds
  return { props: { data: data }, revalidate: 1 };
}