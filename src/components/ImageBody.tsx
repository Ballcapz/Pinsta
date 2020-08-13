import React from 'react'

type ImageProps = {
    url: string,
}

export const ImageBody = ({url}: ImageProps) => <img src={url} alt="" />
