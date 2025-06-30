import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import FadeInSection from "./inView";

function Home() {
  return (
    <FadeInSection>
      <h2>自己紹介</h2>
      <p>こんにちは。脆弱性診断やペネトレーションテストなどに興味がある学生エンジニアです。リモートも対応可能です。</p>
    </FadeInSection>
  );
}

function Skills() {
  return (
    <FadeInSection>
      <h2>使える技術・資格</h2>
      <ul>
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>Python, Django</li>
        <li>PHP, Laravel</li>
        <li>Java</li>
        <li>C</li>
        <li>CentOS</li>
        <li>SSHトンネリングを利用したWindows RDPのリモートGUI操作（公開鍵認証方式）</li>
        <li>VMware上のpfSenseによるファイアウォール構築・ルーティング・ルール設定及び、DMZ、ローカルネットワーク、グローバル（インターネット）を分離した通信環境構築</li>
        <li>資格: CompTIA Security+, CCT 取得済み</li>
        <li>学習中資格: 情報処理安全確保支援士、CEH</li>
      </ul>
    </FadeInSection>
  );
}

function ProjectLink({ url, title }) {
  if (!url) {
    return <li>{title}（準備中）</li>;
  }
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    </li>
  );
}

function Projects() {
  const projects = [
    { title: "ペネトレーションテスト（GitHub）", url: null },
    { title: "SSHサーバーセットアッププログラム（GitHub）", url: null },
    { title: "自動化スクリプト（GitHub）", url: null },
    { title: "自宅SSHトンネリング＋Windows RDPリモート操作環境構築（公開鍵認証方式）", url: null }, 
    { title: "VMware上pfSenseでファイアウォール設定等", url: null }, 
  ];

  return (
    <FadeInSection>
      <h2>プロジェクト</h2>
      <ul>
        {projects.map(({ title, url }, i) => (
          <ProjectLink key={i} title={title} url={url} />
        ))}
      </ul>
    </FadeInSection>
  );
}

function Career() {
  return (
    <FadeInSection>
      <h2>就活関連</h2>
      <p>インターネットセキュリティを専門に、特にオフェンシブセキュリティに興味があり、ペネトレーションテストや診断をメインに見据えている。将来的にはホワイトハッカーを目指している。</p>
    </FadeInSection>
  );
}

function SelfPR() {
  return (
    <FadeInSection>
      <h2>自己PR・強み</h2>
      <p>
        私はやるべきことが決まると主体的に動き出し、学習意欲も高く、未知の技術に対しても積極的に取り組みます。  
        複雑な問題に直面しても粘り強く分析し、解決策を考え抜くことが得意です。  
        特に現在、在籍している学校でも自身だけでなく、周囲のエラー対処も行ったり、コード内容を読み取り問題点の解決ができます。
      </p>
    </FadeInSection>
  );
}

function Interests() {
  return (
    <FadeInSection>
      <h2>興味のある技術分野・今後学びたいこと</h2>
      <p>
        オフェンシブセキュリティをより深く追求する 。
        Hack The BoxやCTF、Metasploitableなどを使って実践的な攻撃技術を学習中。
        フルスタック開発やインフラ自動化のスキルも伸ばしできることを増やしていきたい。
      </p>
    </FadeInSection>
  );
}

function Contact() {
  return (
    <FadeInSection>
      <h2>連絡先・SNSリンク</h2>
      <ul>
        <li>Email: qiaotianxiang070@gmail.com</li>
        <li><a href="https://github.com/0wl-nor" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </FadeInSection>
  );
}

function Hobby() {
  return (
    <FadeInSection>
      <h2>趣味・特技</h2>
      <ul>
        <li>ペネトレーションテスト</li>
        <li>プログラミング</li>
        <li>読書</li>
        <li>ネットワーク構築</li>
      </ul>
    </FadeInSection>
  );
}

export default function App() {
  return (
    // ルーターの設定
    <Router>
      <div className="container">
        <header>
          <h1>橋田 翔 (Sho Hashida)</h1>
          {/* ナビの内容 */}
          <nav>
            <NavLink to="/" end>自己紹介</NavLink>
            <NavLink to="/skills">技術・資格</NavLink>
            <NavLink to="/projects">プロジェクト</NavLink>
            <NavLink to="/career">就活関連</NavLink>
            <NavLink to="/selfpr">自己PR</NavLink>
            <NavLink to="/interests">興味・学び</NavLink>
            <NavLink to="/contact">連絡先</NavLink>
            <NavLink to="/hobby">趣味・特技</NavLink>
          </nav>
        </header>

        {/* ルーティング */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
          <Route path="/selfpr" element={<SelfPR />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hobby" element={<Hobby />} />
        </Routes>
      </div>
    </Router>
  );
}
