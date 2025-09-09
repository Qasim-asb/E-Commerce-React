import React from 'react'
import styles from './Description.module.css'

const Description = () => {
  return (
    <div className={styles.description_box}>
      <div className={styles.description_navigator}>
        <div className={styles.description_nav}>
          Description
        </div>
        <div className={`${styles.description_nav} ${styles.fade}`}>
          Reviews (135)
        </div>
      </div>

      <div className={styles.description}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nemo ipsam, libero quis dolorem cupiditate nisi et eos illo magni animi nostrum optio laborum nobis rem magnam, ipsum cumque culpa.
          Nobis natus deserunt beatae, corporis, impedit nesciunt consequuntur minima atque quia veritatis, dolore repudiandae neque sint! Temporibus, ut illo consectetur, dolor quasi numquam consequatur unde quia quos assumenda eius fuga.
          Accusamus est a quod. Necessitatibus consequatur repellendus suscipit deleniti maiores accusamus molestiae cum fugiat, similique eaque earum corrupti delectus vero cupiditate non amet laboriosam ullam sed mollitia aliquid, asperiores quibusdam?
          Hic, quae autem? Quos aperiam molestiae cupiditate natus odit accusantium? Obcaecati fugiat nostrum officiis fuga laborum. Eius odio amet rerum quibusdam, autem aliquam obcaecati id excepturi molestiae quia animi? Commodi!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolore, accusantium fugiat atque, voluptates, repellendus sapiente mollitia impedit perspiciatis sed facilis vero dicta eligendi rem magnam explicabo sint animi. Tempore.</p>
      </div>
    </div>
  )
}

export default Description
