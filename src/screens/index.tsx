import { Route, Routes } from 'react-router'
import ExampleScreen from './example-screen'

const Screens = () => {
  return (
    <Routes>
      <Route path="/" element={<ExampleScreen />} />
    </Routes>
  )
}

export default Screens
