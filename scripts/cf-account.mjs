// Returns the Cloudflare account ID: CLOUDFLARE_ACCOUNT_ID if set, otherwise the single account the
// API token can see (needs the token's Account Settings: Read permission).
export async function accountId(token) {
  if (process.env.CLOUDFLARE_ACCOUNT_ID) return process.env.CLOUDFLARE_ACCOUNT_ID;
  const res = await fetch("https://api.cloudflare.com/client/v4/accounts", { headers: { Authorization: `Bearer ${token}` } });
  const body = await res.json().catch(() => ({}));
  const accounts = body.result || [];
  if (!res.ok || accounts.length !== 1)
    throw new Error(`Set the CLOUDFLARE_ACCOUNT_ID secret (the token can see ${accounts.length} accounts; status ${res.status})`);
  return accounts[0].id;
}
