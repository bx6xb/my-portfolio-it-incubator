import React from "react"
import iconsSprite from "../assets/sprite-icons.svg"

type IconPropsType = {
  iconId: string
  width: string
  height: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  const { iconId, width, height } = props
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  )
}
