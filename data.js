var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang---flur",
      "name": "Eingang - Flur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.43310862475154366,
        "pitch": 0.2304689663521735,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0101511419934894,
          "pitch": 0.419340006425557,
          "rotation": 0,
          "target": "1-flur---abstellraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-flur---abstellraum",
      "name": "Flur - Abstellraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.8587857561440302,
        "pitch": 0.11085802057571392,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2941341120814034,
          "pitch": 0.21503627353401455,
          "rotation": 0,
          "target": "2-flur---kche-wohnzimmer"
        },
        {
          "yaw": -1.7974237827571589,
          "pitch": 0.2206006704418364,
          "rotation": 0,
          "target": "0-eingang---flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-flur---kche-wohnzimmer",
      "name": "Flur - Küche, Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.7055297142828056,
        "pitch": 0.032092791254139996,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01151545715212876,
          "pitch": 0.14884013004031615,
          "rotation": 4.71238898038469,
          "target": "5-kche"
        },
        {
          "yaw": 1.0520007089867551,
          "pitch": 0.14999126787525618,
          "rotation": 6.283185307179586,
          "target": "3-wohnzimmer-ansicht-1"
        },
        {
          "yaw": -2.1238097473094832,
          "pitch": 0.2170584375887632,
          "rotation": 0,
          "target": "1-flur---abstellraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wohnzimmer-ansicht-1",
      "name": "Wohnzimmer Ansicht 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8805063179786785,
        "pitch": 0.1863592932582936,
        "fov": 1.7452151454057374
      },
      "linkHotspots": [
        {
          "yaw": -1.6219849987951847,
          "pitch": 0.3892300100417714,
          "rotation": 4.71238898038469,
          "target": "7-schlafzimmer"
        },
        {
          "yaw": -0.029874442280499736,
          "pitch": 0.3383382245296591,
          "rotation": 6.283185307179586,
          "target": "4-wohnzimmer-ansicht2"
        },
        {
          "yaw": 1.983952855376491,
          "pitch": 0.5193473620117466,
          "rotation": 0,
          "target": "2-flur---kche-wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wohnzimmer-ansicht2",
      "name": "Wohnzimmer Ansicht2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.567850624997358,
          "pitch": 0.21012264429253413,
          "rotation": 6.283185307179586,
          "target": "3-wohnzimmer-ansicht-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kche",
      "name": "Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.08660935855941077,
        "pitch": 0.023300021936641713,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5079360722581434,
          "pitch": 0.20141056748832398,
          "rotation": 4.71238898038469,
          "target": "6-badezimmer"
        },
        {
          "yaw": 2.939138961427254,
          "pitch": 0.32696352518252425,
          "rotation": 0,
          "target": "2-flur---kche-wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-badezimmer",
      "name": "Badezimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.043179531621851,
        "pitch": 0.19583978255393042,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.933592000018793,
          "pitch": 0.3825008372177745,
          "rotation": 0,
          "target": "5-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.4898936691453066,
        "pitch": 0.23631964468957634,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0970319664757335,
          "pitch": 0.4380707146850984,
          "rotation": 1.5707963267948966,
          "target": "3-wohnzimmer-ansicht-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
