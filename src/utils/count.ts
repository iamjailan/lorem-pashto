export function parseCount(input: string): number | undefined {
  const value = input.trim();
  return /^(?:[1-9]|[1-9][0-9]|100)$/.test(value)
    ? Number(value)
    : undefined;
}
