import { Connector } from '@web3-react/types'
import WALLET_CONNECT_ICON_URL from 'assets/images/walletConnectIcon.svg'
import { ConnectionType, starknetConnection } from 'connection'
import { getConnectionName } from 'connection/utils'

import Option from './Option'

const BASE_PROPS = {
  color: '#4196FC',
  icon: WALLET_CONNECT_ICON_URL,
  id: 'starknet',
}

export function StarknetOption({ tryActivation }: { tryActivation: (connector: Connector) => void }) {
  const isActive = starknetConnection.hooks.useIsActive()
  return (
    <Option
      {...BASE_PROPS}
      isActive={isActive}
      onClick={() => tryActivation(starknetConnection.connector)}
      header={getConnectionName(ConnectionType.STARKNET)}
    />
  )
}
