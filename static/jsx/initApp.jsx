function initApp() {
  setup();
  burn_template();
  ready();

  function setup() {
    Object.assign(config_template, {
      banner: {
        left: {
          label: "Documentación",
          logo: "static/img/logo.svg",
        },
        right: {
          social: {
            github: {
              label: "Jeff-Aporta",
              url: "https://github.com/Jeff-Aporta",
            },
            youtube: {
              label: "YouTube",
              url: "https://www.youtube.com/@JeffAporta",
            },
            whatsapp: {
              label: "WhatsApp",
              url: "https://wa.link/1tmqmt",
            },
            telegram: {
              label: "Telegram",
              url: "https://t.me/jeffAporta",
            },
          },
        },
      },
      mapSite: _mapSite(),
      repo: {
        name: "JS2CSS",
        url: "https://github.com/Jeff-Aporta/JS2CSS",
      },
    });
  }

  function burn_template() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  function ready() {
    changeContent({ id: get_id_param() });
  }

  function _mapSite() {
    return [
      {
        lbl: " ",
      },
      {
        component: () => <_masEnMiPortafolio />,
      },
      {
        lbl: " - ",
      },
      {
        lbl: "Empecemos",
      },
      {
        lbl: "Introducción",
        id: "intro",
        content: () => <_intro />,
        i: "fa-regular fa-file-lines",
      },
      {
        lbl: " ",
      },
      {
        lbl: "Uso",
      },
      {
        lbl: "Conversión e inyección",
        id: "conv",
        content: () => <_conv />,
        i: "fa-solid fa-person-chalkboard",
      },
      {
        lbl: "  ",
      },
    ];
  }
}
