import ReactPlayer from "react-player"


export function Video({ setOpenvideo }) {
    return (
        <div id="videoweb">
            <div className="centervideo">
                <div className="btn-video" onClick={() => setOpenvideo(false)}>X</div>
                <div className="videocontent">
                    <ReactPlayer
                        url={'https://www.youtube.com/watch?v=pLBuFxMYkx8'}
                      /*     width="100%"
                         height="100%"  */

                        controls
                        loop
                        muted
                        playing

                    ></ReactPlayer>

                </div>
            </div>

        </div>
    )
}