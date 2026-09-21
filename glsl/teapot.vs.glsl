uniform vec3 orbPosition;
uniform float orbRadius;

out float intensity;
out float distanceVal;

void main() {
    // vertex world position
    vec4 worldPosition4 = modelMatrix * vec4(position, 1.0);
    vec3 world_position = worldPosition4.xyz;

    //distance to orb center
    distanceVal = length(world_position - orbPosition);

    vec3 finalWorldPos = world_position;
    vec3 world_position_normal = normalize(normalMatrix * normal);
    vec3 light_direction;

    // deform
    if (distanceVal <= orbRadius) {
        vec3 pushDir = normalize(world_position - orbPosition);
        
        finalWorldPos = orbPosition + (pushDir * orbRadius);
        
        world_position_normal = pushDir;
        light_direction = pushDir;
    } else {
        light_direction = normalize(orbPosition - finalWorldPos);
    }

    intensity = max(dot(world_position_normal, light_direction), 0.0);

    gl_Position = projectionMatrix * viewMatrix * vec4(finalWorldPos, 1.0);
}