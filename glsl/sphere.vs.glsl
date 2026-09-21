// The uniform variable is set up in the javascript code and the same for all vertices
uniform vec3 orbPosition;

void main() {

    // Multiply each vertex by the model matrix to get the world position of each vertex, 
    // then the view matrix to get the position in the camera coordinate system, 
    // and finally the projection matrix to get final vertex position.

    // TODO: Make changes here to make the orb move as the light source
    vec3 worldPos = position + orbPosition;
    gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);

}
