import { useState } from "react"
import { FiTruck } from "react-icons/fi"

const ImageWithFallback = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
          <div className="animate-pulse">
            <FiTruck className="w-12 h-12 text-slate-400 dark:text-slate-500" />
          </div>
        </div>
      )}

      {!imageError ? (
        <img
          src={src || "/recycle-symbol.png"}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
          <div className="text-center">
            <FiTruck className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-2" />
            <p className="text-sm text-slate-500 dark:text-slate-400">Skip Image</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageWithFallback
