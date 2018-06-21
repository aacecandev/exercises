import React from 'react'

export const IndividualCard = (props) => {
  return (
    <div>
      <img src={props.userInfo.avatar_url} width="50" />
    </div>
  )
}
