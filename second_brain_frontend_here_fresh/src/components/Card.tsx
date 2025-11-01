import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string,
  link: string,
  type: "youtube" | "twitter"
}
function getYouTubeEmbedLink(url: string): string {
  try {
    // handle full YouTube URL
    if (url.includes("watch?v=")) {
      const videoId = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // handle short youtu.be links
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch {
    console.error("Invalid YouTube URL");
  }
  return "";
}


export function Card({ title, link, type }: CardProps) {

  return (
    <div>
      <div className="p-8 bg-white rounded-md border-gray-200 max-w-96 border min-h-48 min-w-72 ">

        <div className="flex justify-between">
          <div className="flex ">
            <div className="text-gray-400 pr-3 flex items-center text-md">
              <ShareIcon></ShareIcon>
              {title}
            </div>
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-400">
              <a href={link} target="_blank">
                <ShareIcon></ShareIcon>
              </a>

            </div>
            <div className="text-gray-500">
              <ShareIcon></ShareIcon>
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full aspect-video rounded-xl"
              src={getYouTubeEmbedLink(link)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {/* {type==='youtube'&&  <iframe  className="w-full" width="560" height="315" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> } */}
          {/* <iframe  className="w-full" width="560" height="315" src="https://www.youtube.com/embed/857ejsBc3IA?si=XFL81lLADDhN83jd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>

        </div>
      </div>
    </div>
  )
}