import { useEffect, useRef } from 'react'

import { Center, Image } from '@chakra-ui/react'

const images = [
  'images/parallax-image-a.png',
  'images/parallax-image-b.png',
  'images/parallax-image-c.png',
  null,
  'images/parallax-image-d.png',
  null,
  'images/parallax-image-e.png'
]

const ParallaxImage = () => {
  const boxRef = useRef()
  const imageRefs = useRef()

  const xMultiplier = 10
  const yMultiplier = 20
  const parallaxMultiplier = 2
  const getEaseOut = (i, axis, percentage) =>
    i *
    (0.1 * ((axis === 'x' ? xMultiplier : yMultiplier) * i)) *
    ((percentage || 0) * parallaxMultiplier)

  useEffect(() => {
    let mouseEvent
    const handleParallax = e => {
      if (e.clientY) mouseEvent = e
      if (!boxRef.current) return

      const mouseX = mouseEvent?.clientX || 0
      const {
        clientHeight: boxHeight,
        clientWidth: boxWidth,
        offsetTop,
        offsetLeft
      } = boxRef.current
      const { clientHeight, clientWidth } = document.documentElement
      const { pageYOffset: scrollY } = window

      const boxOriginX = offsetLeft + boxWidth / 2
      const xMultiplier =
        mouseX < boxOriginX
          ? ((mouseX - boxOriginX) / boxOriginX) * -1
          : ((mouseX - boxOriginX) / (clientWidth - boxOriginX)) * -2

      const screenMidPoint = scrollY + clientHeight / 2
      const boxOriginY = offsetTop + boxHeight / 2
      const yMultiplier =
        screenMidPoint < boxOriginY
          ? ((screenMidPoint - boxOriginY) / boxOriginY) * -3
          : ((screenMidPoint - boxOriginY) / boxOriginY) * -1

      for (let i in imageRefs) {
        if (!imageRefs[i]) return
        const transformVal = `translateX(${getEaseOut(
          Number(i),
          'x',
          xMultiplier
        )}px) translateY(${getEaseOut(Number(i), 'y', yMultiplier)}px)`
        imageRefs[i].style.transform = transformVal
      }
    }

    window.addEventListener('scroll', handleParallax)
    window.addEventListener('mousemove', handleParallax)
    return () => {
      window.removeEventListener('scroll', handleParallax)
      window.removeEventListener('mousemove', handleParallax)
    }
  }, [])

  return (
    <Center ref={boxRef} h="inherit" pointerEvents="none">
      {images.map((src, i) =>
        src ? (
          <Image
            ref={ref => (imageRefs[i] = ref)}
            zIndex={-images.length + (images.length - i)}
            position="absolute"
            h="inherit"
            src={src}
            transform="translateX(0px) translateY(0px)"
            key={'parallax-image-' + (i + 1)}
          />
        ) : (
          <></>
        )
      )}
    </Center>
  )
}

export default ParallaxImage
