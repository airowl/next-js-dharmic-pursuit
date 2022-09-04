import styles from '../styles/Loader.module.css';
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';



export default function Loader() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},2000);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  
  return loading && (
    <div className={'w-screen h-screen flex justify-center items-center bg-black fixed top-0 bottom-0 left-0 right-0 z-50 ' + (styles.wrapperLoader) }>
      <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}