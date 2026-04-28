const publicKeys = `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEZSVfEhv8Tbo80L2CS8nJim8rp0Fv05DDCUzgIP6LV9 rodrigo@olibra
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAINCAJJMycL5vDk/S4DJZZOVRT7Sn0EkSDmdpMZ4M+tdR rodrigo@macbook
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(publicKeys, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
