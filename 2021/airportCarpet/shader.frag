// this is a port of "recursive noise experiment" by ompuco
// https://www.shadertoy.com/view/wllGzr

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 iResolution;
uniform int iFrame;
uniform vec2 iMouse;
uniform float iTime;


void main()
{
  
    vec2 p = ( gl_FragCoord.xy / iResolution.xy);
    vec2 q = p - vec2(0.5, 0.5); 
    vec3 color = vec3(0.0, 0.0, 1.0);

    float r = 0.2 + 0.1*cos( atan(q.y, q.x) * 10.0 + 20.0 * q.x + 1.0);

    color *= smoothstep ( r, r+0.01, length ( q ) );

    r = 0.02;
    color *= 1.0 -  (1.0-smoothstep ( r, r+0.01, abs( q.x ) )) * (1.0 - smoothstep (0.1, 0.41, q.y));
    
    gl_FragColor = vec4(color, 1.0 );
  
}