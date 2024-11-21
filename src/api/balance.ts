// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BalanceHandle(_: any, res: any) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ ok: true }))
}