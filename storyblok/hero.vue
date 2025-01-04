<template>
  <v-row v-editable="blok" class="c-hero bg-black">
    <v-col class="pa-0">
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100vw"
        height="auto"
        viewBox="0 0 1920 1175"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_32"
              data-name="Rectangle 32"
              width="1920"
              height="1175"
              transform="translate(5563 2507)"
              fill="none"
            />
          </clipPath>
          <linearGradient
            id="linear-gradient"
            x1="1.288"
            y1="-0.007"
            x2="0.128"
            y2="0.411"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" :stop-color="$vuetify?.theme?.themes?.light?.colors?.primary" />
            <stop offset="1" :stop-color="$vuetify?.theme?.themes?.light?.colors?.black" />
          </linearGradient>
          <clipPath id="clip-path-2">
            <rect width="136" height="163" fill="none" />
          </clipPath>
        </defs>
        <g
          id="Mask_Group_132"
          data-name="Mask Group 132"
          transform="translate(-5563 -2507)"
          clip-path="url(#clip-path)"
        >
          <g
            id="Group_135"
            data-name="Group 135"
            transform="translate(5563 2507)"
          >
            <g
              id="Group_134"
              data-name="Group 134"
              transform="translate(-95 -127)"
            >
              <g id="Group_133" data-name="Group 133">
                <rect
                  id="Rectangle_29"
                  data-name="Rectangle 29"
                  width="677"
                  height="1175"
                  transform="translate(1338 127)"
                  fill="url(#linear-gradient)"
                />
                <rect
                  id="Rectangle_30"
                  data-name="Rectangle 30"
                  width="1346"
                  height="1191"
                  transform="translate(95 111)"
                  :fill="$vuetify?.theme?.themes?.light?.colors?.black"
                />
                <g
                  id="Polygon_7"
                  data-name="Polygon 7"
                  transform="translate(888 305)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  opacity="0.14"
                >
                  <path
                    d="M71.476,45.375a30,30,0,0,1,52.047,0l45.71,79.7A30,30,0,0,1,143.21,170H51.79a30,30,0,0,1-26.024-44.925Z"
                    stroke="none"
                  />
                  <path
                    d="M 97.5 51.30003356933594 C 95.55295562744141 51.30003356933594 91.94962310791016 51.88758850097656 89.69287872314453 55.82241821289062 L 43.98258972167969 135.5224151611328 C 41.73704528808594 139.437744140625 43.03086853027344 142.8347473144531 44.001953125 144.5111999511719 C 44.97303771972656 146.1876220703125 47.276123046875 149 51.78970336914062 149 L 143.2102966308594 149 C 147.723876953125 149 150.0269622802734 146.1876220703125 150.998046875 144.5111999511719 C 151.9691162109375 142.8347930908203 153.2629547119141 139.4377899169922 151.0173797607422 135.5224151611328 L 105.3071212768555 55.82241821289062 C 103.0503768920898 51.88758850097656 99.44704437255859 51.30003356933594 97.5 51.30003356933594 M 97.5 30.30003356933594 C 107.6299362182617 30.30003356933594 117.7598724365234 35.32492065429688 123.5237045288086 45.37466430664062 L 169.2339630126953 125.0746612548828 C 180.7044982910156 145.0745391845703 166.2660369873047 170 143.2102966308594 170 L 51.78970336914062 170 C 28.73396301269531 170 14.29550170898438 145.0745391845703 25.76600646972656 125.0746612548828 L 71.47629547119141 45.37466430664062 C 77.24012756347656 35.32492065429688 87.37006378173828 30.30003356933594 97.5 30.30003356933594 Z"
                    stroke="none"
                    :fill="$vuetify?.theme?.themes?.light?.colors?.primary"
                  />
                </g>
                <g
                  id="Polygon_8"
                  data-name="Polygon 8"
                  transform="translate(723 968)"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  opacity="0.14"
                >
                  <path
                    d="M71.476,45.375a30,30,0,0,1,52.047,0l45.71,79.7A30,30,0,0,1,143.21,170H51.79a30,30,0,0,1-26.024-44.925Z"
                    stroke="none"
                  />
                  <path
                    d="M 97.5 51.30003356933594 C 95.55295562744141 51.30003356933594 91.94962310791016 51.88758850097656 89.69287872314453 55.82241821289062 L 43.98258972167969 135.5224151611328 C 41.73704528808594 139.437744140625 43.03086853027344 142.8347473144531 44.001953125 144.5111999511719 C 44.97303771972656 146.1876220703125 47.276123046875 149 51.78970336914062 149 L 143.2102966308594 149 C 147.723876953125 149 150.0269622802734 146.1876220703125 150.998046875 144.5111999511719 C 151.9691162109375 142.8347930908203 153.2629547119141 139.4377899169922 151.0173797607422 135.5224151611328 L 105.3071212768555 55.82241821289062 C 103.0503768920898 51.88758850097656 99.44704437255859 51.30003356933594 97.5 51.30003356933594 M 97.5 30.30003356933594 C 107.6299362182617 30.30003356933594 117.7598724365234 35.32492065429688 123.5237045288086 45.37466430664062 L 169.2339630126953 125.0746612548828 C 180.7044982910156 145.0745391845703 166.2660369873047 170 143.2102966308594 170 L 51.78970336914062 170 C 28.73396301269531 170 14.29550170898438 145.0745391845703 25.76600646972656 125.0746612548828 L 71.47629547119141 45.37466430664062 C 77.24012756347656 35.32492065429688 87.37006378173828 30.30003356933594 97.5 30.30003356933594 Z"
                    stroke="none"
                    :fill="$vuetify?.theme?.themes?.light?.colors?.primary"
                  />
                </g>
                <circle
                  id="Ellipse_10"
                  data-name="Ellipse 10"
                  cx="349.5"
                  cy="349.5"
                  r="349.5"
                  transform="translate(1007 180)"
                  :fill="$vuetify?.theme?.themes?.light?.colors?.black"
                  opacity="0.532"
                />
                <g
                  id="Polygon_9"
                  data-name="Polygon 9"
                  transform="translate(1648 552)"
                  fill="none"
                  opacity="0.502"
                >
                  <path
                    d="M128.872,0A30,30,0,0,1,154.9,15.075l31.544,55a30,30,0,0,1,0,29.851l-31.544,55A30,30,0,0,1,128.872,170H66.128A30,30,0,0,1,40.1,154.925l-31.544-55a30,30,0,0,1,0-29.851l31.544-55A30,30,0,0,1,66.128,0Z"
                    stroke="none"
                  />
                  <path
                    d="M 66.12796020507812 21 C 62.9122314453125 21 59.92073059082031 22.73286437988281 58.32087707519531 25.52241516113281 L 26.7767333984375 80.52236175537109 C 25.19273376464844 83.28427124023438 25.19268798828125 86.71572875976562 26.7767333984375 89.47763824462891 L 58.32083129882812 144.4776306152344 C 59.92068481445312 147.2671356201172 62.9122314453125 149 66.12796020507812 149 L 128.8720550537109 149 C 132.0877838134766 149 135.0792846679688 147.2671356201172 136.6791381835938 144.4775848388672 L 168.2232818603516 89.47759246826172 C 169.8073272705078 86.71572875976562 169.8072814941406 83.28427124023438 168.2232818603516 80.52240753173828 L 136.6791381835938 25.52236938476562 C 135.0792846679688 22.73286437988281 132.0877838134766 21 128.8720550537109 21 L 66.12796020507812 21 M 66.12796020507812 0 L 128.8720550537109 0 C 139.6207885742188 0 149.548095703125 5.75054931640625 154.8957366943359 15.07463073730469 L 186.4398651123047 70.07463836669922 C 191.7415924072266 79.31867980957031 191.7415924072266 90.68136596679688 186.4398651123047 99.92536163330078 L 154.8957366943359 154.9253692626953 C 149.548095703125 164.2494506835938 139.6207885742188 170 128.8720550537109 170 L 66.12796020507812 170 C 55.37919616699219 170 45.45187377929688 164.2494506835938 40.10423278808594 154.9253692626953 L 8.560150146484375 99.92536163330078 C 3.2584228515625 90.68136596679688 3.2584228515625 79.31867980957031 8.560150146484375 70.07463836669922 L 40.10427856445312 15.07463073730469 C 45.45187377929688 5.75054931640625 55.37924194335938 0 66.12796020507812 0 Z"
                    stroke="none"
                    :fill="$vuetify?.theme?.themes?.light?.colors?.primary"
                  />
                </g>
                <g
                  id="Polygon_10"
                  data-name="Polygon 10"
                  transform="translate(1718 495)"
                  fill="none"
                  opacity="0.286"
                >
                  <path
                    d="M198.625,0a30,30,0,0,1,26.022,15.071l54.789,95.5a30,30,0,0,1,0,29.858l-54.789,95.5A30,30,0,0,1,198.625,251H89.375a30,30,0,0,1-26.022-15.071l-54.789-95.5a30,30,0,0,1,0-29.858l54.789-95.5A30,30,0,0,1,89.375,0Z"
                    stroke="none"
                  />
                  <path
                    d="M 89.37533569335938 21.00001525878906 C 86.16004943847656 21.00001525878906 83.16883850097656 22.73245239257812 81.56883239746094 25.52134704589844 L 26.77993774414062 121.0212860107422 C 25.195068359375 123.7838439941406 25.195068359375 127.2161178588867 26.77993774414062 129.9786224365234 L 81.56877136230469 225.4786224365234 C 83.16877746582031 228.2675018310547 86.16004943847656 230 89.37527465820312 230 L 198.6246643066406 230 C 201.8399353027344 230 204.8312225341797 228.2675018310547 206.4312133789062 225.4786682128906 L 261.2200012207031 129.9787292480469 C 262.804931640625 127.2161712646484 262.804931640625 123.7838973999023 261.2200622558594 121.0213928222656 L 206.4312133789062 25.52139282226562 C 204.8312225341797 22.73251342773438 201.8399353027344 21.00001525878906 198.6246643066406 21.00001525878906 L 89.37533569335938 21.00001525878906 M 89.37533569335938 1.52587890625e-05 L 198.6246643066406 1.52587890625e-05 C 209.3720092773438 1.52587890625e-05 219.2982788085938 5.749069213867188 224.6464538574219 15.0711669921875 L 279.4352722167969 110.5712280273438 C 284.7396240234375 119.8169555664062 284.7396240234375 131.1830139160156 279.4352722167969 140.4288330078125 L 224.6464538574219 235.9288330078125 C 219.2982788085938 245.2509460449219 209.3720092773438 251 198.6246643066406 251 L 89.37527465820312 251 C 78.62800598144531 251 68.70172119140625 245.2509460449219 63.35356140136719 235.9288330078125 L 8.564727783203125 140.4287872314453 C 3.2603759765625 131.1830139160156 3.2603759765625 119.8169555664062 8.564727783203125 110.5711669921875 L 63.35360717773438 15.0711669921875 C 68.70172119140625 5.749069213867188 78.62800598144531 1.52587890625e-05 89.37533569335938 1.52587890625e-05 Z"
                    stroke="none"
                    :fill="$vuetify?.theme?.themes?.light?.colors?.black"
                  />
                </g>
                <g
                  id="Repeat_Grid_8"
                  data-name="Repeat Grid 8"
                  transform="translate(1526 202)"
                  clip-path="url(#clip-path-2)"
                >
                  <g transform="translate(-1537 -172)">
                    <g
                      id="Ellipse_11"
                      data-name="Ellipse 11"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1513 -172)">
                    <g
                      id="Ellipse_12"
                      data-name="Ellipse 12"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1489 -172)">
                    <g
                      id="Ellipse_13"
                      data-name="Ellipse 13"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1465 -172)">
                    <g
                      id="Ellipse_14"
                      data-name="Ellipse 14"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1441 -172)">
                    <g
                      id="Ellipse_15"
                      data-name="Ellipse 15"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1417 -172)">
                    <g
                      id="Ellipse_16"
                      data-name="Ellipse 16"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1537 -148)">
                    <g
                      id="Ellipse_17"
                      data-name="Ellipse 17"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1513 -148)">
                    <g
                      id="Ellipse_18"
                      data-name="Ellipse 18"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1489 -148)">
                    <g
                      id="Ellipse_19"
                      data-name="Ellipse 19"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1465 -148)">
                    <g
                      id="Ellipse_20"
                      data-name="Ellipse 20"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1441 -148)">
                    <g
                      id="Ellipse_21"
                      data-name="Ellipse 21"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1417 -148)">
                    <g
                      id="Ellipse_22"
                      data-name="Ellipse 22"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1537 -124)">
                    <g
                      id="Ellipse_23"
                      data-name="Ellipse 23"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1513 -124)">
                    <g
                      id="Ellipse_24"
                      data-name="Ellipse 24"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1489 -124)">
                    <g
                      id="Ellipse_25"
                      data-name="Ellipse 25"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1465 -124)">
                    <g
                      id="Ellipse_26"
                      data-name="Ellipse 26"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1441 -124)">
                    <g
                      id="Ellipse_27"
                      data-name="Ellipse 27"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1417 -124)">
                    <g
                      id="Ellipse_28"
                      data-name="Ellipse 28"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1537 -100)">
                    <g
                      id="Ellipse_29"
                      data-name="Ellipse 29"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1513 -100)">
                    <g
                      id="Ellipse_30"
                      data-name="Ellipse 30"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1489 -100)">
                    <g
                      id="Ellipse_31"
                      data-name="Ellipse 31"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1465 -100)">
                    <g
                      id="Ellipse_32"
                      data-name="Ellipse 32"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1441 -100)">
                    <g
                      id="Ellipse_33"
                      data-name="Ellipse 33"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1417 -100)">
                    <g
                      id="Ellipse_34"
                      data-name="Ellipse 34"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1537 -76)">
                    <g
                      id="Ellipse_35"
                      data-name="Ellipse 35"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1513 -76)">
                    <g
                      id="Ellipse_36"
                      data-name="Ellipse 36"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1489 -76)">
                    <g
                      id="Ellipse_37"
                      data-name="Ellipse 37"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1465 -76)">
                    <g
                      id="Ellipse_38"
                      data-name="Ellipse 38"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1441 -76)">
                    <g
                      id="Ellipse_39"
                      data-name="Ellipse 39"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1417 -76)">
                    <g
                      id="Ellipse_40"
                      data-name="Ellipse 40"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1537 -52)">
                    <g
                      id="Ellipse_41"
                      data-name="Ellipse 41"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1513 -52)">
                    <g
                      id="Ellipse_42"
                      data-name="Ellipse 42"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1489 -52)">
                    <g
                      id="Ellipse_43"
                      data-name="Ellipse 43"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1465 -52)">
                    <g
                      id="Ellipse_44"
                      data-name="Ellipse 44"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1441 -52)">
                    <g
                      id="Ellipse_45"
                      data-name="Ellipse 45"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1417 -52)">
                    <g
                      id="Ellipse_46"
                      data-name="Ellipse 46"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1537 -28)">
                    <g
                      id="Ellipse_47"
                      data-name="Ellipse 47"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1513 -28)">
                    <g
                      id="Ellipse_48"
                      data-name="Ellipse 48"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1489 -28)">
                    <g
                      id="Ellipse_49"
                      data-name="Ellipse 49"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1465 -28)">
                    <g
                      id="Ellipse_50"
                      data-name="Ellipse 50"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1441 -28)">
                    <g
                      id="Ellipse_51"
                      data-name="Ellipse 51"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                  <g transform="translate(-1417 -28)">
                    <g
                      id="Ellipse_52"
                      data-name="Ellipse 52"
                      transform="translate(1537 172)"
                      fill="none"
                      :stroke="$vuetify?.theme?.themes?.light?.colors?.primary"
                      stroke-width="2"
                    >
                      <circle cx="8" cy="8" r="8" stroke="none" />
                      <circle cx="8" cy="8" r="7" fill="none" />
                    </g>
                  </g>
                </g>
                <g
                  id="Polygon_11"
                  data-name="Polygon 11"
                  transform="translate(367)"
                  fill="none"
                  opacity="0.141"
                >
                  <path
                    d="M230.113,0a30,30,0,0,1,26.031,15.087l65.313,114a30,30,0,0,1,0,29.827l-65.312,114A30,30,0,0,1,230.113,288H99.887a30,30,0,0,1-26.031-15.087l-65.312-114a30,30,0,0,1,0-29.827l65.313-114A30,30,0,0,1,99.887,0Z"
                    stroke="none"
                  />
                  <path
                    d="M 99.88719177246094 21 C 96.66975402832031 21 93.67744445800781 22.7342529296875 92.07806396484375 25.5260009765625 L 26.7655029296875 139.5260009765625 C 25.1844482421875 142.2856903076172 25.1844482421875 145.7143707275391 26.7655029296875 148.4739990234375 L 92.07806396484375 262.4740600585938 C 93.67744445800781 265.2657470703125 96.66975402832031 267 99.88719177246094 267 L 230.1126861572266 267 C 233.3301849365234 267 236.3225708007812 265.2656860351562 237.9219360351562 262.4739990234375 L 303.2344360351562 148.4740600585938 C 304.8154907226562 145.7143707275391 304.8154907226562 142.2856292724609 303.2344360351562 139.5260009765625 L 237.9219970703125 25.5260009765625 C 236.3225708007812 22.7342529296875 233.3302612304688 21 230.1128234863281 21 L 99.88719177246094 21 M 99.88719177246094 0 L 230.1128234863281 0 C 240.8664398193359 0 250.7975616455078 5.75579833984375 256.1433715820312 15.08663940429688 L 321.4558715820312 129.0866241455078 C 326.7484436035156 138.3245697021484 326.7484436035156 149.6754302978516 321.4558715820312 158.9133758544922 L 256.1433715820312 272.9133605957031 C 250.7975616455078 282.2442016601562 240.8664398193359 287.9999389648438 230.1128234863281 288 L 99.88719177246094 288 C 89.13349914550781 288 79.20237731933594 282.2442016601562 73.85662841796875 272.9133605957031 L 8.5440673828125 158.9133758544922 C 3.251556396484375 149.6754302978516 3.251556396484375 138.3244934082031 8.54412841796875 129.0866241455078 L 73.85662841796875 15.08663940429688 C 79.20243835449219 5.75579833984375 89.13356018066406 0 99.88719177246094 0 Z"
                    stroke="none"
                    :fill="$vuetify?.theme?.themes?.light?.colors?.primary"
                  />
                </g>
                <g
                  id="Polygon_12"
                  data-name="Polygon 12"
                  transform="translate(0 1039)"
                  fill="none"
                  opacity="0.14"
                >
                  <path
                    d="M152.123,0a30,30,0,0,1,26.023,15.073l39.292,68.5a30,30,0,0,1,0,29.854l-39.292,68.5A30,30,0,0,1,152.123,197H73.877a30,30,0,0,1-26.023-15.073l-39.292-68.5a30,30,0,0,1,0-29.854l39.292-68.5A30,30,0,0,1,73.877,0Z"
                    stroke="none"
                  />
                  <path
                    d="M 73.87684631347656 21 C 70.66130065917969 21 67.66984558105469 22.73269653320312 66.0699462890625 25.52189636230469 L 26.77810668945312 94.02189636230469 C 25.19369506835938 96.78410339355469 25.19369506835938 100.2158508300781 26.77810668945312 102.9780502319336 L 66.0699462890625 171.4780578613281 C 67.66984558105469 174.2673034667969 70.66130065917969 176 73.87684631347656 176 L 152.1231536865234 176 C 155.3386993408203 176 158.3301086425781 174.2673034667969 159.9299926757812 171.4780578613281 L 199.2218933105469 102.9779968261719 C 200.8063049316406 100.2158508300781 200.8063049316406 96.78410339355469 199.2218933105469 94.02194976806641 L 159.9299011230469 25.5218505859375 C 158.3300476074219 22.73265075683594 155.3386993408203 21 152.1231536865234 21 L 73.87684631347656 21 M 73.87684631347656 0 L 152.1231536865234 0 C 162.8713073730469 0 172.7982025146484 5.749893188476562 178.14599609375 15.07319641113281 L 217.4378967285156 83.57315063476562 C 222.7407531738281 92.81794738769531 222.7407531738281 104.1820526123047 217.4378967285156 113.4268035888672 L 178.14599609375 181.9268493652344 C 172.7982025146484 191.2500457763672 162.8713073730469 197 152.1231536865234 197 L 73.87684631347656 197 C 63.12869262695312 197 53.20179748535156 191.2500457763672 47.85394287109375 181.9268493652344 L 8.562103271484375 113.4268035888672 C 3.259246826171875 104.1820526123047 3.259246826171875 92.81794738769531 8.562103271484375 83.57315063476562 L 47.85394287109375 15.07315063476562 C 53.20179748535156 5.749893188476562 63.12869262695312 0 73.87684631347656 0 Z"
                    stroke="none"
                    :fill="$vuetify?.theme?.themes?.light?.colors?.primary"
                  />
                </g>
              </g>
            </g>
            <rect
              id="Rectangle_31"
              data-name="Rectangle 31"
              width="1920"
              height="1175"
              fill="none"
            />
          </g>
        </g>
      </svg> -->

      <v-img
        :src="blok?.backgroundImage?.filename"
        class="c-hero__background-image position-relative"
        height="100vh"
        cover
        position="top"
      >

        <div
          class="c-hero__image-copy text-white position-absolute top-5 left-5"
        >
          <h1 class="text-h4 mb-8">{{ blok?.title }}</h1>
          <h2 class="text-h2 mb-8">{{ blok?.subtitle }}</h2>
          <p class="mb-10">{{ blok?.description }}</p>
          <div>
            <v-btn
              class="c-hero__image-button mr-3"
              color="primary"
              variant="outlined"
              rounded="xl"
              size="large"
              :to="blok?.button[0]?.url"
            >
              <span class="text-white">{{ blok?.button[0]?.text }}</span>
            </v-btn>
            <v-avatar
              v-for="social in blok?.socials"
              :key="social?.i"
              size="42"
              color="primary"
              variant="outlined"
              class="mr-3"
              @click="openSocial(social?.url)"
            >
              <v-icon color="primary" size="30">
                {{ social?.icon }}
              </v-icon>
            </v-avatar>
          </div>
        </div>
      </v-img>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({ blok: Object });

const openSocial = (url) => {
  if (url) {
    window.open(url, "_blank");
  }
};
</script>

<style lang="scss" scoped>
.c-hero {
  &__background-image {
    position: relative;
  }
  &__image-copy {
    position: absolute;
    left: 100px;
    top: 50%;
    transform: translate(0%, -50%);
    max-width: 35%;
  }
}
</style>

<!-- https://codepen.io/chadd/pen/MWQwowx -->
