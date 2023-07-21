export function randomId() {
  return `v-${Math.random().toString(36).substring(2, 9)}`;
}
