import ScriptTag from 'react-script-tag';
// import { Nunu } from '../public/nunustudio/nunu.min';

const NunuCanvas = () => {
    // <ScriptTag type="text/javascript" src="public/nunustudio/nunu.min.js"></ScriptTag>
    const Nunu = props => (
        <ScriptTag type="text/javascript" src="public/nunustudio/nunu.min.js"></ScriptTag>
    );

    const loadNunu = () => {
        console.log(Nunu)
        // // Nunu.loadApp('AncientCoinAR.nsp', 'canvas');

        // canvas = document.getElementById("canvas");

        // //Create new app intance
        // app = new Nunu.App(canvas);

        // //Load and run the "app.nsp" file
        // app.loadRunProgram("AncientCoinAR.nsp");
    }

    return (
        <div onLoad={loadNunu} >
            <canvas width="400" height="600" id="canvas"></canvas>
        </div>
    )
};

export default NunuCanvas;