import React, {useEffect, useState} from 'react';
// requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from "../styles/Series.module.css"
const LHCarousel = ({img_srcs, name}) => {
	const [images, setImages] = React.useState([])

    React.useEffect(() => {
		console.log("img_srcs", img_srcs)
		let i = 0
        setImages(img_srcs.map(img => {
			i++;
            return (
                <div key={i}>
                    <img src={img} alt={i} />
                </div>
            )
        }))
    },[])

	return (
		<div>
			<h2 className={styles.epName}>{name}</h2>
		<Carousel className={styles.seriesCarousel} showStatus={false} showIndicators={false} 
		useKeyboardArrows 
		autoPlay 
		interval={6000} 
		stopOnHover>
			{images}
		</Carousel>
		</div>
	)
}

export default LHCarousel;