import Link from "next/link"
import { ChevronLeft, Calendar, Clock, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import VideoPlayer from "@/components/video-player"
import VideoGallery from "@/components/video-gallery"
import { getVideoById, getVideosByType } from "@/lib/db/actions"

export default async function VideoPage({ params }: { params: { id: string } }) {
  const videoId = params.id
  const video = await getVideoById(videoId)

  if (!video) {
    notFound()
  }

  // Get related videos
  const relatedVideos = await getVideosByType(video.type)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/videos" className="flex items-center gap-1 text-zinc-400 hover:text-white mb-6">
        <ChevronLeft className="h-4 w-4" />
        <span>Back to Videos</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <VideoPlayer videoUrl={video.video_url} title={video.title} poster={video.thumbnail_url} />

            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">{video.title}</h1>

              <div className="flex flex-wrap gap-4 text-zinc-300 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-zinc-400" />
                  <span>{new Date(video.created_at).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-zinc-400" />
                  <span>{video.duration}</span>
                </div>
                <div className="ml-auto">
                  <button className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              <p className="text-zinc-300">{video.description}</p>

              {video.race_id && (
                <div className="mt-4">
                  <Link
                    href={`/races/${video.race_id}`}
                    className="inline-block bg-red-600 hover:bg-red-700 transition-colors text-white px-4 py-2 rounded"
                  >
                    View Race Details
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <VideoGallery
            initialVideos={relatedVideos.filter((v) => v.video_id !== videoId).slice(0, 6)}
            title="Related Videos"
            showFilters={false}
          />
        </div>
      </div>
    </div>
  )
}
