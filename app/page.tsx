export default function Page() {
  return (
    <main>
<section className="hero">
  <div className="hero-bg" />

  <div className="hero-inner">
    <div className="hero-copy">
      <p className="badge">Googleマップ集客・MEO対策 無料ウェビナー</p>

      <h1>
        SNSを頑張っても集客できない店舗へ。
        Googleマップから“今すぐ客”を増やすMEO戦略
      </h1>

      <p className="lead">
        広告費やフォロワー数に頼らず、近くで探しているお客様に選ばれる店舗へ。
        Googleビジネスプロフィール改善のロードマップを無料公開します。
      </p>

      <div className="hero-points">
        <span>参加無料</span>
        <span>オンライン開催</span>
        <span>初心者OK</span>
      </div>

      <a className="cta" href="#entry">無料ウェビナーに申し込む</a>

      <p className="note">参加者限定：Googleマップ改善チェックリスト付き</p>
    </div>

    <div className="map-card">
      <div className="map-top">Googleマップ検索</div>
      <div className="search-box">近くの美容室　口コミ</div>
      <div className="store-card active">
        <strong>あなたの店舗</strong>
        <p>★★★★★ 4.8　口コミ124件</p>
        <span>「口コミを見て来ました」</span>
      </div>
      <div className="store-card">
        <strong>競合店舗A</strong>
        <p>★★★★☆ 4.1　口コミ32件</p>
      </div>
      <div className="pin">📍</div>
    </div>
  </div>
</section>
      <section className="visual">
        <h2>理想の未来</h2>
        <p>
          朝、スマホを見ると「Googleマップを見て来ました」という予約通知。
          口コミを見た新規客が来店し、SNS投稿に追われず、広告費にも依存しない。
          そんな店舗集客の土台を作ることが目的です。
        </p>
      </section>

      <section>
        <h2>お客様の声</h2>
        <div className="grid">
          {[
            ["美容室オーナー", "SNS投稿しても反応が少なかった", "Googleマップ経由の問い合わせが増加", "やることが明確になり、集客の不安が減りました。"],
            ["整体院経営者", "広告費が重く利益が残らなかった", "口コミ返信と投稿改善で来店導線を強化", "自己流では見えていなかった改善点が分かりました。"],
            ["飲食店店長", "近隣競合に埋もれていた", "検索キーワードを意識した投稿で露出改善", "今すぐ客に見つけてもらう感覚が分かりました。"]
          ].map(([profile, before, after, voice]) => (
            <div className="card" key={profile}>
              <div className="avatar">👤</div>
              <h3>{profile}</h3>
              <p><strong>導入前：</strong>{before}</p>
              <p><strong>導入後：</strong>{after}</p>
              <p className="quote">「{voice}」</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>なぜ、多くの店舗は集客に悩み続けるのか？</h2>
        <p>
          問題は努力不足ではありません。多くの店舗が「SNSを頑張る」「広告を出す」
          という遠回りをしている一方で、来店直前のお客様はGoogleマップで
          「近くの美容室」「駅前 居酒屋」「口コミ 整体院」と検索しています。
        </p>
        <p>
          つまり本当に必要なのは、投稿量ではなく「検索された瞬間に選ばれる導線」です。
        </p>
      </section>

      <section>
        <h2>よくある失敗</h2>
        <ul className="list">
          <li>SNSを毎日投稿しているのに来店につながらない</li>
          <li>広告を出しても費用を止めると集客も止まる</li>
          <li>口コミ返信を後回しにして信頼を失っている</li>
          <li>Googleビジネスプロフィールを作っただけで放置している</li>
        </ul>
      </section>

      <section>
        <h2>提供者ストーリー</h2>
        <p>
          私は、地域店舗のWeb集客・MEO・AI活用を支援してきました。
          その中で感じたのは、多くの店舗経営者が「何を直せば来店につながるのか」が
          分からないまま、SNSや広告に時間とお金を使っているという現実です。
        </p>
        <p>
          正直に言えば、過去には私自身も「発信すれば集客できる」と考えていた時期がありました。
          しかし実際には、来店意欲の高いお客様はGoogleマップ上で比較し、口コミを読み、
          写真を見て、数秒で店舗を選んでいます。
        </p>
        <p>
          だからこそ、AIを使ってMEO改善を誰でも実践できる形にしたい。
          それがこのウェビナーを届ける理由です。
        </p>
      </section>

      <section>
        <h2>解決策：MEO集客支援GPTs</h2>
        <p>
          MEO集客支援GPTsは、Googleビジネスプロフィール改善をサポートするAI活用型の集客支援ツールです。
          「口コミ返信」「投稿文作成」「検索キーワード整理」「店舗の強みの言語化」を効率化します。
        </p>

        <div className="steps">
          <div><span>STEP 1</span><p>店舗情報と悩みを入力</p></div>
          <div><span>STEP 2</span><p>AIが改善案・投稿案・返信文を作成</p></div>
          <div><span>STEP 3</span><p>Googleマップから選ばれる導線を整える</p></div>
        </div>
      </section>

      <section>
        <h2>特徴とベネフィット</h2>
        <div className="grid">
          <div className="card"><h3>口コミ返信を時短</h3><p>信頼感のある返信文を短時間で作成できます。</p></div>
          <div className="card"><h3>投稿ネタを自動整理</h3><p>季節・地域・業種に合わせた投稿案を作れます。</p></div>
          <div className="card"><h3>検索意図を可視化</h3><p>お客様が何を探しているかを踏まえた訴求ができます。</p></div>
          <div className="card"><h3>SNS依存から脱却</h3><p>フォロワー数ではなく、検索経由の来店導線を作ります。</p></div>
        </div>
      </section>

      <section className="offer">
        <h2>今だけ無料ウェビナー開催</h2>
        <p>
          参加者限定で「Googleマップ改善チェックリスト」と
          「口コミ返信AIプロンプト集」をプレゼント。
        </p>
        <p className="limit">先着30名限定／予告なく終了する場合があります</p>
        <a className="cta" id="entry" href="#">無料ウェビナーに申し込む</a>
        <p className="note">無理な勧誘はありません。初心者でも参加できます。</p>
      </section>

      <section>
        <h2>よくある質問</h2>
        <div className="faq">
          <h3>初心者でも大丈夫ですか？</h3>
          <p>はい。Googleビジネスプロフィールをまだ十分に使えていない方でも分かる内容です。</p>

          <h3>どの業種でも使えますか？</h3>
          <p>美容室、整体院、飲食店、士業、教室業など地域集客型の店舗と相性が良いです。</p>

          <h3>SNSフォロワーが少なくても大丈夫ですか？</h3>
          <p>はい。MEOはフォロワー数ではなく、検索された時に選ばれる導線を整える施策です。</p>

          <h3>すぐ効果は出ますか？</h3>
          <p>業種や地域差はありますが、まずは改善すべきポイントを明確にするところから始めます。</p>

          <h3>参加後に売り込みはありますか？</h3>
          <p>サービス案内はありますが、無理な勧誘は行いません。</p>
        </div>
      </section>
    </main>
  );
}
