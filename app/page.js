import { sequelize } from "@/db/config"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>User Login</h1>
      <Link href='/signup'>Sign Up</Link>
    </div>
  )
}
