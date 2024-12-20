const viewProfileBtns = document.querySelectorAll(".view-profile-btn");
      const profileModal = document.getElementById("profile-modal");
      const modalTitle = document.getElementById("modal-title");
      const modalContent = document.getElementById("modal-content");
      const closeBtn = document.getElementById("close-modal-btn");

      // Profile Infos
      const speakerProfiles = {
        1: {
          title: "AJARN HARTANTO GUNAWAN",
          content: `Ajarn Hartanto Gunawan is a former Buddhist monk and social worker who has received international recognition for his efforts in combating human trafficking and domestic abuse, rescuing over 400 young girls. He has taught mental well-being to various groups, including government officials, university students, and incarcerated individuals. With over 25 years of experience in social work and dharma teaching, he introduced Research Meditation, a unique approach that helps individuals overcome trauma and mental illness.
                    Research Meditation combines principles such as the Law of Nature, Cause and Effect, and Impermanence, to improve mental health and well-being. Ajarn Hartanto advocates for the inclusion of Mental Education (ME) alongside Physical Education (PE) in schools, stressing that mental well-being is just as crucial as physical health. He believes that teaching children how to manage their mental states can prevent mental illnesses and lead to healthier, wiser individuals who live in the present with peace and happiness.`,
        },
        2: {
          title: "NISANART DHARMAGEISIRATTANA",
          content: `Gift earned a Bachelor's Degree in Film and Television from NYU (1998) and a Master's in Education Administration from Columbia University (2013). She is the Director of The American School of Bangkok Green Valley and founded the Mindfulness Academy of Asia to promote well-being in schools. Her mindfulness training has reached international educators, students, doctors, and healthcare professionals. In 2018, she published The Mindful Way, a book to help teachers and administrators implement mindfulness in schools.
                    The abstract highlights the mindfulness training at The American School of Bangkok Green Valley, which fosters well-being and happiness among teachers and students. The school's successful mindfulness practices have attracted partnerships with educational institutions in Thailand, Indonesia, Bangladesh, the U.S., and South Korea. These practices aim to improve well-being, mental health, academic performance, and success in sports and the arts. In the post-pandemic era, the school has built a mindfulness culture to help the community cope with challenges such as anxiety and focus issues, using proven techniques that have been adopted by other organizations.`,
        },
        3: {
          title: "DR. MONTI DATTA",
          content: `Dr. Monti Datta, raised in Los Angeles and educated at UC Berkeley and Georgetown University, spent time teaching in South Korea and Japan before pursuing a PhD in political science at UC Davis. Since meeting Ajarn Hartanto in 2016, he has been involved in developing meditation programs at the University of Richmond to help students better understand their minds during their college education. Monti is passionate about travel and social justice, and actively promotes these causes on campus.
                    The abstract discusses the mindfulness initiatives Monti has developed at the University of Richmond since 2016, in collaboration with Ajarn Hartanto, to improve well-being for students and the wider Richmond community. Monti also created a course called Mindful and Wise Leadership for first-year students, which teaches principles of research meditation and encourages their application in academic life.`,
        },
        4: {
          title: "WILLIAM VILLAFRANCO",
          content: "Trustee Virginia B. Toulmin Foundation, Entrepreneur and Philanthropist",
        },
      };

      // Modal View
      viewProfileBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          event.preventDefault();
          const speakerId = btn.dataset.speaker;
          const profile = speakerProfiles[speakerId];
          if (profile) {
            modalTitle.textContent = profile.title;
            modalContent.textContent = profile.content;
            profileModal.classList.remove("hidden");
          }
        });
      });

      // Close modal
      closeBtn.addEventListener("click", () => {
        profileModal.classList.add("hidden");
      });

      // Close modal when clicking outside
      profileModal.addEventListener("click", (event) => {
        if (event.target === profileModal) {
          profileModal.classList.add("hidden");
        }
      });

      viewProfileBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          event.preventDefault();
          const speakerId = btn.dataset.speaker;
          const profile = speakerProfiles[speakerId];
          if (profile) {
            modalTitle.textContent = profile.title;
            modalContent.textContent = profile.content;
            profileModal.classList.remove("hidden");
            profileModal
              .querySelector(".scale-95")
              .classList.replace("scale-95", "scale-100");
          }
        });
      });

      closeBtn.addEventListener("click", () => {
        const modalContent = profileModal.querySelector(".scale-100");
        modalContent.classList.replace("scale-100", "scale-95");
        setTimeout(() => profileModal.classList.add("hidden"), 300);
      });