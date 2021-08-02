import React, { useEffect, useState, useRef } from 'react'
/**
 * Custom component to put a video background
 * @param {Array} videoArray array with sources of videos to show in that particular order
 * @returns {React.FunctionComponent}
 */
function VideoBackground({ className = '', videoArray = [], ...rest }) {
	const selfRef = useRef(null)
	const [src, setSrc] = useState(videoArray.length > 0 ? videoArray[0] : '')

	const onVideoEnd = e => {
		let activeSource = src
		let activeIndex = videoArray.indexOf(activeSource)
		let nextIndex = (activeIndex + 1) % videoArray.length
		let nextSource = videoArray[nextIndex]
		setSrc(nextSource)
	}

	useEffect(() => {
		const video = selfRef.current
		video?.addEventListener('ended', onVideoEnd)

		return () => video?.removeEventListener('ended', onVideoEnd)
	})

	return (
		<video
			ref={selfRef}
			src={src}
			autoPlay
			muted
			loop={videoArray.length === 1}
			playsInline
			preload="yes"
			{...rest}
			className={`VideoBackground ${className}`}></video>
	)
}

export default React.memo(VideoBackground)
