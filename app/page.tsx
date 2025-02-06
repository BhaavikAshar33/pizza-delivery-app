import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/pizza-logo.svg"  // Replace with your pizza logo image
          alt="Pizza Delivery Logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-semibold text-center sm:text-left">
          Welcome to Pizza Delivery!
        </h1>
        <p className="text-lg text-center sm:text-left mb-8">
          Enjoy hot and fresh pizza delivered right to your doorstep.
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Choose your favorite pizza from our menu.
          </li>
          <li>Place your order with easy payment options.</li>
          <li>Get it delivered in no time!</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/menu"  // Link to the menu page
          >
            View Menu
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/order"  // Link to the order page
          >
            Place Order
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"  // Link to the contact page
        >
          <Image
            aria-hidden
            src="/phone.svg"
            alt="Phone icon"
            width={16}
            height={16}
          />
          Contact Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"  // Link to the about page
        >
          <Image
            aria-hidden
            src="/info.svg"
            alt="Info icon"
            width={16}
            height={16}
          />
          About Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/terms"  // Link to terms and conditions
        >
          <Image
            aria-hidden
            src="/document.svg"
            alt="Document icon"
            width={16}
            height={16}
          />
          Terms & Conditions
        </a>
      </footer>
    </div>
  );
}
