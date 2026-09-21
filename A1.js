/*
 * UTD CS 4361, Fall 2026
 * Assignment 1 Template
 */

// Setup and return the scene and related objects.
// You should look into js/setup.js to see what exactly is done here.
const {
  renderer,
  scene,
  camera,
  worldFrame,
} = setup();

/////////////////////////////////
//   YOUR WORK STARTS BELOW    //
/////////////////////////////////

// Initialize uniform
const orbPosition = { type: 'v3', value: new THREE.Vector3(0.0, 1.0, 0.0) };
// TODO: Create uniform variable for the radius of the orb and pass it into the shaders,
// you will need them in the latter part of the assignment
const orbRadius = { value: 2.5 };
// Materials: specifying uniforms and shaders
const teapotMaterial = new THREE.ShaderMaterial({
  uniforms: {
    orbPosition: orbPosition,
    orbRadius: orbRadius
  }
});
const sphereMaterial = new THREE.ShaderMaterial({
  uniforms: {
    orbPosition: orbPosition
  }
});

// Load shaders.
const shaderFiles = [
  'glsl/teapot.vs.glsl',
  'glsl/teapot.fs.glsl',
  'glsl/sphere.vs.glsl',
  'glsl/sphere.fs.glsl'
];

new THREE.SourceLoader().load(shaderFiles, function (shaders) {
  teapotMaterial.vertexShader = shaders['glsl/teapot.vs.glsl'];
  teapotMaterial.fragmentShader = shaders['glsl/teapot.fs.glsl'];
  sphereMaterial.vertexShader = shaders['glsl/sphere.vs.glsl'];
  sphereMaterial.fragmentShader = shaders['glsl/sphere.fs.glsl'];
})

// Load and place the teapot geometry
// Look at the definition of loadOBJ to familiarize yourself with how each parameter
// affects the loaded object.
loadAndPlaceOBJ('obj/teapot.obj', teapotMaterial, function (teapot) {
  teapot.position.set(0.0, 5.3, -8.0);
  teapot.rotation.y = 0;
  teapot.scale.set(0.1, 0.1, 0.1);
  teapot.parent = worldFrame;
  scene.add(teapot);
});


// Create the sphere geometry
// https://threejs.org/docs/#api/en/geometries/SphereGeometry
// TODO: Make the radius of the orb a variable
const sphereGeometry = new THREE.SphereGeometry(1.0, 32.0, 32.0);
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0.0, 1.0, 0.0);
sphere.parent = worldFrame;
scene.add(sphere);

const sphereLight = new THREE.PointLight(0xffffff, 1, 100);
scene.add(sphereLight);

// Listen to keyboard events.
const keyboard = new THREEx.KeyboardState();
function checkKeyboard() {
  if (keyboard.pressed("W"))
    orbPosition.value.z -= 0.08;
  else if (keyboard.pressed("S"))
    orbPosition.value.z += 0.08;

  if (keyboard.pressed("A"))
    orbPosition.value.x -= 0.08;
  else if (keyboard.pressed("D"))
    orbPosition.value.x += 0.08;

  if (keyboard.pressed("E"))
    orbPosition.value.y -= 0.08;
  else if (keyboard.pressed("Q"))
    orbPosition.value.y += 0.08;

  // The following tells three.js that some uniforms might have changed
  teapotMaterial.needsUpdate = true;
  sphereMaterial.needsUpdate = true;
  sphere.position.copy(orbPosition.value);
  // Move the sphere light in the scene. This allows the floor to reflect the light as it moves.
  sphereLight.position.set(orbPosition.value.x, orbPosition.value.y, orbPosition.value.z);
}

// Setup update callback
function update() {
  checkKeyboard();

  // Requests the next update call, this creates a loop
  requestAnimationFrame(update);
  renderer.render(scene, camera);
}

// Start the animation loop.
update();
