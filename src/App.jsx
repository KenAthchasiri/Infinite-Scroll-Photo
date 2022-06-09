import { useEffect, useState } from 'react'
import './App.css'
import PhotoComponent from './components/PhotoComponent'

function App() {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const apiKey = `sud__GjybfNIp2DtC2o686abFkWieh_mbG5NqZ2Jnbw`
  

  const fetchImage = async() => {
    setIsLoading(true)
    try {
      const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
      const response = await fetch(apiUrl)
      const data = await response.json()
      setPhotos((oldData)=>{
        return [...oldData,...data]
      })
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchImage()
  },[page])

  useEffect(()=>{
    const event = window.addEventListener('scroll',()=>{
      if(window.innerHeight+window.scrollY>document.body.offsetHeight && !isLoading){
        console.log('load content');
        setPage((oldPage)=>{
          return oldPage+1
        })
      }
    })
    return ()=>window.removeEventListener('scroll',event)
  },[])


  return (
    <main >
      <section className='photos'>
        <div className='display'>
          {photos.map((element,i)=>{
            return <PhotoComponent key={i} {...element} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
