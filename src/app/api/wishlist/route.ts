import { NextResponse } from "next/server"

let wishlist: string[] = []

export async function POST(req: Request) {
  const { productId } = await req.json()
  if (!productId) {
    return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
  }

  if (!wishlist.includes(productId)) {
    wishlist.push(productId)
  }

  return NextResponse.json({ success: true, wishlist })
}




export async function DELETE(req: Request) {
  const { productId } = await req.json()
  wishlist = wishlist.filter(id => id !== productId)

  return NextResponse.json({ success: true, wishlist })
}




export async function GET() {
  return NextResponse.json({ wishlist })
}
