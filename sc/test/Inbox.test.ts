import { expect } from 'chai'
import { Signer } from 'ethers'
import { ethers } from 'hardhat'

import { Inbox, Inbox__factory } from '../../client/src/types/typechain'

describe('Inbox', () => {
  let accounts: Signer[]
  let inbox: Inbox
  beforeEach(async function () {
    accounts = await ethers.getSigners()
    const Inbox: Inbox__factory = await ethers.getContractFactory('Inbox')
    inbox = await Inbox.deploy('Hello World')
    await inbox.deployed()
  })

  it('should be deployed', async () => {
    const initialMessage = await inbox.message()
    expect(initialMessage).to.eq('Hello World')
  })

  it('should set the message', async () => {
    const transaction = await inbox.setMessage('Hola, mundo!')
    await transaction.wait()
    const newMessage = await inbox.message()
    expect(newMessage).to.equal('Hola, mundo!')
  })
})
