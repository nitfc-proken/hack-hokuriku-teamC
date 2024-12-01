"use client";
import SuggestionBox from '../components/SuggestionBox';

export default function HomePage() {
  const suggestions = [
    "サジェスト1: あなたにおすすめのコンテンツ",
    "サジェスト2: 人気の機能を確認",
    "サジェスト3: 次のステップを選択",
  ];

  return (
    <div>
      <h1>サジェストコンポーネントの例</h1>
      <SuggestionBox suggestions={suggestions} />
    </div>
  );
}
