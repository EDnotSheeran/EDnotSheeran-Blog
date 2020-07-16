import React from 'react'

import { PostMansory, MansoryPost, PostGrid } from '../components/common'
import trending from '../assets/mocks/trending'
import featured from '../assets/mocks/featured'
    
const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px'
    }
}

const mergeStyles = (posts, config) => {
    posts.forEach((post, index) => {
        post.style = config[index]  
        post.author = 'EDnotSheeran'
        post.description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem nisi ducimus reprehenderit incidunt distinctio commodi dolores corporis tenetur eligendi et aliquam quos architecto nostrum veritatis expedita, necessitatibus rerum omnis laboriosam.'
    })
}

const recentPosts = [...trending,...featured,...featured]

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)

const lastFeatured = featured.pop()

export default () => {
    return (
        <main className='home'>
            <section className='container'>
                <div className='row'>
                    <section className='featured-posts-container'>
                        <PostMansory posts={featured} colums={2} tagsOnTop={true}/>
                        <MansoryPost post={lastFeatured} tagsOnTop={true}/>
                    </section>
                </div>
            </section>

            <section className='bg-white'>
                <section className='container'>
                    <div className='row'>
                        <h1>Recent Posts</h1>
                        <PostGrid posts={recentPosts} />
                    </div>
                </section>
            </section>

            <section className='container'>
                <div className='row'>
                    <PostMansory posts={trending} colums={3}/>
                </div>
            </section>
        </main>
    )   
}