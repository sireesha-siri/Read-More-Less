// Write your code here
import {useState} from 'react'

import {
  ReadMoreLessContainer,
  ReactHooksHeading,
  MiniDescription,
  ReactHooksImage,
  ReactHooksDescription,
  ShowButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const slicedReactHooksDescription = reactHooksDescription.slice(0, 170)

  const [showLess, setButtonStatus] = useState(true)

  const changeStatus = () => {
    setButtonStatus(prev => !prev)
  }

  return (
    <ReadMoreLessContainer>
      <ReactHooksHeading>React Hooks</ReactHooksHeading>
      <MiniDescription>Hooks are a new addition to React</MiniDescription>
      <ReactHooksImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <ReactHooksDescription>
        {showLess ? slicedReactHooksDescription : reactHooksDescription}
      </ReactHooksDescription>
      <ShowButton type="button" onClick={changeStatus}>
        {showLess ? 'Read More' : 'Read Less'}
      </ShowButton>
    </ReadMoreLessContainer>
  )
}

export default ReadMore
