/**
 * Shared helpers.
 */

export function add(a: number, b: number): number {
  return a + b;
}

export function formatGreeting(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) {
    throw new Error("name is required");
  }
  return `Hello, ${trimmed}`;
}
