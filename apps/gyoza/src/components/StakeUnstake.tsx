import { SUSHI_ADDRESS, XSUSHI_ADDRESS } from '@/constants/sushi'
import { useIsMounted } from '@/hooks/useIsMounted'
import { useToken } from 'wagmi'
import TokenBalance from './TokenBalance'
import Card from './card/Card'
import { FormStake } from './form/FormStake'
import { FormUnstake } from './form/FormUnstake'
import Heading from './heading/Heading'
import Tabs from './tabs/Tabs'

const StakeUnstake: React.FC = () => {
  const isMounted = useIsMounted()
  const { data: sushiMetadata } = useToken({
    address: SUSHI_ADDRESS, // normally we pass this along via page props or some other non-hardcoded way
  })
  const { data: xsushiMetadata } = useToken({
    address: XSUSHI_ADDRESS, // normally we pass this along via (page) props or some other non-hardcoded way
  })

  return (
    <div className="flex h-full w-full items-start justify-center gap-x-8">
      <Card className="flex flex-col justify-between gap-y-2 px-6 py-4">
        <Heading variant="light">Stake {isMounted && sushiMetadata.symbol + ' & ' + xsushiMetadata.symbol}</Heading>
        {isMounted && (
          <Tabs defaultValue="stake">
            <Tabs.List>
              <Tabs.Trigger value="stake">Stake</Tabs.Trigger>
              <Tabs.Trigger value="unstake">Unstake</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="stake">
              <FormStake tokenAddress={sushiMetadata.address} spenderAddress={xsushiMetadata.address} />
            </Tabs.Content>
            <Tabs.Content value="unstake">
              <FormUnstake unstakeTokenAddress={xsushiMetadata.address} />
            </Tabs.Content>
          </Tabs>
        )}
      </Card>
      <Card className="flex flex-col gap-y-8 px-6 pb-16 pt-4">
        <Heading variant="light">Balance</Heading>{' '}
        {isMounted && <TokenBalance label="STAKED" imageSrc="/xsushi-logo.png" tokenAddress={xsushiMetadata.address} />}
        <hr className="bg-primary" />
        {isMounted && <TokenBalance label="UNSTAKED" imageSrc="/sushi-logo.png" tokenAddress={sushiMetadata.address} />}
      </Card>
    </div>
  )
}

export default StakeUnstake
