'use client'
export function Footer() {
  return (
    <footer className="bg-[#222831] text-[#EEEEEE] py-6 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto px-6 text-center">
        <p className="font-light">&copy; {new Date().getFullYear()} HarentsoaR. All rights reserved.</p>
      </div>
    </footer>
  )
}

