import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>What do we have<br className='sm:block hidden'/>that THEY don't.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Real-Time Bus Tracking, Augmented Reality are all technologies 
          that have never been used in the Rwandan Transport Sector before, 
          so we intend to put them to good use to provide the best travel experience
          possible.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
