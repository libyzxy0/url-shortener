export default function AboutSection() {
  return (
    <section className="bg-white m-6 md:m-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">About ShortRL 🧐</h1>
          <p className="text-gray-800 mt-2">ShortRL is a powerful URL shortener that turns long links into short, shareable ones. Track clicks, and get a QR code for each link, making sharing quick and easy. Perfect for marketers, bloggers, and businesses looking to enhance their link management.</p>
        </div>
        <div className="mt-3">
          <h1 className="text-2xl font-bold text-gray-800">How to use? 🤔</h1>
          <div className="text-gray-800 space-y-1 mt-2">
            <p><b className="font-amsterdam font-bold text-xl">Step 1:</b>{" "}Paste your long link to input box.</p>
            <p><b className="font-amsterdam font-bold text-xl">Step 2:</b>{" "}Click the Generate button to generate your shortened url.</p>
            <p><b className="font-amsterdam font-bold text-xl">Step 3:</b>{" "}Copy, Share, or Download QR of your shortened link.</p>
          </div>
        </div>
        
      </section>
  )
}