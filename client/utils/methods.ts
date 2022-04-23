import { BigNumber } from '@ethersproject/bignumber'
import { formatUnits } from '@ethersproject/units'
import {
  Children,
  ElementType,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react'

// Join classes
export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const findChildByType = (
  children: ReactNode | ReactNode[],
  type: ElementType
): ReactElement | undefined => {
  const kid = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === type
  )
  if (isValidElement(kid)) {
    return kid
  }
  return undefined
}

export const formatNumber = (number?: number): string | undefined => {
  return number?.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
}

export const formatToken = (
  decimals: string | number,
  number?: BigNumber | string
): string | undefined => {
  if (!number) {
    return
  }
  const num = BigNumber.from(number)
  return formatUnits(num, Number(decimals))
}

export const formatAddress = (
  address: string | null | undefined,
  ensName?: string | null,
  chars = 4
): string => {
  if (ensName) return ensName
  else if (address)
    return `${address.substring(0, chars)}...${address.substring(
      address.length - chars
    )}`
  else return ''
}
