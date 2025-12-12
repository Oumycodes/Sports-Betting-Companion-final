const API_BASE_URL = "https://sbc-backend-433678484066.europe-west1.run.app";


export async function fetchValueBets() {
  const res = await fetch(`${API_BASE}/valuebets`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json(); // this should be the array from your /valuebets endpoint
}

export async function fetchMatchCards() {
  const res = await fetch(`${API_BASE}/match_cards`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

export async function fetchTeams() {
  const res = await fetch(`${API_BASE}/teams`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

export async function fetchMatches() {
  const res = await fetch(`${API_BASE}/matches`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

export async function fetchPicks() {
  const res = await fetch(`${API_BASE}/picks`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

export async function fetchResults() {
  const res = await fetch(`${API_BASE}/results`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}

export async function fetchUserBets(userId, betType) {
  const res = await fetch(`${API_BASE}/user_bets?user_id=${userId}&bet_type=${betType}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}
