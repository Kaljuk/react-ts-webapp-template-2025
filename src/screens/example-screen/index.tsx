import { Button } from '@nextui-org/react'
import { useState } from 'react'

const ExampleScreen = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen size-full flex flex-col">
      <div className="w-full mx-auto max-w-7xl py-16 flex items-center">
        <span className="text-2xl font-semibold">This is an example screen with count of {count}</span>
      </div>
      <div className="size-full mx-auto max-w-7xl grid place-items-center">
        <Button onPress={() => setCount(count + 1)}>Increase count</Button>
      </div>
    </div>
  )
}

export default ExampleScreen
