export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>MEOで来店を増やす</h1>
      <p>SNSに頼らず集客できる仕組み</p>

      <a href="#contact">
        <button>無料相談する</button>
      </a>

      <section>
        <h2>悩み</h2>
        <ul>
          <li>集客できない</li>
          <li>SNSが伸びない</li>
          <li>広告費が無駄</li>
        </ul>
      </section>

      <section id="contact">
        <h2>無料相談</h2>
        <button>今すぐ相談する</button>
      </section>
    </main>
  );
}
