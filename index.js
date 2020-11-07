window.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById("canvas");
    let engine = new BABYLON.Engine(canvas,true);

    let createScene = function() {
        let scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3.White();
        let camera = new BABYLON.FreeCamera("camera1",
            new BABYLON.Vector3(0,6,-10),scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        let box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
        return scene;
    };

    let scene = createScene();
    engine.runRenderLoop(function() {
        scene.render();
    });
})