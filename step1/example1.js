const createScene = function () {
  const scene = new BABYLON.Scene(engine);
  BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "box.babylon");
  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
  camera.attachControl(canvas, true);
  const light = new BABYLON.HemisphericLight("Light", new BABYLON.Vector3(1, 1, 0));

  return scene;
}

const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});
