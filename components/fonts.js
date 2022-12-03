const Fonts = () => (
  <style jsx global>{`
    html,
    body {
      /* Safari compatibility */
      overflow-x: hidden;
      height: 100%;
      width: 100%;
      transform: translate3d(0,0,0);
    }
    @font-face {
      font-family: 'NeueHaasUnicaPro';
      font-weight: 100;
      font-display: swap;
      src: url('/fonts/NeueHaasUnicaPro-Thin.ttf') format('truetype');
    }
    @font-face {
      font-family: 'NeueHaasUnicaPro';
      font-weight: 200;
      font-display: swap;
      src: url('/fonts/NeueHaasUnicaPro-UltraThin.ttf') format('truetype');
    }
    @font-face {
      font-family: 'NeueHaasUnicaPro';
      font-weight: 300;
      font-display: swap;
      src: url('/fonts/NeueHaasUnicaPro-Light.ttf') format('truetype');
    }
    @font-face {
      font-family: 'NeueHaasUnicaPro';
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/NeueHaasUnicaPro-Regular.ttf') format('truetype');
    }
    @font-face {
      font-family: 'NeueHaasUnicaPro';
      font-weight: 500;
      font-display: swap;
      src: url('/fonts/NeueHaasUnicaPro-Medium.ttf') format('truetype');
    }
    /* no font-weight: 600 a.k.a. Semi-Bold */
    @font-face {
      font-family: 'NeueHaasUnicaPro';
      font-weight: 700;
      font-display: swap;
      src: url('/fonts/NeueHaasUnicaPro-Bold.ttf') format('truetype');
    }
    @font-face {
      font-family: 'NeueHaasUnicaPro';
      font-weight: 800;
      font-display: swap;
      src: url('/fonts/NeueHaasUnicaPro-Heavy.ttf') format('truetype');
    }
    @font-face {
      font-family: 'NeueHaasUnicaPro';
      font-weight: 900;
      font-display: swap;
      src: url('/fonts/NeueHaasUnicaPro-Black.ttf') format('truetype');
    }
    @font-face {
      font-family: 'NeueHaasUnicaPro';
      font-weight: 1000;
      font-display: swap;
      src: url('/fonts/NeueHaasUnicaPro-XBlack.ttf') format('truetype');
    }
  `}</style>
)
export default Fonts
