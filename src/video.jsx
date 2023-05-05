
export function Video({setOpenvideo}) {
    return(
    <div id="videoweb">
        <div className="btn-video" onClick={()=>setOpenvideo(false)}>X</div>
        <div class="videocontent spinner-border text-dark" role="status">
            {/* <span class="visually-hidden">Loading...</span> */}
           {/*  <div>cargando ..</div> */}
        </div>
    </div>
    )
}