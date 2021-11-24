export function Manhattan(a, b) {
  const dx = Math.abs(a.x - b.x);
  const dy = Math.abs(a.y - b.y);

  return dx + dy;
}

export function Euclidean(a, b) {
  const dx = Math.abs(a.x - b.x);
  const dy = Math.abs(a.y - b.y);

  return Math.sqrt(dx * dx + dy * dy);
}
