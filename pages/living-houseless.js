import React from "react"
import Link from "next/link"
import LHCarousel from "../components/LHCarousel"
import styles from "../styles/Series.module.css"
import Router from "next/router"



const LivingHouseless = () => {
    
    return (
        <div>
            <h3 className={styles.backButton} onClick={() => Router.push('/')}>Go Back</h3>
            <h1 className={styles.header}>Living Houseless</h1>
            <p className={styles.description}>Living Houseless is a series that  aims to spread awareness about the stories lives and struggles faced by the vulnerable community. Click the right and lefthand sides of the image to view the next one. Please contact me at (780) 914-5692 if you have any questions.</p>
            <LHCarousel name={"Episode 1"} img_srcs={['/lh1/1.png', '/lh1/2.png','/lh1/3.png','/lh1/4.png','/lh1/5.png','/lh1/6.png', '/lh1/7.png', '/lh1/8.png']}/>
        </div>
    )
}

export default LivingHouseless