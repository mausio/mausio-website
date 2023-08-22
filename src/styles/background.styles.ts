import styled from "styled-components";

export const BackgroundAnimation = styled.div`
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  
  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .background {
    position: fixed;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #000000;
    overflow: hidden;
  }

  .background span {
    width: 1vmin;
    height: 1vmin;
    border-radius: 1vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }


  .background span:nth-child(0) {
    color: #606060;
    top: 64%;
    left: 12%;
    animation-duration: 21s;
    animation-delay: -95s;
    transform-origin: 11vw 20vh;
    box-shadow: 2vmin 0 0.9963477220151328vmin currentColor;
  }

  .background span:nth-child(1) {
    color: #606060;
    top: 60%;
    left: 64%;
    animation-duration: 154s;
    animation-delay: -168s;
    transform-origin: 16vw 15vh;
    box-shadow: -2vmin 0 0.7021317791220799vmin currentColor;
  }

  .background span:nth-child(2) {
    color: #232323;
    top: 17%;
    left: 80%;
    animation-duration: 142s;
    animation-delay: -69s;
    transform-origin: 1vw 3vh;
    box-shadow: 2vmin 0 0.7194897698988616vmin currentColor;
  }

  .background span:nth-child(3) {
    color: #444444;
    top: 43%;
    left: 96%;
    animation-duration: 223s;
    animation-delay: -199s;
    transform-origin: -19vw 13vh;
    box-shadow: 2vmin 0 0.5054753142557634vmin currentColor;
  }

  .background span:nth-child(4) {
    color: #232323;
    top: 39%;
    left: 17%;
    animation-duration: 6s;
    animation-delay: -157s;
    transform-origin: -11vw 18vh;
    box-shadow: -2vmin 0 0.32430228477950784vmin currentColor;
  }

  .background span:nth-child(5) {
    color: #444444;
    top: 2%;
    left: 53%;
    animation-duration: 165s;
    animation-delay: -113s;
    transform-origin: -4vw 9vh;
    box-shadow: 2vmin 0 0.5271647765375868vmin currentColor;
  }

  .background span:nth-child(6) {
    color: #444444;
    top: 14%;
    left: 38%;
    animation-duration: 176s;
    animation-delay: -174s;
    transform-origin: 23vw -12vh;
    box-shadow: 2vmin 0 0.6898028999349842vmin currentColor;
  }

  .background span:nth-child(7) {
    color: #7a7a7a;
    top: 3%;
    left: 32%;
    animation-duration: 142s;
    animation-delay: -49s;
    transform-origin: 3vw -11vh;
    box-shadow: 2vmin 0 0.6351334597484767vmin currentColor;
  }

  .background span:nth-child(8) {
    color: #aaaaaa;
    top: 87%;
    left: 72%;
    animation-duration: 84s;
    animation-delay: -91s;
    transform-origin: 22vw 9vh;
    box-shadow: -2vmin 0 0.9522239229716165vmin currentColor;
  }

  .background span:nth-child(9) {
    color: #aaaaaa;
    top: 47%;
    left: 52%;
    animation-duration: 23s;
    animation-delay: -36s;
    transform-origin: 12vw -11vh;
    box-shadow: 2vmin 0 0.2927634178678947vmin currentColor;
  }

  .background span:nth-child(10) {
    color: #444444;
    top: 82%;
    left: 86%;
    animation-duration: 15s;
    animation-delay: -44s;
    transform-origin: 20vw 10vh;
    box-shadow: -2vmin 0 0.9459854070707799vmin currentColor;
  }

  .background span:nth-child(11) {
    color: #7a7a7a;
    top: 71%;
    left: 35%;
    animation-duration: 118s;
    animation-delay: -85s;
    transform-origin: -20vw -18vh;
    box-shadow: -2vmin 0 0.3196008299338502vmin currentColor;
  }

  .background span:nth-child(12) {
    color: #232323;
    top: 46%;
    left: 35%;
    animation-duration: 75s;
    animation-delay: -130s;
    transform-origin: -2vw -4vh;
    box-shadow: 2vmin 0 0.4401984936577358vmin currentColor;
  }

  .background span:nth-child(13) {
    color: #7a7a7a;
    top: 54%;
    left: 49%;
    animation-duration: 38s;
    animation-delay: -77s;
    transform-origin: 12vw -15vh;
    box-shadow: 2vmin 0 1.236274317366845vmin currentColor;
  }

  .background span:nth-child(14) {
    color: #444444;
    top: 5%;
    left: 16%;
    animation-duration: 227s;
    animation-delay: -55s;
    transform-origin: -9vw 23vh;
    box-shadow: -2vmin 0 0.3522420700775646vmin currentColor;
  }

  .background span:nth-child(15) {
    color: #232323;
    top: 29%;
    left: 11%;
    animation-duration: 142s;
    animation-delay: -114s;
    transform-origin: -9vw -23vh;
    box-shadow: -2vmin 0 0.5221609136687307vmin currentColor;
  }

  .background span:nth-child(16) {
    color: #aaaaaa;
    top: 21%;
    left: 92%;
    animation-duration: 53s;
    animation-delay: -35s;
    transform-origin: -23vw 12vh;
    box-shadow: -2vmin 0 0.8923646780153425vmin currentColor;
  }

  .background span:nth-child(17) {
    color: #444444;
    top: 19%;
    left: 54%;
    animation-duration: 189s;
    animation-delay: -56s;
    transform-origin: 25vw 4vh;
    box-shadow: -2vmin 0 0.7803039099196656vmin currentColor;
  }

  .background span:nth-child(18) {
    color: #aaaaaa;
    top: 6%;
    left: 29%;
    animation-duration: 163s;
    animation-delay: -163s;
    transform-origin: 23vw 17vh;
    box-shadow: -2vmin 0 0.7046077152947159vmin currentColor;
  }

  .background span:nth-child(19) {
    color: #7a7a7a;
    top: 36%;
    left: 68%;
    animation-duration: 34s;
    animation-delay: -29s;
    transform-origin: 17vw -20vh;
    box-shadow: -2vmin 0 0.6427111536253611vmin currentColor;
  }

  .background span:nth-child(20) {
    color: #606060;
    top: 47%;
    left: 67%;
    animation-duration: 137s;
    animation-delay: -122s;
    transform-origin: -15vw -12vh;
    box-shadow: 2vmin 0 0.6830487531059254vmin currentColor;
  }

  .background span:nth-child(21) {
    color: #232323;
    top: 79%;
    left: 58%;
    animation-duration: 184s;
    animation-delay: -245s;
    transform-origin: 24vw -12vh;
    box-shadow: -2vmin 0 0.709591921988826vmin currentColor;
  }

  .background span:nth-child(22) {
    color: #232323;
    top: 98%;
    left: 51%;
    animation-duration: 107s;
    animation-delay: -53s;
    transform-origin: 5vw -24vh;
    box-shadow: 2vmin 0 1.1679785302188896vmin currentColor;
  }

  .background span:nth-child(23) {
    color: #606060;
    top: 43%;
    left: 96%;
    animation-duration: 15s;
    animation-delay: -164s;
    transform-origin: -14vw -20vh;
    box-shadow: 2vmin 0 0.4456392542865206vmin currentColor;
  }

  .background span:nth-child(24) {
    color: #444444;
    top: 36%;
    left: 7%;
    animation-duration: 20s;
    animation-delay: -200s;
    transform-origin: -17vw -16vh;
    box-shadow: 2vmin 0 1.2318943589849782vmin currentColor;
  }

  .background span:nth-child(25) {
    color: #232323;
    top: 56%;
    left: 34%;
    animation-duration: 168s;
    animation-delay: -97s;
    transform-origin: -6vw 14vh;
    box-shadow: 2vmin 0 0.28430893151396197vmin currentColor;
  }

  .background span:nth-child(26) {
    color: #444444;
    top: 95%;
    left: 85%;
    animation-duration: 114s;
    animation-delay: -174s;
    transform-origin: -6vw -7vh;
    box-shadow: 2vmin 0 0.9893334659951933vmin currentColor;
  }

  .background span:nth-child(27) {
    color: #444444;
    top: 78%;
    left: 54%;
    animation-duration: 100s;
    animation-delay: -128s;
    transform-origin: -24vw 12vh;
    box-shadow: 2vmin 0 0.6942647434875866vmin currentColor;
  }

  .background span:nth-child(28) {
    color: #232323;
    top: 96%;
    left: 53%;
    animation-duration: 141s;
    animation-delay: -170s;
    transform-origin: 2vw 8vh;
    box-shadow: 2vmin 0 0.4997626426380595vmin currentColor;
  }

  .background span:nth-child(29) {
    color: #232323;
    top: 48%;
    left: 40%;
    animation-duration: 215s;
    animation-delay: -229s;
    transform-origin: -23vw -2vh;
    box-shadow: -2vmin 0 0.5461721650459762vmin currentColor;
  }

  .background span:nth-child(30) {
    color: #aaaaaa;
    top: 19%;
    left: 94%;
    animation-duration: 192s;
    animation-delay: -23s;
    transform-origin: -4vw -17vh;
    box-shadow: 2vmin 0 1.2409151087425103vmin currentColor;
  }

  .background span:nth-child(31) {
    color: #7a7a7a;
    top: 64%;
    left: 5%;
    animation-duration: 121s;
    animation-delay: -106s;
    transform-origin: 8vw 13vh;
    box-shadow: 2vmin 0 0.41600696702167417vmin currentColor;
  }

  .background span:nth-child(32) {
    color: #7a7a7a;
    top: 71%;
    left: 99%;
    animation-duration: 43s;
    animation-delay: -169s;
    transform-origin: -17vw -1vh;
    box-shadow: -2vmin 0 0.4358337040167668vmin currentColor;
  }

  .background span:nth-child(33) {
    color: #7a7a7a;
    top: 40%;
    left: 33%;
    animation-duration: 181s;
    animation-delay: -182s;
    transform-origin: -5vw -16vh;
    box-shadow: -2vmin 0 0.31870248494711284vmin currentColor;
  }

  .background span:nth-child(34) {
    color: #606060;
    top: 12%;
    left: 33%;
    animation-duration: 171s;
    animation-delay: -232s;
    transform-origin: -17vw -11vh;
    box-shadow: 2vmin 0 0.7952357814613232vmin currentColor;
  }

  .background span:nth-child(35) {
    color: #aaaaaa;
    top: 24%;
    left: 45%;
    animation-duration: 78s;
    animation-delay: -35s;
    transform-origin: 16vw 23vh;
    box-shadow: -2vmin 0 0.899700437987519vmin currentColor;
  }

  .background span:nth-child(36) {
    color: #444444;
    top: 34%;
    left: 39%;
    animation-duration: 23s;
    animation-delay: -211s;
    transform-origin: -22vw 5vh;
    box-shadow: 2vmin 0 1.0888667791442157vmin currentColor;
  }

  .background span:nth-child(37) {
    color: #7a7a7a;
    top: 55%;
    left: 7%;
    animation-duration: 28s;
    animation-delay: -139s;
    transform-origin: 15vw -12vh;
    box-shadow: -2vmin 0 1.0754986863353766vmin currentColor;
  }

  .background span:nth-child(38) {
    color: #444444;
    top: 46%;
    left: 83%;
    animation-duration: 152s;
    animation-delay: -141s;
    transform-origin: 21vw 23vh;
    box-shadow: 2vmin 0 0.8097754725763873vmin currentColor;
  }

  .background span:nth-child(39) {
    color: #aaaaaa;
    top: 40%;
    left: 47%;
    animation-duration: 41s;
    animation-delay: -213s;
    transform-origin: -9vw -14vh;
    box-shadow: 2vmin 0 0.35147835488956936vmin currentColor;
  }

  .background span:nth-child(40) {
    color: #606060;
    top: 71%;
    left: 86%;
    animation-duration: 126s;
    animation-delay: -131s;
    transform-origin: -11vw 6vh;
    box-shadow: 2vmin 0 0.8137325368599424vmin currentColor;
  }

  .background span:nth-child(41) {
    color: #aaaaaa;
    top: 62%;
    left: 83%;
    animation-duration: 115s;
    animation-delay: -71s;
    transform-origin: -6vw 9vh;
    box-shadow: 2vmin 0 0.493953809247489vmin currentColor;
  }

  .background span:nth-child(42) {
    color: #aaaaaa;
    top: 56%;
    left: 84%;
    animation-duration: 20s;
    animation-delay: -94s;
    transform-origin: 3vw -8vh;
    box-shadow: -2vmin 0 1.1348107027529104vmin currentColor;
  }

  .background span:nth-child(43) {
    color: #232323;
    top: 99%;
    left: 38%;
    animation-duration: 128s;
    animation-delay: -198s;
    transform-origin: 0 18vh;
    box-shadow: -2vmin 0 0.5823873368632234vmin currentColor;
  }

  .background span:nth-child(44) {
    color: #aaaaaa;
    top: 44%;
    left: 1%;
    animation-duration: 93s;
    animation-delay: -125s;
    transform-origin: 0vw -18vh;
    box-shadow: -2vmin 0 0.4606268670551369vmin currentColor;
  }

  .background span:nth-child(45) {
    color: #606060;
    top: 41%;
    left: 39%;
    animation-duration: 137s;
    animation-delay: -34s;
    transform-origin: -11vw -2vh;
    box-shadow: -2vmin 0 0.6139625346302148vmin currentColor;
  }

  .background span:nth-child(46) {
    color: #232323;
    top: 18%;
    left: 3%;
    animation-duration: 43s;
    animation-delay: -83s;
    transform-origin: 2vw 3vh;
    box-shadow: 2vmin 0 1.111356665044753vmin currentColor;
  }

  .background span:nth-child(47) {
    color: #606060;
    top: 81%;
    left: 32%;
    animation-duration: 138s;
    animation-delay: -130s;
    transform-origin: -22vw -2vh;
    box-shadow: 2vmin 0 1.173045281234308vmin currentColor;
  }

  .background span:nth-child(48) {
    color: #7a7a7a;
    top: 97%;
    left: 29%;
    animation-duration: 96s;
    animation-delay: -93s;
    transform-origin: -4vw -10vh;
    box-shadow: -2vmin 0 1.0142185781212982vmin currentColor;
  }

  .background span:nth-child(49) {
    color: #7a7a7a;
    top: 11%;
    left: 99%;
    animation-duration: 101s;
    animation-delay: -191s;
    transform-origin: -2vw -16vh;
    box-shadow: -2vmin 0 0.3511683539643369vmin currentColor;
  }

`