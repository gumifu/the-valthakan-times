import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 px-4 md:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* テスト用ヘッダーセクション */}
          <section className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-italianno)' }}>
              About The Valthakan Times
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              テスト用のAboutページです。The Valthakan Timesについてご紹介します。
            </p>
          </section>

          {/* テスト用コンテンツセクション */}
          <section className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-italianno)' }}>
                私たちについて
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The Valthakan Timesは、文学的なコンテンツを提供するプラットフォームです。
                このページはテスト用に作成されました。
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-italianno)' }}>
                テスト情報
              </h2>
              <p className="text-gray-300 leading-relaxed">
                このページはPull Requestのテスト用に作成されています。
                デザインと機能の確認をお願いします。
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

