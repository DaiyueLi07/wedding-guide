'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const MUSIC_SRC = '/music/neon-sweetheart.mp3'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showStartHint, setShowStartHint] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.45

    const tryPlay = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          setShowStartHint(false)
        })
        .catch(() => {
          setIsPlaying(false)
          setShowStartHint(true)
        })
    }

    tryPlay()

    const unlockOnFirstTouch = () => {
      if (!audio.paused) return
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          setShowStartHint(false)
        })
        .catch(() => {})
    }

    window.addEventListener('pointerdown', unlockOnFirstTouch, { once: true })
    return () => window.removeEventListener('pointerdown', unlockOnFirstTouch)
  }, [])

  const handleToggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          setShowStartHint(false)
        })
        .catch(() => {
          setIsPlaying(false)
          setShowStartHint(true)
        })
      return
    }

    audio.pause()
    setIsPlaying(false)
  }

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="none" />
      {showStartHint && !isPlaying && (
        <button
          onClick={handleToggle}
          className="fixed left-1/2 -translate-x-1/2 bottom-20 z-50 px-4 py-2 rounded-full bg-black/55 text-white text-sm backdrop-blur hover:bg-black/65 transition-colors"
        >
          点击开启背景音乐
        </button>
      )}
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? '暂停背景音乐' : '播放背景音乐'}
        className="fixed right-4 bottom-6 z-50 w-11 h-11 rounded-full bg-white/85 text-wedding-gold shadow-md flex items-center justify-center backdrop-blur hover:bg-white transition-colors"
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </>
  )
}
