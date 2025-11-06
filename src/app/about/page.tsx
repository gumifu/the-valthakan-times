import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 px-4 md:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダーセクション */}
          <section className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-italianno)' }}>
              About The Valthakan Times
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Welcome to The Valthakan Times, your premier destination for literary excellence and storytelling.
            </p>
          </section>

          {/* コンテンツセクション */}
          <section className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-italianno)' }}>
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                At The Valthakan Times, we are dedicated to bringing you the finest in literary content,
                from captivating stories to thought-provoking articles. Our mission is to create a space
                where creativity and imagination flourish.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe in the power of storytelling to connect people across cultures and experiences,
                fostering a community of readers and writers who share a passion for the written word.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-italianno)' }}>
                Our Story
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Founded with a vision to celebrate literature in all its forms, The Valthakan Times has
                grown into a vibrant community platform. We curate exceptional content that inspires,
                entertains, and enlightens our readers.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of dedicated writers, editors, and contributors work tirelessly to bring you
                stories that matter, articles that resonate, and experiences that stay with you long
                after you've turned the last page.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-italianno)' }}>
                Join Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Whether you're a reader seeking new adventures or a writer looking to share your voice,
                The Valthakan Times welcomes you. Explore our content, join our community, and become
                part of a literary journey that spans genres, cultures, and imaginations.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

