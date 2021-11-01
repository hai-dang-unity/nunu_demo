import { useEffect, useRef } from "react";

const Canvas = props => {
    const canvasRef = useRef(null)
    

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('webgl2')
    }, [])

    return <canvas ref={canvasRef}{...props}/>
}

export default Canvas