import Link from 'next/link'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/parallel/page-first">Page Views</Link>
        <Link href="/parallel/page-second">Visitors</Link>
      </nav>
      <div>{children}</div>
    </>
  )
}