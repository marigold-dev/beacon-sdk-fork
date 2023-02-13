import { Component, For } from 'solid-js'
import Wallet from '../wallet'
import styles from './styles.css'

interface WalletProps {
  wallets: { id: string; name: string; description?: string; image: string }[]
  onClickWallet: (id: string) => void
}

const Wallets: Component<WalletProps> = (props: WalletProps) => {
  return (
    <div>
      <div class="wallets-list-wrapper">
        <For each={props.wallets}>
          {(wallet) => (
            <Wallet
              name={wallet.name}
              description={wallet.description}
              image={wallet.image}
              small
              onClick={() => props.onClickWallet(wallet.id)}
            />
          )}
        </For>
      </div>
      <button class="wallets-button">Pair wallet on another device</button>
    </div>
  )
}

export { styles }
export default Wallets