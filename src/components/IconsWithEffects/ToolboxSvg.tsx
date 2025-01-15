interface ToolboxSvgProps {
  hover: boolean;
}
function ToolboxSvg({ hover = false }: ToolboxSvgProps) {
  return (
    <svg
      width="780"
      height="400"
      viewBox="0 160 780 780"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="toolbox-bg"
    >
      <defs>
        <radialGradient id="dynamicGradient" cx="50%" cy="50%" r="50%">
          <stop
            offset="70%"
            style={{
              stopColor: !hover ? '#1A2230' : '#1A2230',
              stopOpacity: !hover ? '0' : '1',
              transition:
                'stop-color 0.6s ease-in-out, stop-opacity 0.4s ease-in-out',
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: !hover ? '#353845' : '#2c539b',
              stopOpacity: !hover ? '1' : '1',
              transition:
                'stop-color 0.6s ease-in-out, stop-opacity 0.4s ease-in-out',
            }}
          />
        </radialGradient>
      </defs>

      <circle
        opacity="0.2"
        cx="390"
        cy="390"
        r="489.5"
        className="toolbox-bg-circle"
        fill="url(#dynamicGradient)"
      />
      <circle
        opacity="0.3"
        cx="390"
        cy="390"
        r="389.5"
        fill="url(#dynamicGradient)"
        className="toolbox-bg-circle"
      />
      <circle
        opacity="0.4"
        cx="390"
        cy="390"
        r="289.5"
        fill="url(#dynamicGradient)"
        className="toolbox-bg-circle"
      />
      <circle
        opacity="0.6"
        cx="390"
        cy="390"
        r="199.5"
        fill="url(#dynamicGradient)"
        className="toolbox-bg-circle"
      />
      <circle
        opacity="0.7"
        cx="390"
        cy="390"
        r="119.5"
        fill="url(#dynamicGradient)"
        className="toolbox-bg-circle"
      />
      <path
        opacity="0.8"
        d="M390 440C417.614 440 440 417.614 440 390C440 362.386 417.614 340 390 340C362.386 340 340 362.386 340 390C340 417.614 362.386 440 390 440Z"
        fill="url(#dynamicGradient)"
        className="toolbox-bg-circle"
      />
      <path
        d="M389.282 382.447H376.16L408.16 413.986L389.282 382.447Z"
        fill={!hover ? '#c4c4c4' : '#1F7FF0'}
        // fill="#1F7FF0"
        fill-opacity="0.7"
        className="toolbox-logo-part"
      />
      <path
        d="M393.871 372.942H376.275L376.553 374.051C376.675 374.535 376.847 375.004 377.067 375.451C377.306 375.937 377.6 376.394 377.943 376.813L378.024 376.911C378.392 377.36 378.807 377.769 379.262 378.13L379.437 378.269C379.861 378.606 380.311 378.908 380.783 379.174L381.322 379.477C381.64 379.657 381.972 379.812 382.315 379.94C383.116 380.241 383.966 380.395 384.822 380.395H394.324C394.873 380.395 395.417 380.488 395.935 380.67C396.632 380.915 397.264 381.317 397.783 381.844L397.864 381.926C398.203 382.271 398.486 382.668 398.701 383.102C399.017 383.737 399.182 384.437 399.182 385.146V385.406C399.182 386.086 399.004 386.754 398.665 387.344C398.473 387.678 398.233 387.982 397.952 388.245L397.827 388.363C397.353 388.807 396.798 389.156 396.193 389.39L396.11 389.422C395.477 389.666 394.805 389.792 394.127 389.792H381.929C381.388 389.792 380.853 389.899 380.353 390.107C380.167 390.185 379.987 390.276 379.814 390.38L379.246 390.723C378.726 391.037 378.254 391.424 377.845 391.872C377.34 392.425 376.937 393.063 376.655 393.757L376.64 393.793C376.323 394.575 376.16 395.41 376.16 396.253V405.563C376.16 406.633 376.355 407.694 376.736 408.693L376.981 409.231C377.276 409.877 377.668 410.474 378.144 411.001C378.508 411.405 378.919 411.766 379.368 412.074L379.856 412.41C380.231 412.668 380.626 412.895 381.038 413.088C381.848 413.468 382.714 413.715 383.602 413.819L384.103 413.878V396.704H395.798C397.57 396.704 399.318 396.298 400.908 395.516L401.619 395.1C402.37 394.659 403.06 394.123 403.673 393.504C404.055 393.118 404.405 392.702 404.719 392.259L405.437 391.248C405.869 390.64 406.22 389.978 406.479 389.278C406.83 388.332 407.009 387.331 407.009 386.322V384.579C407.009 383.03 406.696 381.496 406.088 380.071L405.565 379.203C404.92 378.131 404.119 377.162 403.188 376.327C402.362 375.586 401.443 374.957 400.453 374.457L400.415 374.438C399.443 373.947 398.413 373.581 397.35 373.348L397.088 373.29C396.031 373.059 394.953 372.942 393.871 372.942Z"
        fill="url(#paint5_linear_1674_83)"
      />
      <g clip-path="url(#clip0_1674_83)">
        <path
          d="M589.678 426.131C601.607 426.131 611.277 416.461 611.277 404.533C611.277 392.604 601.607 382.934 589.678 382.934C577.75 382.934 568.08 392.604 568.08 404.533C568.08 416.461 577.75 426.131 589.678 426.131Z"
          fill="white"
          stroke="#3C63FF"
        />
        <path
          d="M589.5 393C582.6 393 577 398.6 577 405.5C577 412.4 582.6 418 589.5 418C596.4 418 602 412.4 602 405.5C602 398.6 596.4 393 589.5 393Z"
          fill="#1ED760"
        />
        <path
          d="M597.494 404.245C597.232 404.245 597.071 404.179 596.844 404.048C593.255 401.906 586.839 401.392 582.685 402.551C582.504 402.602 582.277 402.682 582.035 402.682C581.37 402.682 580.861 402.163 580.861 401.493C580.861 400.807 581.284 400.419 581.738 400.288C583.512 399.769 585.498 399.522 587.66 399.522C591.34 399.522 595.196 400.288 598.013 401.931C598.406 402.158 598.663 402.471 598.663 403.071C598.663 403.756 598.109 404.245 597.494 404.245ZM595.931 408.086C595.669 408.086 595.493 407.97 595.311 407.874C592.161 406.009 587.464 405.258 583.285 406.392C583.043 406.458 582.912 406.523 582.685 406.523C582.146 406.523 581.708 406.085 581.708 405.545C581.708 405.006 581.97 404.648 582.489 404.502C583.89 404.109 585.322 403.817 587.418 403.817C590.69 403.817 593.85 404.628 596.34 406.11C596.748 406.352 596.909 406.664 596.909 407.103C596.904 407.647 596.481 408.086 595.931 408.086ZM594.576 411.392C594.364 411.392 594.233 411.327 594.036 411.211C590.891 409.316 587.232 409.235 583.618 409.976C583.421 410.026 583.164 410.107 583.018 410.107C582.529 410.107 582.222 409.719 582.222 409.31C582.222 408.791 582.529 408.544 582.907 408.464C587.035 407.551 591.254 407.632 594.853 409.784C595.16 409.981 595.342 410.157 595.342 410.616C595.342 411.075 594.984 411.392 594.576 411.392Z"
          fill="black"
        />
      </g>
      <g clip-path="url(#clip1_1674_83)">
        <path
          d="M556.394 292.402C568.536 292.402 578.378 282.56 578.378 270.418C578.378 258.277 568.536 248.434 556.394 248.434C544.253 248.434 534.41 258.277 534.41 270.418C534.41 282.56 544.253 292.402 556.394 292.402Z"
          fill="white"
          stroke="#3C63FF"
        />
        <path
          d="M567.5 267.345L566.701 265.188L567.251 263.95C567.32 263.787 567.285 263.606 567.165 263.477L565.661 261.956C564.999 261.295 564.02 261.063 563.134 261.372L562.713 261.518L560.41 259.026L556.517 259H556.491L552.573 259.034L550.278 261.544L549.866 261.398C548.972 261.08 547.984 261.312 547.322 261.991L545.792 263.537C545.689 263.641 545.663 263.787 545.715 263.916L546.291 265.205L545.5 267.362L546.016 269.313L548.353 278.19C548.62 279.212 549.238 280.106 550.106 280.725C550.106 280.725 552.942 282.727 555.735 284.541C555.984 284.704 556.242 284.816 556.517 284.816C556.792 284.816 557.05 284.704 557.299 284.541C560.445 282.478 562.928 280.716 562.928 280.716C563.788 280.098 564.406 279.204 564.673 278.181L566.993 269.304L567.5 267.345Z"
          fill="#F15A22"
        />
        <path
          //   style="mix-blend-mode:lighten"
          opacity="0.15"
          d="M548.465 278.567L545.5 267.55L546.368 265.393L545.766 263.794L547.202 262.333C547.674 261.912 548.602 261.766 549.032 262.015L551.275 263.305L554.197 263.983L556.474 263.038L556.663 282.606C556.629 285.425 556.809 285.124 554.738 283.792L549.625 280.363C549.075 279.839 548.654 279.246 548.465 278.567Z"
          fill="url(#paint6_linear_1674_83)"
        />
        <path
          //   style="mix-blend-mode:darken"
          opacity="0.4"
          d="M562.877 280.676L558.528 283.65C557.316 284.311 556.732 284.965 556.638 284.647C556.56 284.397 556.62 283.667 556.595 282.532L556.543 263.394C556.552 263.205 556.68 262.887 556.904 262.922L559.121 263.592L562.318 263.093L564.432 261.538C564.655 261.366 564.982 261.383 565.188 261.581L567.079 263.386C567.251 263.566 567.259 263.918 567.156 264.142L566.632 265.113L567.5 267.356L564.509 278.476C564.045 279.86 563.392 280.221 562.877 280.676Z"
          fill="url(#paint7_linear_1674_83)"
        />
        <path
          d="M557.017 274.881C556.914 274.838 556.802 274.804 556.767 274.804H556.63H556.492C556.458 274.804 556.346 274.838 556.243 274.881L555.126 275.345C555.023 275.388 554.851 275.465 554.748 275.517L553.064 276.394C552.96 276.445 552.952 276.54 553.046 276.608L554.533 277.657C554.628 277.726 554.774 277.837 554.86 277.915L555.521 278.482C555.607 278.559 555.745 278.679 555.831 278.757L556.467 279.324C556.553 279.401 556.69 279.401 556.776 279.324L557.429 278.757C557.515 278.679 557.653 278.559 557.739 278.482L558.4 277.906C558.486 277.829 558.632 277.717 558.727 277.648L560.214 276.591C560.308 276.522 560.299 276.428 560.196 276.376L558.512 275.517C558.409 275.465 558.237 275.388 558.134 275.345L557.017 274.881Z"
          fill="white"
        />
        <path
          d="M565.075 267.728C565.109 267.616 565.109 267.574 565.109 267.574C565.109 267.462 565.1 267.273 565.083 267.161L564.997 266.912C564.946 266.809 564.86 266.645 564.791 266.551L563.82 265.116C563.76 265.021 563.648 264.875 563.571 264.781L562.316 263.208C562.247 263.122 562.178 263.045 562.17 263.053H562.153C562.153 263.053 562.058 263.07 561.946 263.088L560.03 263.466C559.918 263.491 559.738 263.526 559.626 263.543L559.592 263.552C559.48 263.569 559.3 263.56 559.188 263.526L557.581 263.01C557.469 262.976 557.289 262.924 557.185 262.899C557.185 262.899 556.859 262.821 556.593 262.83C556.326 262.83 556 262.899 556 262.899C555.888 262.924 555.707 262.976 555.604 263.01L553.997 263.526C553.886 263.56 553.705 263.569 553.593 263.552L553.559 263.543C553.447 263.526 553.267 263.483 553.155 263.466L551.221 263.105C551.11 263.079 551.015 263.07 551.015 263.07H550.998C550.989 263.07 550.921 263.139 550.852 263.225L549.597 264.798C549.528 264.884 549.417 265.038 549.348 265.133L548.377 266.568C548.317 266.663 548.222 266.826 548.171 266.929L548.085 267.178C548.068 267.29 548.05 267.479 548.059 267.591C548.059 267.591 548.059 267.625 548.093 267.745C548.153 267.952 548.3 268.141 548.3 268.141C548.368 268.227 548.497 268.373 548.575 268.45L551.419 271.475C551.496 271.561 551.522 271.716 551.479 271.819L550.886 273.22C550.843 273.323 550.835 273.495 550.878 273.606L551.041 274.045C551.178 274.414 551.41 274.741 551.72 274.99L552.296 275.454C552.382 275.523 552.536 275.549 552.639 275.497L554.461 274.629C554.564 274.577 554.719 274.474 554.805 274.397L556.111 273.22C556.3 273.048 556.309 272.756 556.137 272.566L553.396 270.719C553.301 270.659 553.267 270.521 553.318 270.418L554.521 268.149C554.573 268.046 554.582 267.883 554.539 267.78L554.393 267.445C554.35 267.341 554.221 267.221 554.118 267.178L550.586 265.855C550.482 265.812 550.482 265.769 550.594 265.76L552.871 265.545C552.983 265.537 553.164 265.554 553.275 265.58L555.303 266.147C555.415 266.181 555.484 266.293 555.467 266.405L554.762 270.263C554.745 270.375 554.745 270.53 554.771 270.616C554.796 270.702 554.908 270.779 555.02 270.805L556.429 271.106C556.541 271.131 556.721 271.131 556.833 271.106L558.148 270.805C558.26 270.779 558.371 270.693 558.397 270.616C558.423 270.538 558.432 270.375 558.406 270.263L557.71 266.405C557.693 266.293 557.761 266.173 557.873 266.147L559.901 265.58C560.013 265.545 560.193 265.537 560.305 265.545L562.582 265.76C562.694 265.769 562.703 265.812 562.591 265.855L559.059 267.195C558.956 267.238 558.827 267.35 558.784 267.462L558.638 267.797C558.595 267.9 558.595 268.072 558.655 268.166L559.867 270.435C559.918 270.538 559.884 270.667 559.789 270.736L557.048 272.592C556.868 272.773 556.885 273.074 557.074 273.245L558.38 274.423C558.466 274.5 558.621 274.603 558.724 274.646L560.554 275.514C560.657 275.566 560.812 275.54 560.898 275.471L561.474 274.999C561.783 274.749 562.015 274.423 562.144 274.053L562.307 273.615C562.35 273.512 562.342 273.331 562.299 273.228L561.706 271.827C561.663 271.724 561.689 271.57 561.766 271.484L564.61 268.459C564.688 268.373 564.808 268.235 564.886 268.149C564.868 268.124 565.023 267.934 565.075 267.728Z"
          fill="white"
        />
      </g>
      <g clip-path="url(#clip2_1674_83)">
        <path
          d="M398.5 212.37C410.641 212.37 420.484 202.527 420.484 190.386C420.484 178.244 410.641 168.402 398.5 168.402C386.358 168.402 376.516 178.244 376.516 190.386C376.516 202.527 386.358 212.37 398.5 212.37Z"
          fill="white"
          stroke="#3C63FF"
        />
        <path
          d="M394.5 202C396.708 202 398.5 200.208 398.5 198V194H394.5C392.292 194 390.5 195.792 390.5 198C390.5 200.208 392.292 202 394.5 202Z"
          fill="#0ACF83"
        />
        <path
          d="M390.5 190C390.5 187.792 392.292 186 394.5 186H398.5V194H394.5C392.292 194 390.5 192.208 390.5 190Z"
          fill="#A259FF"
        />
        <path
          d="M390.5 182C390.5 179.792 392.292 178 394.5 178H398.5V186H394.5C392.292 186 390.5 184.208 390.5 182Z"
          fill="#F24E1E"
        />
        <path
          d="M398.5 178H402.5C404.708 178 406.5 179.792 406.5 182C406.5 184.208 404.708 186 402.5 186L398.5 186V178Z"
          fill="#FF7262"
        />
        <path
          d="M406.5 190C406.5 192.208 404.708 194 402.5 194C400.292 194 398.5 192.208 398.5 190C398.5 187.792 400.292 186 402.5 186C404.708 186 406.5 187.792 406.5 190Z"
          fill="#1ABCFE"
        />
      </g>
      <g clip-path="url(#clip3_1674_83)">
        <path
          d="M230.605 292.402C242.747 292.402 252.589 282.56 252.589 270.418C252.589 258.277 242.747 248.434 230.605 248.434C218.464 248.434 208.621 258.277 208.621 270.418C208.621 282.56 218.464 292.402 230.605 292.402Z"
          fill="white"
          stroke="#3C63FF"
        />
        <path
          d="M223.139 262.383C223.917 263.015 224.209 262.967 225.67 262.869L239.446 262.043C239.738 262.043 239.495 261.751 239.397 261.703L237.109 260.05C236.671 259.71 236.087 259.321 234.968 259.418L221.629 260.39C221.142 260.438 221.045 260.681 221.239 260.876L223.139 262.383ZM223.966 265.591V280.075C223.966 280.853 224.355 281.144 225.231 281.096L240.371 280.221C241.247 280.173 241.345 279.637 241.345 279.005V264.618C241.345 263.987 241.102 263.647 240.565 263.695L224.744 264.618C224.16 264.667 223.966 264.959 223.966 265.591ZM238.911 266.368C239.009 266.806 238.911 267.243 238.472 267.293L237.743 267.438V278.131C237.109 278.471 236.526 278.665 236.039 278.665C235.26 278.665 235.065 278.422 234.481 277.693L229.709 270.208V277.45L231.219 277.791C231.219 277.791 231.219 278.665 230.001 278.665L226.643 278.86C226.545 278.665 226.643 278.18 226.984 278.082L227.86 277.84V268.264L226.643 268.167C226.546 267.729 226.789 267.098 227.471 267.049L231.073 266.806L236.039 274.388V267.681L234.773 267.536C234.676 267 235.065 266.612 235.551 266.563L238.911 266.368ZM220.509 259.078L234.384 258.057C236.087 257.911 236.526 258.009 237.597 258.786L242.026 261.897C242.756 262.432 243 262.577 243 263.16V280.221C243 281.29 242.61 281.922 241.247 282.019L225.135 282.991C224.112 283.04 223.625 282.894 223.089 282.213L219.827 277.985C219.243 277.207 219 276.624 219 275.943V260.779C219 259.904 219.39 259.175 220.509 259.078Z"
          fill="black"
        />
      </g>
      <g clip-path="url(#clip4_1674_83)">
        <path
          d="M190.321 426.131C202.25 426.131 211.919 416.461 211.919 404.533C211.919 392.604 202.25 382.934 190.321 382.934C178.393 382.934 168.723 392.604 168.723 404.533C168.723 416.461 178.393 426.131 190.321 426.131Z"
          fill="white"
          stroke="#3C63FF"
        />
        <path
          d="M177.247 401.067C177.247 401.067 176.614 400.605 177.374 399.989L179.145 398.389C179.145 398.389 179.651 397.85 180.187 398.319L196.525 410.823V416.819C196.525 416.819 196.517 417.76 195.322 417.656L177.247 401.067Z"
          fill="#2489CA"
        />
        <path
          d="M181.459 404.931L177.247 408.801C177.247 408.801 176.815 409.127 177.247 409.708L179.203 411.506C179.203 411.506 179.667 412.01 180.353 411.436L184.817 408.014L181.459 404.931Z"
          fill="#1070B3"
        />
        <path
          d="M188.852 404.963L196.575 399.002L196.525 393.039C196.525 393.039 196.195 391.737 195.095 392.414L184.818 401.869L188.852 404.963Z"
          fill="#0877B9"
        />
        <path
          d="M195.322 417.664C195.77 418.128 196.314 417.976 196.314 417.976L202.333 414.978C203.103 414.448 202.995 413.789 202.995 413.789V395.887C202.995 395.1 202.198 394.828 202.198 394.828L196.981 392.286C195.842 391.574 195.095 392.414 195.095 392.414C195.095 392.414 196.055 391.716 196.525 393.039L196.525 416.709C196.525 416.872 196.491 417.032 196.422 417.176C196.285 417.456 195.987 417.717 195.272 417.608L195.322 417.664Z"
          fill="#3C99D4"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_1674_83"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(390 390) rotate(90) scale(390)"
        >
          <stop offset="0.69" stop-color="#1A2230" stop-opacity="0" />
          <stop offset="1" stop-color="#2C539B" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1674_83"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(390 390) rotate(90) scale(290)"
        >
          <stop offset="0.69" stop-color="#1A2230" stop-opacity="0" />
          <stop offset="1" stop-color="#2C539B" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1674_83"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(390 390) rotate(90) scale(200)"
        >
          <stop offset="0.69" stop-color="#1A2230" stop-opacity="0" />
          <stop offset="1" stop-color="#2C539B" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_1674_83"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(390 390) rotate(90) scale(120)"
        >
          <stop offset="0.69" stop-color="#1A2230" stop-opacity="0" />
          <stop offset="1" stop-color="#2C539B" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_1674_83"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(390 390) rotate(90) scale(50.4966)"
        >
          <stop offset="0.5" stop-color="#1A2230" stop-opacity="0" />
          <stop offset="1" stop-color="#2C539B" />
        </radialGradient>
        <linearGradient
          id="paint5_linear_1674_83"
          x1="376.16"
          y1="372.942"
          x2="398.56"
          y2="413.221"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.479167" stop-color="#E9ECEF" />
          <stop offset="1" stop-color="#E9ECEF" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_1674_83"
          x1="545.5"
          y1="1406.31"
          x2="1662.91"
          y2="1406.31"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.1413" stop-color="white" stop-opacity="0.9576" />
          <stop offset="1" stop-color="white" stop-opacity="0.7" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1674_83"
          x1="556.115"
          y1="1426.49"
          x2="1652.25"
          y2="1426.49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F1F1F2" />
          <stop offset="0.0919144" stop-color="#E4E5E6" />
          <stop offset="0.2357" stop-color="#D9DADB" />
          <stop offset="0.438" stop-color="#D2D4D5" />
          <stop offset="1" stop-color="#D0D2D3" />
        </linearGradient>
        <clipPath id="clip0_1674_83">
          <rect
            width="45"
            height="45"
            fill="white"
            transform="translate(567 382)"
          />
        </clipPath>
        <clipPath id="clip1_1674_83">
          <rect
            width="45"
            height="45"
            fill="white"
            transform="translate(534 248)"
          />
        </clipPath>
        <clipPath id="clip2_1674_83">
          <rect
            width="45"
            height="45"
            fill="white"
            transform="translate(376 168)"
          />
        </clipPath>
        <clipPath id="clip3_1674_83">
          <rect
            width="45"
            height="45"
            fill="white"
            transform="translate(208 248)"
          />
        </clipPath>
        <clipPath id="clip4_1674_83">
          <rect
            width="45"
            height="45"
            fill="white"
            transform="translate(168 382)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ToolboxSvg;
