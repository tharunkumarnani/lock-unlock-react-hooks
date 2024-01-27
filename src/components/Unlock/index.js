// Write your code here
import {useState} from 'react'
import {MainBg, Card, LockImage, LockText, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const changeLock = () => {
    setLock(prevState => !prevState)
  }

  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  return (
    <MainBg>
      <Card>
        <LockImage src={imageUrl} alt={isLocked ? 'lock' : 'unlock'} />
        <LockText>Your Device is {isLocked ? 'Locked' : 'Unlocked'}</LockText>
        <Button type="button" onClick={changeLock}>
          {isLocked ? 'Unlock' : 'Lock'}
        </Button>
      </Card>
    </MainBg>
  )
}

export default Unlock
