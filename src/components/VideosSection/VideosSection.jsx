import React from 'react'
import { VideosList } from './VideosList/VideosList'
const videos = [
  {
    id:1,
    title: 'Baby Monitor Technology',
    time: '8:00',
    meta:{
        date:"5 days",
        author: 'Dollie Blair',
        views: '123k'
    },
    cover: "https://placehold.co/250x150/F9A8D4/31343C",
  },
  {
    id:2,
    title: 'A Good Autoresponder',
    time: '8:00',
    meta:{
        date:"5 days",
        author: 'Dollie Blair',
        views: '123k'
    },
    cover: "https://placehold.co/250x150/F9A8D4/31343C",
  },
  {
    id:3,
    title: 'Selecting The Right Hotel',
    time: '8:00',
    meta:{
        date:"5 days",
        author: 'Dollie Blair',
        views: '123k'
    },
    cover: "https://placehold.co/250x150/F9A8D4/31343C",
  },
  {
    id:4,
    title: 'Selecting The Right Hotel',
    time: '8:00',
    meta:{
        date:"5 days",
        author: 'Dollie Blair',
        views: '123k'
    },
    cover: "https://placehold.co/250x150/F9A8D4/31343C",
  },
];
export const VideosSection = () => {
    
  return (
    <>
        <VideosList videos={videos}/>
    </>
  )
}
