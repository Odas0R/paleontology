export function getInitials(name: string) {
  let nameTokens = name.split(" ");
  return nameTokens[0].charAt(0) + nameTokens[nameTokens.length - 1].charAt(0);
}
