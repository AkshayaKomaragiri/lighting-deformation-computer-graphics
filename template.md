# CS 4361 Assignment 1: Hello Teapot! Introduction to Three.js, WebGL, and Shaders

**Student Name:** [Your Name]  
**Student Number:** [Your Student Number]  
**NetID:** [Your NetID]  

## Assignment Overview

This assignment introduces Three.js, WebGL, and shader programming through the creation of an interactive 3D scene featuring a "Teapot" character and a magical "Orb" that interacts with it.

## Part 1: Required Elements (100 pts)

### (a) Moving & Coloring the Orb (20 pts)

**Requirements:**
- Modify sphere vertex shader to move the orb in response to keyboard input
- Change orb color to blue using fragment shader
- Must modify shaders, not use Three.js functions

**Implementation:**
[Explain your approach and key code changes]

**Files Modified:**
- `glsl/sphere.vs.glsl`
- `glsl/sphere.fs.glsl`
- `A1.js` 

**Key Code Snippets:**
```glsl
// Add your key shader code here
```

---

### (b) Lighting the Teapot (20 pts)

**Requirements:**
- Implement Gouraud shading
- Light teapot based on cosine of angle between vertex normal and direction to orb center
- Orb should "activate" and light different parts of teapot as it moves

**Implementation:**
[Explain your lighting model and shader modifications]

**Files Modified:**
- `A1.js`
- `glsl/teapot.vs.glsl`

**Key Code Snippets:**
```glsl
// Add your lighting calculation code here
```

---

### (c) Proximity Detection (30 pts)

**Requirements:**
- Color teapot fragments green when in close proximity to the sphere
- Check if teapot fragment is within specified distance to sphere
- Implement in fragment shader

**Implementation:**
[Explain your proximity detection algorithm]

**Files Modified:**
- `glsl/teapot.fs.glsl`

**Key Code Snippets:**
```glsl
// Add your proximity detection code here
```

---

### (d) Body Deformation (30 pts)

**Requirements:**
- Indent teapot's mesh when pushed in by the Orb
- Check if vertex is within Orb and move vertex to surface if so
- Demonstrate vertex shader shape modification

**Implementation:**
[Explain your deformation algorithm]

**Files Modified:**
- `glsl/teapot.vs.glsl`
- `A1.js`

**Key Code Snippets:**
```glsl
// Add your deformation code here
```

---

## Part 2: Creative License (Optional - Bonus up to 10 pts)
[If you completed Part 2, describe your creative extensions here]
**Creative Features Implemented:**
- [Feature 1]: [Description]
- [Feature 2]: [Description]
- [etc.]

**Files Modified:**
- [List files you modified for creative features]


## Screenshots
[Include screenshots of your working program showing each part's functionality]
- **Blue Orb:** [Screenshot showing blue orb movement]
- **Lit Teapot:** [Screenshot showing Gouraud shading]
- **Proximity Detection:** [Screenshot showing green coloring]
- **Body Deformation:** [Screenshot showing mesh indentation]

