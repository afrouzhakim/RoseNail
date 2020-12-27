import React, {useState} from 'react'
import video from '../../videoes/video.mp4'
import {RContainer, RBg, VideoBg, RContent, RH1, RP, RBtnWrapper, ArrowForward, ArrowRight} from './RElements'
import {Button} from '../ButtonElement'

const RSection = () => {
const [hover, setHover] = useState(false)
const onHover = () => {
    setHover(!hover)
}

    return (
        <RContainer>
            <RBg>
                <VideoBg autoplay loop muted src={video} type='video/mp4' />
            </RBg>
            <RContent>
                <RH1>Work & Life Ready Nails!</RH1>
                <RP>Sign up for a new account today and receive an offer for your next reservation.</RP>
                <RBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true'> Get started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </RBtnWrapper>
            </RContent>
        </RContainer>
    )
}

export default RSection
