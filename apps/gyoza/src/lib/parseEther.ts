import { parseEther as viemParseEther } from 'viem'

export const parseEther = (value: string) => {
  return Boolean(value) && !isNaN(parseFloat(value)) ? viemParseEther(`${parseFloat(value)}`) : viemParseEther(`${0}`)
}
