import { useEffect, useRef } from "react";
import * as thre from "three";
import React from "react";
import "./sphere_scene.scss";
import { MdArrowBackIosNew } from "react-icons/md";
import useElementOnScreen from "../../hooks/useElementOnScreen";

let scene;
function SphereScene() {
  document.addEventListener(
    "mousemove",
    onDocumentMouseMove
    // animateParticles,
  );
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;
  function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }
  const clock = new thre.Clock();

  useEffect(() => {
    // Testing stuff
    // const gui = new dat.GUI();

    // Basic stuff here
    const canvas = document.getElementById("cvs");
    scene = new thre.Scene();
    // let width = canvas.clientWidth;
    // let height = canvas.clientHeight;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const camera = new thre.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new thre.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);
    // Makes 3d stuff responsive
    window.addEventListener("resize", () => {
      width = window.outerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    ///////////////////////////////////////////////////////////
    // Lights
    const pointLight1 = new thre.PointLight(0xffffff, 0.1);
    pointLight1.position.set(2, 3, 4);
    scene.add(pointLight1);
    const pointLight2 = new thre.PointLight(0xff00ff, 1);
    pointLight2.position.set(0.5, 0.85, 0.94);
    scene.add(pointLight2);
    const pointLight3 = new thre.PointLight(0x05609c, 2.5);
    pointLight3.position.set(-3, -6, -3);
    scene.add(pointLight3);

    // // // TESTING
    // gui.add(pointLight2.position, "y").min(-6).max(6).step(0.01);
    // gui.add(pointLight2.position, "z").min(-3).max(3).step(0.01);
    // gui.add(pointLight2.position, "x").min(-3).max(3).step(0.01);
    // gui.add(pointLight3, "intensity").min(0).max(10).step(0.01);

    // Sphere
    const textureLoader = new thre.TextureLoader();
    const sphereGeometry = new thre.SphereBufferGeometry(0.6, 64, 64);
    const texture = textureLoader.load("./images/map2.jpg"); //2,9,3
    const material = new thre.MeshStandardMaterial();
    material.metalness = 0.9;
    material.roughness = 0.1;
    material.normalMap = texture;
    // material.color = new thre.Color(0x292929);
    material.color = new thre.Color(0x290000);
    // material.color = new thre.Color(0xffffff);
    const sphere = new thre.Mesh(sphereGeometry, material);

    scene.add(sphere);
    // Sphere light
    // SUPER SIMPLE GLOW EFFECT
    // use sprite because it appears the same from all angles
    var spriteMaterial = new thre.SpriteMaterial({
      map: textureLoader.load("./images/glow.png"),
      color: 0xff00ff,
      transparent: true,
      blending: thre.AdditiveBlending,
    });
    var sprite = new thre.Sprite(spriteMaterial);
    sprite.scale.set(2, 2, 0.1);
    sphere.add(sprite); // this centers the glow at the mesh

    // Sphere grid
    const gridSphereGeometry = new thre.SphereGeometry(0.7, 20, 20);
    const gridSphereMaterial = new thre.MeshStandardMaterial({
      color: 0xffaaaa,
      wireframe: true,
    });
    const gridSphere = new thre.Mesh(gridSphereGeometry, gridSphereMaterial);

    scene.add(gridSphere);

    // PARTICLES SPHERE
    const particleSphereGeometry = new thre.SphereGeometry(0.8, 40, 40);
    const particlesSphereMaterial = new thre.PointsMaterial({
      size: 0.0035,
      color: 0x007788,
      // size: 0.001,
      // color: 0xffffff,
    });
    const particleSphere = new thre.Points(
      particleSphereGeometry,
      particlesSphereMaterial
    );

    scene.add(particleSphere);
    // PARTICLES
    const particlesGeometry = new thre.BufferGeometry();
    const particlesMaterial = new thre.PointsMaterial({
      size: 0.001,
      color: 0xffffff,
    });
    const particlesCount = 5000;
    // x,y,z,x1,y1,z1...
    const positionArr = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      // positionArr[i] = Math.random();
      // positionArr[i] = Math.random() - 0.5;
      positionArr[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute(
      "position",
      new thre.BufferAttribute(positionArr, 3)
    );

    const particlesMesh = new thre.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    // ANIMATE

    // const hoverColor = new thre.Color(0xff88ff);

    // let m = 0.002;
    // function animateObject(obj) {
    //   obj.position.z += m;

    //   if (obj.position.z > 0.24) {
    //     // obj.position.z -= 0.002;
    //     m = -0.002;
    //   }
    //   if (obj.position.z < -0.2) {
    //     // obj.position.z = -3;
    //     m = 0.002;
    //   }
    // }
    let s = 0.0003;
    function animateObject(obj) {
      obj.scale.x += s;
      obj.scale.y += s;
      obj.scale.z += s;

      if (obj.scale.z > 1.1 || obj.scale.z < 0.9) {
        s = -s;
      }
    }

    const animate = () => {
      // if (resizeRendererToDisplaySize(renderer)) {
      // 	const canvas = renderer.domElement;
      // 	camera.aspect = canvas.clientWidth / canvas.clientHeight;
      // 	camera.updateProjectionMatrix();
      // }
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      const elapesdTime = clock.getElapsedTime();
      const deltaTime = clock.getDelta();
      sphere.rotation.y = 0.5 * elapesdTime;
      sphere.rotation.x += 0.002 * (targetX - sphere.rotation.x);
      sphere.rotation.y += 0.5 * (targetY - sphere.rotation.y);
      animateObject(sphere);
      // sphere.rotation.z += 0.005 * (targetX - sphere.rotation.z);

      gridSphere.rotation.y = -1 * elapesdTime;
      gridSphere.rotation.x += 0.002 * (targetX - gridSphere.rotation.x);
      gridSphere.rotation.y += 0.5 * (targetY - gridSphere.rotation.y);
      animateObject(gridSphere);
      // gridSphere.rotation.z += 0.005 * (targetX - gridSphere.rotation.z);

      particleSphere.rotation.y = 0.3 * elapesdTime;
      particleSphere.rotation.x +=
        0.002 * (targetX - particleSphere.rotation.x);
      particleSphere.rotation.y += 0.5 * (targetY - particleSphere.rotation.y);
      animateObject(particleSphere);
      // particleSphere.rotation.z +=        0.005 * (targetX - particleSphere.rotation.z);

      particlesMesh.rotation.y = 0.02 * elapesdTime;
      particlesMesh.rotation.x += 0.0075 * (targetX - particlesMesh.rotation.x);
      particlesMesh.rotation.y += 0.15 * (targetY - particlesMesh.rotation.y);
      particlesMesh.position.z += 0.01 * (targetY - particlesMesh.position.z);

      // sphere.position.z += -0.05 * (targetY - sphere.rotation.x);

      // particlesMesh.rotation.y =

      //particlesMesh.rotation.y -= (((mouseY + 100) * 0.0002) * deltaTime)
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const sphere = useRef();
  const isVisible = useElementOnScreen(
    { root: null, rootMargin: "0px", threshold: 0.3 },
    sphere
  );

  return (
    <>
      <div className="sphere__container" id="sphere_section">
        <div
          className={`sphere__grid ${
            isVisible ? "sphere__visible" : "sphere__notVisible"
          }`}
          ref={sphere}
        >
          <div className="sphere__wrapper">
            <h1 className="sphere__mainText general__text_gradiant">
              I can design and develop your front-end, <br /> back-end or a
              full-stack application.
            </h1>
            <h3 className="sphere__mainSubText general__text_gradiant">
              Petar Deljanin
            </h3>
            <span className="sphere__dragDown"></span>
            <MdArrowBackIosNew className="sphere__arrowDown" />
          </div>
        </div>

        <canvas
          id="cvs"
          className={isVisible ? "sphere__visible" : "sphere__notVisible"}
        />
      </div>
    </>
  );
}
export default SphereScene;
