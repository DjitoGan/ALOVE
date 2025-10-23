export default function Home() {
  return (
    <main style={{padding:20, fontFamily:'system-ui'}}>
      <h1>ALOVE — Next.js PWA (skeleton)</h1>
      <p>API (Application Programming Interface) base: <code>{process.env.NEXT_PUBLIC_API_BASE}</code></p>
      <p>Language default: <b>{process.env.NEXT_PUBLIC_DEFAULT_LANG}</b></p>
      <p><a href="http://localhost:3001/v1/health" target="_blank">Check API health</a></p>
    </main>
  );
}
