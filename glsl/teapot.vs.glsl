uniform vec3 orbPosition;
uniform float orbRadius;

out float intensity;
out float distanceVal;

void main() {
    // 1. Get vertex world position
    vec4 worldPosition4 = modelMatrix * vec4(position, 1.0);
    vec3 world_position = worldPosition4.xyz;

    // 2. Compute distance to orb center
    distanceVal = length(world_position - orbPosition);

    vec3 finalWorldPos = world_position;
    vec3 world_position_normal = normalize(mat3(modelMatrix) * normal);
    vec3 light_direction;

    // 3. Deformation & Lighting separation
    if (distanceVal < orbRadius) {
        vec3 pushDir = normalize(world_position - orbPosition);
        
        // Push vertex outward to the surface of the sphere
        finalWorldPos = orbPosition + (pushDir * orbRadius);
        
        // For the crater, light direction points outward along pushDir
        world_position_normal = pushDir;
        light_direction = pushDir;
    } else {
        // Standard Gouraud point lighting from the orb toward undeformed teapot vertices
        light_direction = normalize(orbPosition - finalWorldPos);
    }

    // 4. Calculate Gouraud diffuse intensity
    intensity = max(dot(world_position_normal, light_direction), 0.0);

    // 5. Output clip space position
    gl_Position = projectionMatrix * viewMatrix * vec4(finalWorldPos, 1.0);
}