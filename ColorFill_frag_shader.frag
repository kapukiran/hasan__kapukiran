#version 120

// vertex shaderindan gelen veriler
varying float varyingColor;

// fragment shader main metodu
void main(void)
{
    // gl_FragColor ekrana basilacak rengi secer
    gl_FragColor = vec4(1,0,0);
}
