import { SUSHI_ADDRESS, XSUSHI_ADDRESS } from '@/constants/sushi'
import { Card, Heading, Tabs } from '@ramen/ui'
import { useToken } from 'wagmi'
import { TokenBalance } from './TokenBalance'
import { FormStake, FormUnstake } from './form'

export const StakeUnstake: React.FC = () => {
  const { data: sushiMetadata } = useToken({
    address: SUSHI_ADDRESS, // normally we pass this along via page props or some other non-hardcoded way
  })
  const { data: xsushiMetadata } = useToken({
    address: XSUSHI_ADDRESS, // normally we pass this along via (page) props or some other non-hardcoded way
  })

  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-y-2 p-4 sm:flex-row sm:gap-x-8">
      <Card className="flex flex-col justify-between gap-y-2 px-6 py-4">
        <Heading variant="light">
          Stake {sushiMetadata && sushiMetadata.symbol} & {xsushiMetadata && xsushiMetadata.symbol}
        </Heading>
        <Tabs defaultValue="stake">
          <Tabs.List>
            <Tabs.Trigger value="stake">Stake</Tabs.Trigger>
            <Tabs.Trigger value="unstake">Unstake</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="stake">
            <FormStake
              tokenAddress={sushiMetadata && sushiMetadata.address}
              spenderAddress={xsushiMetadata && xsushiMetadata.address}
            />
          </Tabs.Content>
          <Tabs.Content value="unstake">
            <FormUnstake unstakeTokenAddress={xsushiMetadata && xsushiMetadata.address} />
          </Tabs.Content>
        </Tabs>
      </Card>
      <Card className="flex w-full flex-col items-center gap-y-8 px-6 py-6 sm:w-fit sm:items-start sm:pb-12">
        <Heading variant="light">Balance</Heading>
        <TokenBalance
          label="STAKED"
          imageSrc="/xsushi-logo.png"
          tokenAddress={xsushiMetadata && xsushiMetadata.address}
          symbol={xsushiMetadata && xsushiMetadata.symbol}
        />
        <hr className="bg-primary" />
        <TokenBalance
          label="UNSTAKED"
          imageSrc="/sushi-logo.png"
          tokenAddress={sushiMetadata && sushiMetadata.address}
          symbol={sushiMetadata && sushiMetadata.symbol}
        />
      </Card>
    </div>
  )
}
