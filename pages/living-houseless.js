import React from "react"
import LHCarousel from "../components/LHCarousel"
import styles from "../styles/Series.module.css"
import Router from "next/router"



const LivingHouseless = () => {
    
    return (
        <div>
            <h3 className={styles.backButton} onClick={() => Router.push('/')}>Go Back</h3>
            <h1 className={styles.header}>Living Houseless</h1>
            <p className={styles.description}>Living Houseless is a series that aims to spread awareness about the stories, lives and struggles faced by the vulnerable community. If you're on mobile, swipe left or right to see the next image. If you're on a computer, click the left and right sides of the image to view the next one. Please contact me at (780) 914-5692 if you have any questions.</p>
            <LHCarousel name={"Episode 1"} img_srcs={['/lh1/1.png', '/lh1/2.png','/lh1/3.png','/lh1/4.png','/lh1/5.png','/lh1/6.png', '/lh1/7.png', '/lh1/8.png']}/>
            <LHCarousel name={"Episode 2"} img_srcs={['/lh2/1.png', '/lh2/2.png','/lh2/3.png','/lh2/4.png','/lh2/5.png','/lh2/6.png', '/lh2/7.png', '/lh2/8.png']}/>
            <LHCarousel name={"Episode 3"} img_srcs={['/lh3/1.png', '/lh3/2.png','/lh3/3.png','/lh3/4.png','/lh3/5.png','/lh3/6.png', '/lh3/7.png', '/lh3/8.png']}/>
            <LHCarousel name={"Episode 4"} img_srcs={['/lh4/1.png', '/lh4/2.png','/lh4/3.png','/lh4/4.png','/lh4/5.png','/lh4/6.png', '/lh4/7.png', '/lh4/8.png', '/lh4/9.png']}/>
            <LHCarousel name={"Episode 5"} img_srcs={['/lh5/1.png', '/lh5/2.png','/lh5/3.png','/lh5/4.png','/lh5/5.png','/lh5/6.png', '/lh5/7.png', '/lh5/8.png',]}/>
        
        </div>
    )
}

export default LivingHouseless