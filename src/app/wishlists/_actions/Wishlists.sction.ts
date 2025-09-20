'use server'



export async function addToWishlist(productId: string) {
  const res = await fetch(`${process.env.API}/wishlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  })
  return res.json()
}

export async function removeFromWishlist(productId: string) {
  const res = await fetch(`${process.env.API}/wishlist`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  })
  return res.json()
}

export async function getWishlist() {
  const res = await fetch(`${process.env.API}/wishlist`)
  return res.json()
}
