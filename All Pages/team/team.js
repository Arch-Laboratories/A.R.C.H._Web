


  // Initialize all 3D backgrounds
  document.addEventListener('DOMContentLoaded', function() {
    initCEOBackground();
    initDeveloperBackground();
    initBackendBackground();
    initDesignerBackground();
  });

  // CEO Background - Floating Cubes
  function initCEOBackground() {
    const canvas = document.getElementById('ceo-bg');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    
    // Create cubes
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xd4af37,
      wireframe: true 
    });
    
    const cubes = [];
    for (let i = 0; i < 10; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = Math.random() * 20 - 10;
      cube.position.y = Math.random() * 20 - 10;
      cube.position.z = Math.random() * 20 - 10;
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      cubes.push(cube);
      scene.add(cube);
    }
    
    camera.position.z = 5;
    
    // Animation
    function animate() {
      requestAnimationFrame(animate);
      
      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.y += 0.01;
        if (cube.position.y > 10) cube.position.y = -10;
      });
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', function() {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }

  // Developer Background - Floating Code
  function initDeveloperBackground() {
    const canvas = document.getElementById('developer-bg');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    
    // Create text particles
    const particles = 500;
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
      
      colors[i] = 0.2 + Math.random() * 0.8;
      colors[i + 1] = 0.5 + Math.random() * 0.5;
      colors[i + 2] = 0.7 + Math.random() * 0.3;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    
    camera.position.z = 5;
    
    // Animation
    function animate() {
      requestAnimationFrame(animate);
      
      points.rotation.x += 0.001;
      points.rotation.y += 0.002;
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', function() {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }

  // Backend Background - Network Nodes
  function initBackendBackground() {
    const canvas = document.getElementById('backend-bg');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    
    // Create nodes and connections
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xff6b6b });
    
    for (let i = 0; i < 15; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.x = Math.random() * 10 - 5;
      node.position.y = Math.random() * 10 - 5;
      node.position.z = Math.random() * 10 - 5;
      nodes.push(node);
      scene.add(node);
    }
    
    // Create connections
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.3 });
    
    nodes.forEach((node1, i) => {
      nodes.slice(i + 1).forEach(node2 => {
        if (Math.random() > 0.7) {
          const geometry = new THREE.BufferGeometry().setFromPoints([node1.position, node2.position]);
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
        }
      });
    });
    
    camera.position.z = 15;
    
    // Animation
    function animate() {
      requestAnimationFrame(animate);
      
      nodes.forEach(node => {
        node.position.x += (Math.random() - 0.5) * 0.02;
        node.position.y += (Math.random() - 0.5) * 0.02;
        node.position.z += (Math.random() - 0.5) * 0.02;
      });
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', function() {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }

  // Designer Background - Colorful Particles
  function initDesignerBackground() {
    const canvas = document.getElementById('designer-bg');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    
    // Create colorful particles
    const particles = 1000;
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);
    
    const colorPalette = [
      [0.8, 0.2, 0.6], // Purple
      [0.9, 0.4, 0.3], // Orange
      [0.3, 0.6, 0.9], // Blue
      [0.9, 0.8, 0.2]  // Yellow
    ];
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i] = color[0];
      colors[i + 1] = color[1];
      colors[i + 2] = color[2];
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    
    camera.position.z = 5;
    
    // Animation
    function animate() {
      requestAnimationFrame(animate);
      
      points.rotation.x += 0.001;
      points.rotation.y += 0.002;
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', function() {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }
  



//   x ------------------------------------------ x ------------------------------------------ x


  // Star Network Animation for Backend Engineer
  function initBackendBackground() {
    const canvas = document.getElementById('backend-bg');
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }
    
    // Check if Three.js is loaded
    if (!window.THREE) {
      console.error("Three.js not loaded");
      return;
    }
  
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    
    // Set renderer size
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Create stars (nodes)
    const stars = [];
    const starGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x4a8ea7,
      transparent: true,
      opacity: 0.9
    });
    
    // Add central hub (main server)
    const hubGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const hubMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff6b6b,
      wireframe: true
    });
    const hub = new THREE.Mesh(hubGeometry, hubMaterial);
    scene.add(hub);
    stars.push(hub);
    
    // Create 50 stars in a spherical formation
    for (let i = 0; i < 50; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial.clone());
      
      // Position stars in a spherical pattern around the hub
      const radius = 2 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      star.position.x = radius * Math.sin(phi) * Math.cos(theta);
      star.position.y = radius * Math.sin(phi) * Math.sin(theta);
      star.position.z = radius * Math.cos(phi);
      
      // Add animation properties
      star.userData = {
        speed: 0.002 + Math.random() * 0.003,
        radius: radius,
        angle: Math.random() * Math.PI * 2,
        orbitSpeed: 0.001 + Math.random() * 0.002
      };
      
      stars.push(star);
      scene.add(star);
    }
    
    // Create connections between stars
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x4a8ea7,
      transparent: true,
      opacity: 0.3,
      linewidth: 1
    });
    
    const lines = [];
    
    // Connect each star to 3-5 other stars
    stars.forEach((star, i) => {
      if (i === 0) return; // Skip hub
      
      // Always connect to hub
      const hubGeometry = new THREE.BufferGeometry().setFromPoints([
        star.position,
        new THREE.Vector3(0, 0, 0)
      ]);
      const hubLine = new THREE.Line(hubGeometry, lineMaterial);
      lines.push(hubLine);
      scene.add(hubLine);
      
      // Connect to 2-4 other random stars
      const connections = 2 + Math.floor(Math.random() * 3);
      for (let j = 0; j < connections; j++) {
        const targetIndex = Math.floor(Math.random() * stars.length);
        if (targetIndex !== i && targetIndex !== 0) {
          const targetStar = stars[targetIndex];
          const geometry = new THREE.BufferGeometry().setFromPoints([
            star.position,
            targetStar.position
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          lines.push(line);
          scene.add(line);
        }
      }
    });
    
    camera.position.z = 15;
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      // Animate stars
      stars.forEach((star, i) => {
        if (i === 0) {
          // Pulsing effect for hub
          const scale = 0.8 + Math.sin(Date.now() * 0.001) * 0.2;
          star.scale.set(scale, scale, scale);
          star.rotation.x += 0.005;
          star.rotation.y += 0.005;
          return;
        }
        
        // Orbital motion around hub
        star.userData.angle += star.userData.orbitSpeed;
        star.position.x = star.userData.radius * Math.cos(star.userData.angle);
        star.position.z = star.userData.radius * Math.sin(star.userData.angle);
        
        // Gentle floating animation
        star.position.y += Math.sin(Date.now() * star.userData.speed) * 0.05;
        
        // Pulsing effect
        const pulse = 0.8 + Math.sin(Date.now() * star.userData.speed * 2) * 0.2;
        star.scale.set(pulse, pulse, pulse);
      });
      
      // Update connection lines
      lines.forEach(line => {
        const positions = line.geometry.attributes.position;
        const startStar = stars.find(s => 
          s.position.equals(new THREE.Vector3(
            positions.getX(0),
            positions.getY(0),
            positions.getZ(0)
          ))
        );
        const endStar = stars.find(s => 
          s.position.equals(new THREE.Vector3(
            positions.getX(1),
            positions.getY(1),
            positions.getZ(1)
          ))
        );
        
        if (startStar && endStar) {
          positions.setXYZ(0, startStar.position.x, startStar.position.y, startStar.position.z);
          positions.setXYZ(1, endStar.position.x, endStar.position.y, endStar.position.z);
          positions.needsUpdate = true;
        }
      });
      
      renderer.render(scene, camera);
    }
    
    // Handle window resize
    function onWindowResize() {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }
    
    window.addEventListener('resize', onWindowResize);
    
    // Start animation
    animate();
    
    // Cleanup function
    return function() {
      window.removeEventListener('resize', onWindowResize);
    };
  }
  
  // Initialize animation when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const backendSection = document.getElementById('backend-engineer-section');
    if (!backendSection) return;
    
    initBackendBackground();
  });


//   x ------------------------------------------ x ------------------------------------------ x
