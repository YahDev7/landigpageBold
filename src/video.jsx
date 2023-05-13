import ReactPlayer from "react-player"


export function Video({ setOpenvideo }) {
    return (
        <div id="videoweb">
            <div className="centervideo">
                <div className="btn-video" onClick={() => setOpenvideo(false)}>X</div>
                <div className="videocontent">
                    <ReactPlayer
                        url={'https://www.youtube.com/watch?v=iBo9jbJ4KdQ'}
                        width="100%"
                         height="700px" 
                        

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