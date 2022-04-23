import { useReadContract, useTypedContract } from '@raidguild/quiver'
import { FC } from 'react'

import { Inbox__factory } from '../../types/typechain'
import { ConnectWallet } from '../ConnectWallet'

export const Home: FC<React.PropsWithChildren<unknown>> = () => {
  const { contract } = useTypedContract(
    '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    Inbox__factory
  )
  const { response: message } = useReadContract(contract, 'message', [])
  return (
    <>
      <ConnectWallet />
      {message}
    </>
  )
}
