document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. تأثير دخول الصفحة الرئيسي بـ GSAP ---
    const tl = gsap.timeline({
        defaults: { ease: "power4.out" }
    });

    tl.to(".badge", { opacity: 1, y: 0, duration: 1, delay: 0.2 })
      .to(".title", { opacity: 1, y: 0, duration: 1.2 }, "-=0.7")
      .to(".description", { opacity: 1, y: 0, duration: 1 }, "-=0.8")
      .to(".actions", { opacity: 1, y: 0, duration: 1 }, "-=0.7");


    // --- 2. تأثير الخلفية ثلاثية الأبعاد (Three.js Background) ---
    const canvas = document.getElementById('bgCanvas');
    if (canvas) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 180;
        const posArray = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            color: 0xd97706,
            transparent: true,
            opacity: 0.4
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        camera.position.z = 5;

        let mouseX = 0;
        let mouseY = 0;
        window.addEventListener('mousemove', (event) => {
            mouseX = event.clientX / window.innerWidth - 0.5;
            mouseY = event.clientY / window.innerHeight - 0.5;
        });

        function animate() {
            requestAnimationFrame(animate);
            particlesMesh.rotation.y += 0.001 + mouseX * 0.03;
            particlesMesh.rotation.x += 0.001 + mouseY * 0.03;
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }


    // --- 3. إدارة وضع الدارك مود (Dark / Light Mode Toggle) ---
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')) {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    });


    // --- 4. نظام مستكشف القهوة والبطاقات الذكية ---
    const choiceCards = document.querySelectorAll('.choice-card');
    const resultModal = document.getElementById('resultModal');
    const closeModal = document.getElementById('closeModal');
    const recipientDisplay = document.getElementById('recipientDisplay');
    const resultTitle = document.getElementById('resultTitle');
    const resultDesc = document.getElementById('resultDesc');
    const specRoast = document.getElementById('specRoast');
    const specProcess = document.getElementById('specProcess');
    const friendNameInput = document.getElementById('friendName');
    
    const addToCartBtn = document.getElementById('addToCartBtn');
    const dynamicCart = document.getElementById('dynamicCart');
    const cartItemName = document.getElementById('cartItemName');
    const cartItemPrice = document.getElementById('cartItemPrice');

    const recommendations = {
        fruity: {
            title: "إثيوبيا جيديو (مغسولة)",
            desc: "تتميز بإيحاءات واضحة للياسمين والخوخ، وقوام شايّ ناعم يناسب محبي القهوة المقطرة.",
            roast: "التحميص: خفيف (Light)",
            process: "المعالجة: مغسولة",
            price: "85 ر.س"
        },
        chocolate: {
            title: "البرازيل سيرادو (مجففة)",
            desc: "تتميز بحلاوة عالية وإيحاء الشوكولاتة الداكنة والمكسرات المحمصة، قوام ممتلئ وثقيل.",
            roast: "التحميص: متوسط (Medium)",
            process: "المعالجة: مجففة",
            price: "72 ر.س"
        },
        balanced: {
            title: "كولومبيا هويلا (موسمي فاخر)",
            desc: "التوازن المثالي بين الفاكهة والحلاوة، تعطي إسبيريسو استثنائياً ومشروبات حليب غنية.",
            roast: "التحميص: متوسط مائل للداكن",
            process: "المعالجة: تخمر لا هوائي",
            price: "90 ر.س"
        }
    };

    let currentSelectedCoffee = null;

    choiceCards.forEach(card => {
        card.addEventListener('click', () => {
            const pref = card.getAttribute('data-pref');
            const data = recommendations[pref];
            currentSelectedCoffee = data;

            let enteredName = friendNameInput.value.trim();
            if(!enteredName) {
                enteredName = "الضيف الكريم";
            }

            recipientDisplay.textContent = `مخصص لـ: ${enteredName}`;
            resultTitle.textContent = data.title;
            resultDesc.textContent = data.desc;
            specRoast.textContent = data.roast;
            specProcess.textContent = data.process;

            resultModal.style.display = 'flex';
            gsap.fromTo('.modal-content', 
                { scale: 0.8, opacity: 0, y: 30 }, 
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
            );
        });
    });

    closeModal.addEventListener('click', () => {
        gsap.to('.modal-content', {
            scale: 0.8, opacity: 0, y: 30, duration: 0.3, ease: "power2.in",
            onComplete: () => {
                resultModal.style.display = 'none';
            }
        });
    });

    // --- 5. السلة الديناميكية الذكية ---
    addToCartBtn.addEventListener('click', () => {
        if(currentSelectedCoffee) {
            cartItemName.textContent = currentSelectedCoffee.title;
            cartItemPrice.textContent = currentSelectedCoffee.price;
            
            dynamicCart.style.display = 'flex';
            gsap.fromTo(dynamicCart, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });

            resultModal.style.display = 'none';
        }
    });

});
