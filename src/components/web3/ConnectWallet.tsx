import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const ConnectWallet = () => {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const [isLoading, setIsLoading] = useState(false)

  if (isConnected) {
    return (
      <Button 
        variant="outline" 
        onClick={() => {
          disconnect()
          toast.success('Wallet disconnected')
        }}
      >
        {address?.slice(0, 6)}...{address?.slice(-4)}
      </Button>
    )
  }

  return (
    <Button
      onClick={async () => {
        setIsLoading(true)
        try {
          await connect({ connector: connectors[0] })
          toast.success('Wallet connected successfully')
        } catch (error) {
          toast.error('Failed to connect wallet')
        } finally {
          setIsLoading(false)
        }
      }}
      disabled={isLoading}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isLoading ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  )
}

export default ConnectWallet