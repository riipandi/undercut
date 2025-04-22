import VideoGallery from "@/components/video-gallery"

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">F1 VIDEOS</h1>
        <p className="text-zinc-400">Watch live streams, race highlights, and full race replays</p>
      </header>

      <VideoGallery />
    </div>
  )
}
