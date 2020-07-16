import React from 'react'
import { MansoryPost } from './'

export default ({posts, colums, tagsOnTop}) => {
    return (
        <section className='mansory' style={{gridTemplateColumns: `repeat(${colums}, minmax(275px, 1fr))`}}>
            {posts.map((post, index) => (
                <MansoryPost {...{post, index, tagsOnTop, key: index}}/>
            ))}

        </section>
    )
}