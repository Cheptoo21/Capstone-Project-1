const ham = document.querySelector('.hamBtn');
const closeBtn = document.querySelector('.closeBtn');
const mobMenu = document.querySelector('.mob-menu');

ham.addEventListener('click', () => {
  mobMenu.style.display = 'flex';
  body.style.filter = 'blur(100px)';
});

closeBtn.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  body.style.filter = 'blur(0)';
});

mobMenu.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  body.style.filter = 'blur(0)';
});

const speakers = [
  {
    id: '1',
    name: 'Ms Phoina Beauty',
    title: 'CEO Phoina Hair Collection',
    desc: 'Aisha is a beauty enthusiast and make-up artist with passion to educate young women into beauty.',
    img: './Logo/phoina.jpg',
    imgAlt: 'Phoina Beauty',
  },
  {
    id: '2',
    name: 'Mrs Maureen Bandari',
    title: 'CEO Bandari Beauty',
    desc: 'Maureen Bandari is an entrepreneur with focus on skin beauty.She is the founder of Badari Beauty Kenya.',
    img: './Logo/bandari.jpg',
    imgAlt: 'Maureen Bandari',
  },
  {
    id: '3',
    name: 'Mrs Wanjiru Kariuki',
    title: 'CEO Maua wear',
    desc: 'Wanjiru Kariuki is a digital content creator and a fashion enthusiast. She is currently the founder of Maua wear-a made Kenya brand',
    img: './Logo/wanj.jpg',
    imgAlt: 'Wanjiru Kariuki',
  },
  {
    id: '4',
    name: 'Ms Jackie Matubia',
    title: 'CEO Afrique Salon',
    desc: 'Jackie Matubia is an influencer with good taste of fashion and beauty.She is the founder of Afrique salon',
    img: './Logo/jackie.jpg',
    imgAlt: 'Jackie Matubia',
  },
  {
    id: '5',
    name: 'Mrs Dee Neta',
    title: 'CEO Fepa Beauty',
    desc: 'Dee Neta is a digital creator and the founder of Fepa Beauty.She also has her own beauty line with her own formulated beauty care products.',
    img: './Logo/dee.jpg',
    imgAlt: 'Dee Neta',
  },
  {
    id: '6',
    name: 'Ms Zedik Posh',
    title: 'CEO Posh palace beauty',
    desc: 'Zedik Posh is a content creator and founder of Posh palace.She offers trainings to anyone with a passion of beauty.',
    img: './Logo/zedik.jpg',
    imgAlt: 'Zedik Posh',
  },
];

const speakerContainer = document.querySelector('.speaker-holder');
const showSpeakers = speakers.map((speaker) => `
      <div class="speakers">
        <div class="img-holder">
          <img class="bg" src="">
          <img src=${speaker.img} alt=${speaker.imgAlt}>
        </div>
        <div class="text-holder">
          <div class="name">
            <h3>${speaker.name}</h3>
            <i>${speaker.title}</i>
          </div>
          <hr>
          <div class="description">
            ${speaker.desc}  
          </div>
        </div>
      </div>
      `).join('');

speakerContainer.innerHTML = showSpeakers;

const vip = document.querySelector('.speakers:nth-child(1n+3)');
const vip1 = document.querySelector('.speakers:nth-child(n+4)');
const vip2 = document.querySelector('.speakers:nth-child(n+5)');
const vip3 = document.querySelector('.speakers:nth-child(n+6)');
const more = document.querySelector('.more-info');
const less = document.querySelector('.less-info');
function showMore() {
  vip.style.display = 'flex';
  more.style.display = 'none';
  less.style.display = 'flex';
  vip1.style.display = 'flex';
  vip2.style.display = 'flex';
  vip3.style.display = 'flex';
}
function showLess() {
  vip.style.display = 'none';
  vip1.style.display = 'none';
  vip2.style.display = 'none';
  vip3.style.display = 'none';
  less.style.display = 'none';
  more.style.display = 'flex';
}
more.addEventListener('click', showMore);
less.addEventListener('click', showLess);