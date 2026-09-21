// The value of the "varying" variable is interpolated between values computed in the vertex shader
// The varying variable we passed from the vertex shader is identified by the 'in' classifier
in float intensity;
in float distanceVal;

uniform float orbRadius;

void main() {
 	// TODO: Set final rendered colour to intensity (a grey level)
	vec3 baseColor;
	if (distanceVal < orbRadius){
		baseColor = vec3(0.0, 1.0, 0.0) * intensity;
	}
	else{
		baseColor = vec3(1.0, 1.0, 1.0) * intensity;

	}
		gl_FragColor = vec4(baseColor, 1.0); 
}
